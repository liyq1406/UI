//玩家实体
function JinHuaTablePlayerEntity(player){
    this.player= player;//玩家属性数据(昵称、性别、头像url、客户端座位号、服务器端座位号)
    this.mPlayerSprite = null;//玩家头像框-精灵
    this.spritePic = null;//玩家头像
    this.labelNameBg = null;//昵称背景
    this.levelPic = null;//等级图标
    this.atlasLevelNum = null;//等级数
    this.labelName = null;//玩家昵称
    this.labelCoin = null;//玩家所拥有的金币数
    this.playerDarkCover = null;//头像上的遮蔽层(蒙黑)
    this.jinbiSprite = null;//禁比精灵
    this.betedCoinLabel = null;//下的金币数
    this.readyIcon = null;//准备Icon
    this.cardTypeSprite = null;//玩家牌型背景
    this.cardTypeLabel = null;//玩家牌型label
    this.goldSpriteBg = null;//玩家金币背景
    this.goldSprite = null;//玩家金币Icon
    this.tipsBg = null;//称谓背景图
    this.tips = null;//等级和称谓
    this.luckyTip = null;//幸运点成就图标
    this.vipLevelPic = null;//vip等级图片
    this.luckyBg = null;//幸运点低
    this.LuckyIcon = null;//幸运点图标
    this.luckyLable = null;//幸运点label
    this.luckyValue = null;//幸运点数  用来在牌桌结算时 计算转换幸运点的差值
    this.cardSprites = {};// 牌精灵

    this.createPlayerView();
}


//function Numbber(){
//    var name="a";
//    console.log(name);
//}
//Numbber.prototype.constructor= function(){
//    console.log(this.name);
//};
//Numbber.prototype.get= function(){
//    console.log(this.name);
//};
//var a= new Numbber();
//var b= new Numbber();
////a.name= "123";
////b.name= "456";
////a.get();
////b.get();
//清理数据
JinHuaTablePlayerEntity.prototype.clearData= function(){
    this.playerDarkCover.removeFromParent(true);
    this.spritePic.removeFromParent(true);
    this.labelName.removeFromParent(true);
    this.labelNameBg.removeFromParent(true);
    this.goldSprite.removeFromParent(true);
    this.goldSpriteBg.removeFromParent(true);
    this.labelCoin.removeFromParent(true);
    this.mPlayerSprite.removeFromParent(true);

    this.player= null;
    this.playerDarkCover= null;
    this.spritePic= null;
    this.labelName= null;
    this.labelNameBg= null;
    this.goldSprite= null;
    this.goldSpriteBg=null;
    this.labelCoin= null;
    this.mPlayerSprite= null;
};
//等级
JinHuaTablePlayerEntity.prototype.createPlayerTips= function(){
    if(this.mPlayerSprite== null) return;

    this.tips = cc.Sprite.create(null);
    this.tips.setColor(cc.color(255, 255, 255));
    this.tips.setPosition(0, this.goldSpriteBg.getPositionY() + this.goldSpriteBg.getContentSize().height / 5);
    this.mPlayerSprite.addChild(this.tips, 2);

    this.updatePlayerTips();
};

//移除牌
JinHuaTablePlayerEntity.prototype.removeCard= function(layer){
    if(this.cardSprites){
        for(var key in this.cardSprites){
            layer.removeChild(this.cardSprites[key], true);
            delete this.cardSprites[key];
        }
    }

    if(this.cardTypeSprite){
        JinHuaTablePlayer.getJinHuaTablePlayerLayer().removeChild(this.cardTypeSprite, true);
        delete  this.cardTypeSprite;
    }
};

//是否为玩家本身
JinHuaTablePlayerEntity.prototype.isMe= function(){
    return ((this.player)&&(this.player.userId== profile_user.getSelfUserID()));
};

//设置玩家头像
JinHuaTablePlayerEntity.prototype.setPortrait= function(path){
    var texture;
    var self= this;
    if(path== null||path== undefined){
        texture= this.getHeadPhotoTextureBySex();
        if(this.mPlayerSprite!=null&&texture!=null&&spritePic!= null){
            this.spritePic.setTexture(texture);
        }
    }else{
        //头像可能会加载失败
        cc.loader.loadImg(path, function(){}, function(err){
            if(err== null){//加载成功
                texture= cc.textureCache.addImage(path);
            }else{
                texture= this.getHeadPhotoTextureBySex();
            }
            if(this.mPlayerSprite!=null&&texture!=null&&self.spritePic!= null){
                self.spritePic.setTexture(texture);
            }
        });
    }
};

//根据性别获取默认的头像图片
JinHuaTablePlayerEntity.prototype.getHeadPhotoTextureBySex= function(){
    if(this.player.userId!= profile_user.getSelfUserID()){
        return cc.textureCache.addImage(Common.getResourcePath("desk_playerhead.png"));
    }else{
        return cc.textureCache.addImage(Common.getResourcePath("desk_playerhead_mine.png"));
    }
};
//根据性别获取默认的头像图片
JinHuaTablePlayerEntity.prototype.getHeadPhotoSpriteBySex= function(){
    if(this.player.userId!= profile_user.getSelfUserID()){
        return cc.Sprite.create(Common.getResourcePath("desk_playerhead.png"));
    }else{
        return cc.Sprite.create(Common.getResourcePath("desk_playerhead_mine.png"));
    }
};
//改变界面上的金币
JinHuaTablePlayerEntity.prototype.changeCoinNumOnView= function(coinNum){
    if(this.mPlayerSprite!= null&&this.mPlayerSprite!= undefined){
        this.labelCoin.setString(coinNum);
        this.setBetCoin();
        this.labelCoin.setPosition(this.goldSpriteBg.getPositionX() + this.goldSprite.getContentSize().width / 2, this.goldSpriteBg.getPositionY() - this.goldSpriteBg.getContentSize().height / 5);
    }
};

JinHuaTablePlayerEntity.prototype.createPlayerView= function(){
    //创建-玩家头像框-精灵
    this.createPlayerSprite();
    //创建头像,添加到头像框上
    this.createPlayerPhoto();
    //创建-头像上的蒙灰遮蔽层(默认不显示,进入牌桌时显示,准备后,移除)
    this.createPlayerDarkCover();
    //创建-玩家背景、昵称(截取)
    this.createPlayerLabelName();
    //创建-自己拥有的金币数、背景、图标
    this.createPlayerLabelCoin();
    //Vip等级图
    this.createPlayerVipPic();
    var isMatch= Profile_JinHuaGameData.getIsMatch();
    if(isMatch== null||isMatch== undefined || isMatch== false){
        //等级
        this.createPlayerTips();
    }
    //创建禁比图标
    this.createJinbiSprite();
    //已压金币数
    this.createBetedCoinLabel();
    //创建准备图标k
    this.createReadyIcon();
    //创建幸运点
    this.createPlayerluckyTips();
    //创建幸运值
    this.createPlayerLabelLucky(this)
};

JinHuaTablePlayerEntity.prototype.updatePlayerTips= function(){
    var coin = this.player.remainCoins;
    var tipLevel = Profile_JinHuaSetting.getUserTitle(coin);
    var url =  "";
    switch (tipLevel[1]){
        case 1:
            url += "ui_xiaoqigai.png";
            break;
        case 2:
            url += "ui_pingmin.png";
            break;
        case 3:
            url += "ui_xiaokang.png";
            break;
        case 4:
            url += "ui_caizhu.png";
            break;
        case 5:
            url += "ui_tuhao.png";
            break;
        case 6:
            url += "ui_yidaijujia.png";
            break;
        case 7:
            url += "ui_fujiatianxia.png";
            break;
        case 8:
            url += "ui_fukediguo.png";
            break;
        case 9:
            url += "ui_guominlaogong.png";
            break;
        default :
            url+= "ui_xiaoqigai.png";
    }
    this.tips.setSpriteFrame(url);
};

/**
 * Func:创建-玩家头像框-精灵
 */
JinHuaTablePlayerEntity.prototype.createPlayerSprite= function(){
    if(this.isMe()){//是否为玩家本身
        this.mPlayerSprite= cc.Sprite.create("#table_kuang.png");
        this.mPlayerSprite.setPosition(Profile_JinHuaTableConfig.mySelfLocX, Profile_JinHuaTableConfig.mySelfLocY)
    }else{
        this.mPlayerSprite= cc.Sprite.create("#table_mine_kuang.png");
        //客户端中对应ID的玩家的位置
        var player= Profile_JinHuaTableConfig.getSpritePlayers()[this.player.CSID];
        this.mPlayerSprite.setPosition(player.locX, player.locY);
    }
    this.mPlayerSprite.setAnchorPoint(cc.p(0, 0));
    this.mPlayerSprite.setZOrder(11);
}

/**
 * Func:初始化头像,添加到头像框上(居中)
 */
JinHuaTablePlayerEntity.prototype.createPlayerPhoto= function(){
    //头像框不能为空
    if(this.mPlayerSprite== null) return;
    //获取头像框的尺寸
    var bgSize= this.mPlayerSprite.getContentSize();
    //初始化头像
    var self= this;
    Common.addSpriteByNet(self.player.photoUrl, function(sprite){
        self.spritePic= ((sprite== "ERROR")?self.getHeadPhotoSpriteBySex():sprite);
        self.spritePic.setPosition(bgSize.width* 0.5, bgSize.height* 0.5);//居中
        self.mPlayerSprite.addChild(self.spritePic, 1);
        if(sprite!= "ERROR"){//网络图片放大
            self.spritePic.setScale(1.2);
            //Todo：裁切节点-圆形
        }
    });
}
/**
 * Func:创建-头像上的蒙灰遮蔽层(默认不显示,进入牌桌时显示,准备后,移除)
 *      头像框居中
 */
JinHuaTablePlayerEntity.prototype.createPlayerDarkCover= function(){
    //头像框不能为空
    if(this.mPlayerSprite== null) return;
    //获取头像框的尺寸
    var bgSize= this.mPlayerSprite.getContentSize();
    //在plist中
    var darkCoverPath= this.isMe()?"#desk_player_cover_mine.png":"#desk_player_cover.png";
    //头像上的蒙灰遮蔽层
    this.playerDarkCover= cc.Sprite.create(darkCoverPath);
    this.playerDarkCover.setPosition(bgSize.width / 2, bgSize.height / 2);
    this.playerDarkCover.setVisible(false);//默认不显示

    this.mPlayerSprite.addChild(this.playerDarkCover, 3);
}
/**
 * Func:创建-玩家背景、昵称(截取)
 */
JinHuaTablePlayerEntity.prototype.createPlayerLabelName= function(){
    //头像框不能为空
    if(this.mPlayerSprite== null) return;
    //获取头像框的尺寸
    var sizeBg= this.mPlayerSprite.getContentSize();

    var nickName= this.player.nickName;//玩家昵称
    //昵称背景
    this.labelNameBg = cc.Sprite.create("#ui_paizhuo_xingmingkuang.png");
    this.labelNameBg.setPosition(sizeBg.width / 2,sizeBg.height);
    this.mPlayerSprite.addChild(this.labelNameBg, 2);

    //名字的最大长度（超出最大长度截取+..）
    this.labelName = cc.LabelTTF.create(nickName, "Arial", 17);
    this.labelName.setColor(cc.color(240, 229, 232));
    this.labelName.setPosition(sizeBg.width / 2 + this.labelNameBg.getContentSize().width / 10, sizeBg.height);
    this.mPlayerSprite.addChild(this.labelName, 2);

    //玩家自身 隐藏昵称
    if(this.isMe()){
        this.labelNameBg.setVisible(false);
        this.labelName.setVisible(false);
    }

    //玩家的昵称= 小雨昵称背景*0.75的文本+ (超出部分使用'..'代替）
    var nameMaxWidth = this.labelNameBg.getContentSize().width * 3 / 4;
    //截取固定长度的字符串
    while (this.labelName.width> nameMaxWidth){
        nickName= nickName.substring(0, nickName.length- 2);
        this.labelName.setString(nickName+"..");
    }
}
/**
 * Func:创建-自己拥有的金币数、背景、图标
 */
JinHuaTablePlayerEntity.prototype.createPlayerLabelCoin= function(){
    //头像框不能为空
    if(this.mPlayerSprite== null) return;
    //获取头像框的尺寸
    var sizeBg= this.mPlayerSprite.getContentSize();

    //金币条背景
    this.goldSpriteBg = cc.Sprite.create("#ui_paizhuo_yonghuxinxidikuang.png");
    this.mPlayerSprite.addChild(this.goldSpriteBg, 2);

    //金币图标
    var goldIconPath= Profile_JinHuaGameData.getIsMatch()?"#ic_jinbi_fenshu.png":"#desk_coin_logo.png";
    this.goldSprite = cc.Sprite.create(goldIconPath);
    this.mPlayerSprite.addChild(this.goldSprite, 2);
    //金币背景位置
    var goldBgPos= this.isMe()?cc.p(sizeBg.width / 2, 33):cc.p(sizeBg.width / 2, 13);
    var goldPos= this.isMe()?cc.p(sizeBg.width / 2 - 59, 19):cc.p(sizeBg.width / 2 - 59, 0);

    this.goldSpriteBg.setPosition(goldBgPos);
    this.goldSprite.setPosition(goldPos);

    //金币背景的尺寸
    var goldBgSize= this.goldSpriteBg.getContentSize();

    //金币数
    this.labelCoin = cc.LabelAtlas.create("0", Common.getResourcePath("pic_jinbishu.png"), 13, 20, "0");
    this.labelCoin.setPosition(goldBgPos.x + goldBgSize.width / 2, goldBgPos.y - goldBgSize.height / 5);
    this.labelCoin.setAnchorPoint(cc.p(0.5,0.5));
    this.mPlayerSprite.addChild(this.labelCoin, 2);
}
//vip等级图
JinHuaTablePlayerEntity.prototype.createPlayerVipPic= function(){
    if(this.mPlayerSprite== null) return;

    //vip等级图
    var vipLevel = this.player.vipLevel;
    var vipBgTexture = VipElementsUtils.getVipBgFromVipLevel(parseInt(vipLevel));
    var self= this;
    if(vipBgTexture !=null){
        Common.addSpriteByNet(Common.getResourcePath(vipBgTexture), function(sprite){
            self.vipLevelPic= sprite;
            self.setVipInfo(vipLevel);
        });
    }else {
        vipLevelPic = cc.Sprite.create("#ic_vip_0.png");
        this.setVipInfo(vipLevel);
    }
}
JinHuaTablePlayerEntity.prototype.setVipInfo= function (vipLevel){
    var sizeBg = this.mPlayerSprite.getContentSize();

    if(vipLevel != null) {
        if (vipLevel > 0 && vipLevel < 10) {
            var AtlasLabel_vip_level = cc.LabelAtlas.create("0", Common.getResourcePath("ui_vip_lvshuzi_gaoji.png"), 14, 20, "0");
            AtlasLabel_vip_level.setString("." + vipLevel);
            AtlasLabel_vip_level.setAnchorPoint(cc.p(0.5, 0.5));
            AtlasLabel_vip_level.setPosition(this.vipLevelPic.getContentSize().width / 2, this.vipLevelPic.getContentSize().height / 2);
            this.vipLevelPic.addChild(AtlasLabel_vip_level);

            var Image_vip_lowsignbg = cc.Sprite.create("#ic_vip_jiaobiao_shuzichendi.png");
            Image_vip_lowsignbg.setAnchorPoint(cc.p(0.5, 0.5));
            Image_vip_lowsignbg.setPosition(this.vipLevelPic.getContentSize().width, this.vipLevelPic.getContentSize().height);
            this.vipLevelPic.addChild(Image_vip_lowsignbg);

            var AtlasLabel_lowsign = cc.LabelAtlas.create("0", Common.getResourcePath("ui_vip_jiaobiaoshuzi.png"), 12, 14, "0");
            AtlasLabel_lowsign.setString(vipLevel);
            AtlasLabel_lowsign.setAnchorPoint(cc.p(0.5, 0.5));
            AtlasLabel_lowsign.setPosition(this.vipLevelPic.getContentSize().width, this.vipLevelPic.getContentSize().height);
            this.vipLevelPic.addChild(AtlasLabel_lowsign);
        }else if (vipLevel >= 10) {
            var AtlasLabel_vip_level = cc.LabelAtlas.create("0", Common.getResourcePath("ui_vip_lvshuzi_gaoji.png"), 14, 20, "0");
            AtlasLabel_vip_level.setString("."+ vipLevel);
            AtlasLabel_vip_level.setAnchorPoint(cc.p(0.5, 0.5));
            AtlasLabel_vip_level.setPosition(this.vipLevelPic.getContentSize().width / 2, this.vipLevelPic.getContentSize().height / 2);
            this.vipLevelPic.addChild(AtlasLabel_vip_level);

            var highSignTexture = VipElementsUtils.getVipHighSignFromVipLevel(vipLevel);
            var Image_vip_highsign = null;
            if (highSignTexture != null) {
                Image_vip_highsign = cc.Sprite.create("#" + highSignTexture);
                Image_vip_highsign.setAnchorPoint(cc.p(0.5, 0.5));
                Image_vip_highsign.setPosition(this.vipLevelPic.getContentSize().width, this.vipLevelPic.getContentSize().height);
                this.vipLevelPic.addChild(Image_vip_highsign)
            }
        }
    }

    if(this.player.userId != profile_user.getSelfUserID()) {
        this.vipLevelPic.setScale(0.9)
    }
    this.vipLevelPic.setPosition(sizeBg.width * 5 / 6, this.goldSpriteBg.getPositionY() + this.goldSpriteBg.getContentSize().height / 4);
    this.mPlayerSprite.addChild(this.vipLevelPic, 2);
};
//创建禁比图标
JinHuaTablePlayerEntity.prototype.createJinbiSprite= function(){
    if(this.mPlayerSprite== null) return;

    this.jinbiSprite = cc.Sprite.create("#jinbi_icon.png");
    this.jinbiSprite.setAnchorPoint(cc.p(0.5,0));
    var jinbiSize = this.jinbiSprite.getContentSize();
    if(this.player.userId != profile_user.getSelfUserID()) {
        this.jinbiSprite.setPosition(Profile_JinHuaTableConfig.spritePlayers[this.player.SSID].cards[2].locX, Profile_JinHuaTableConfig.spritePlayers[this.player.SSID].cards[2].locY + 30)
    }else{
        this.jinbiSprite.setPosition(558 + 26 * 2, 130 + jinbiSize.height / 2);
    }
    this.jinbiSprite.setZOrder(12);
    this.jinbiSprite.setScale(0.5);
    this.dismissJinbiIcon();
    JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(this.jinbiSprite)
};
//隐藏禁比
JinHuaTablePlayerEntity.prototype.dismissJinbiIcon= function(){
    if(this.jinbiSprite.isVisible()){
        this.jinbiSprite.setVisible(false);
        this.jinbiSprite.setScale(0.5);
    }
};
//添加玩家实体元素到层
JinHuaTablePlayerEntity.prototype.addPlayerElementToLayer= function (layer){
    layer.addChild(this.mPlayerSprite);
    //添加已加注文本
    layer.addChild(this.betedCoinLabel);
    layer.addChild(this.readyIcon);
}
//移除玩家实体元素
JinHuaTablePlayerEntity.prototype.removePlayerElementFromLayer= function (layer){
    layer.removeChild(this.mPlayerSprite, true);
    layer.removeChild(this.betedCoinLabel, true);
    layer.removeChild(this.readyIcon, true);
    delete this.mPlayerSprite;
    delete this.betedCoinLabel;
    delete this.readyIcon;
}
//创建已压金币数label, 没有加到mPlayerSprite,直接加到了layer上面
JinHuaTablePlayerEntity.prototype.createBetedCoinLabel= function(){
    if(this.player.userId!= profile_user.getSelfUserID()){
        this.betedCoinLabel= new JinHuaBetedCoinLabel(Profile_JinHuaTableConfig.spritePlayers[this.player.SSID].betCoinX, Profile_JinHuaTableConfig.spritePlayers[this.player.SSID].betCoinY);
    }else{
        this.betedCoinLabel= new JinHuaBetedCoinLabel(392, 90);
    }
}
//创建准备图标k
JinHuaTablePlayerEntity.prototype.createReadyIcon= function(){
    this.readyIcon = cc.Sprite.create("#desk_icon_ready.png");
    this.readyIcon.setZOrder(12);
    var player= Profile_JinHuaTableConfig.spritePlayers[this.player.CSID];
    this.readyIcon.setPosition(player.pkX, player.pkY);
    this.readyIcon.setVisible(false);
}
//等级
JinHuaTablePlayerEntity.prototype.createPlayerluckyTips= function(){
    var Clover= this.player.Clover;
    if(Clover== null && Clover==  1){
        var sizeBg= this.mPlayerSprite.getContentSize();
        this.luckyTip= cc.Sprite.create("#dianjizhe.png");
        this.luckyTip.setPosition(sizeBg.width / 5 * 4,sizeBg.height / 5 * 4);
        this.mPlayerSprite.addChild(this.luckyTip);
    }
}
//自己拥有的幸运点label
JinHuaTablePlayerEntity.prototype.createPlayerLabelLucky= function(){
    this.luckyValue= Profile_JinHuaGameData.getGameData()["luckyPoint"];
    //比赛时，不显示幸运点
    var matchInstanceId= Profile_JinHuaGameData.getGameData()["matchInstanceId"];
    if(matchInstanceId!= null &&matchInstanceId!= null) return;

    if(this.player.userId== profile_user.getSelfUserID()&&this.luckyValue> 0){
        var sizeBg = this.mPlayerSprite.getContentSize();

        //金币条背景
        this.luckyBg = cc.Sprite.create("#ui_paizhuo_gerenxiazhudi.png");
        this.luckyBg.setPosition(sizeBg.width + 135,sizeBg.height/2);
        var coinBgSize = this.luckyBg.getContentSize();
        //金币图标
        this.LuckyIcon = cc.Sprite.create("#luckyicon.png");
        this.luckyBg.addChild(this.LuckyIcon);
        this.LuckyIcon.setPosition(coinBgSize.width / 10,coinBgSize.height / 2);
        //金币数

        this.luckyLable = cc.LabelTTF.create(this.luckyValue , "Arial", 24);
        this.luckyLable.setAnchorPoint(cc.p(0,0.5));
        this.luckyLable.setColor(cc.color(255, 255, 255));
        this.luckyLable.setPosition(coinBgSize.width / 10 + 15,coinBgSize.height / 2)
        this.luckyBg.addChild(this.luckyLable);

        this.mPlayerSprite.addChild(this.luckyBg);
    }
}
//设置已压金币数
JinHuaTablePlayerEntity.prototype.setBetCoin= function(){
    this.betedCoinLabel.setBetCoin(this.player.betCoins);
}
//显示准备Icon
JinHuaTablePlayerEntity.prototype.showReadyIcon= function(){
    this.readyIcon.setVisible(true);
}
JinHuaTablePlayerEntity.prototype.hideReadyIcon= function(){
    this.readyIcon.setVisible(false);
}
//遮盖头像
JinHuaTablePlayerEntity.prototype.setPlayerDarkCoverVisible= function(){
    this.playerDarkCover.setVisible(true);
}
//取消遮盖头像
JinHuaTablePlayerEntity.prototype.setPlayerDarkCoveredDone= function(){
    this.playerDarkCover.setVisible(false);
};
//生成三张牌并添加到层
JinHuaTablePlayerEntity.prototype.createCard= function(){
    if(this.player.status== STATUS_PLAYER_PLAYING){
        this.createNotBeLookedCard();
    }else if(this.player.status== STATUS_PLAYER_LOOKCARD) {;
        //Todo:看牌
        this.createNotBeLookedCard();
        //Todo:设置牌被看了
        this.setCardsLooked();
    }
};
//创建头像左上角的牌的类型提示
JinHuaTablePlayerEntity.prototype.createNotBeLookedCard= function(){
    //一定要有，不然会去直接操作元表， 修改的都是同一数据
    this.cardSprites = {};

    //发的牌 初始无论是谁，都放在屏幕中间位置
    for(var i= 0; i< 3; ++i){
        this.cardSprites[i]= CardSprite();
        this.cardSprites[i].setAnchorPoint(cc.p(0.5, 0));
        if(!this.isMe()){
            var player= Profile_JinHuaTableConfig.getSpritePlayers()[this.player.CSID];
            this.cardSprites[i].setPosition(player.cards[i].locX+ 15, player.cards[i].locY- 5);
        }else{
            this.cardSprites[i].setPosition(573 + 26 * i, 120);
        }
        this.cardSprites[i].setScale(Profile_JinHuaTableConfig.cardScale);
    }
    var cardTypePosX, cardTypePosY;
    if(this.isMe()){
        cardTypePosX = 740;
        cardTypePosY = 110;
        //自己de牌的话有角度和大小特殊显示
        JinHuaTableCard.setMyCardScaleAndRotation(this.cardSprites[0], this.cardSprites[1], this.cardSprites[2]);
    }else{
        var player= Profile_JinHuaTableConfig.getSpritePlayers()[this.player.CSID];
        if(player.CSID< 3){
            cardTypePosX = player.cards[2].locX+this.cardSprites[0].getContentSize().width/4;
        }else{
            cardTypePosX = player.cards[2].locX-this.cardSprites[0].getContentSize().width/4;
        }
        cardTypePosY = player.cards[2].locY- 10*Profile_JinHuaTableConfig.TableScaleY;
    }
    this.cardTypeSprite = cc.Sprite.create("#bg_desk_paixing.png");
    this.cardTypeSprite.setAnchorPoint(cc.p(0.5, 0.5));
    this.cardTypeSprite.setPosition(cardTypePosX, cardTypePosY);
    this.cardTypeSprite.setVisible(false);

    this.cardTypeLabel = cc.LabelTTF.create("散牌", "Arial", 24);
    this.cardTypeLabel.setColor(cc.color(255, 255, 255));
    this.cardTypeLabel.setAnchorPoint(cc.p(0.5, 0.5));
    this.cardTypeLabel.setPosition(this.cardTypeSprite.getContentSize().width/2, this.cardTypeSprite.getContentSize().height/2);
    this.cardTypeSprite.addChild(this.cardTypeLabel);

    for(var key in this.cardSprites){
        JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(this.cardSprites[key]);
    }

    this.cardTypeSprite.setZOrder(9);
    JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(this.cardTypeSprite);
};
//设置牌被看了
JinHuaTablePlayerEntity.prototype.setCardsLooked= function(){

};
//显示禁比动画
JinHuaTablePlayerEntity.prototype.showJinbiAnim= function(){
    if(!this.noPK) return;
    this.jinbiSprite.setVisible(true);
    this.jinbiSprite.runAction(cc.scaleTo(0.25, 0.5));
};
//金币变更 设置金币
JinHuaTablePlayerEntity.prototype.setCoin= function(){
    this.changeCoinNumOnView(this.player.remainCoins)
};