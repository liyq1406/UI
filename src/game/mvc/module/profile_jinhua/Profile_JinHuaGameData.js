/**
 * Created by Administrator on 2016/12/15.
 */
var Profile_JinHuaGameData= {
    MALE:1,//男
    FEMALE:2,//女
    backPackGoodsCountData:null,
    GameData:null,
    mySelf:null,
    isMatch:false,//是否在比赛
    betChipData:null,//加注
    readyData:null,
    chatMsg:null,//聊天
    standUpData:null,//站起
    sitDownData:null,//坐下
    initCardData:null,//发牌
    foldCardData:null,//弃牌
    gameResultData:null,//本局计算
    PKData:null,//PK数据
    checkCardData:null,//看牌
    showCardData:null,//展开牌
    changeTable:null,//换桌
    noPKData:null,//禁比
    clearData:function(){
        this.backPackGoodsCountData= {};
        this.GameData= {};
        this.mySelf= {};
        this.betChipData= {};
        this.readyData= {};
        this.chatMsg= {};
        this.standUpData= {};
        this.initCardData= {};
        this.foldCardData= {};
        this.gameResultData= {};
        this.PKData= {};
        this.checkCardData= {};
        this.changeTable= {};
        this.noPKData= {};
    },
    getBackPackGoodsCountData:function(){
        return this.backPackGoodsCountData;
    },
    getGameData:function(){
        return this.GameData;
    },
    //获取是否是在比赛中
    getIsMatch:function(){
        return this.isMatch;
    },
    //设置牌桌是否是在比赛
    setIsMatch:function(){
        if(this.GameData["matchInstanceId"]!= null &&this.GameData["matchInstanceId"]!= ""){
            this.isMatch= true;
        }
    },
    //获取桌面上的玩家
    getPlayers:function(){
        return this.GameData["players"];
    },
    //获取禁比数据
    getNoPKData:function(){
        return this.noPKData;
    },
    removePlayerFromGameData:function(userID){
        var players= this.GameData["players"];
        for(var key in players){
            var player= players[key];
            if(player.userId== userID){
                delete  this.GameData["players"][key];
            }
        }
    },
    //本局我是否在打牌中
    isMePlayingThisRound:function(){
        var players= this.GameData["players"];
        if((this.GameData.mySSID!= null||this.GameData.mySSID!= undefined)
            &&players[0]
            &&(players[0].status == STATUS_PLAYER_LOOKCARD || players[0].status == STATUS_PLAYER_PLAYING)){
            return true;
        }else{
            return false;
        }
    },
    //获取用户客户端座位号（服务端座位号）
    getUserCSID:function(ssid){
        if(ssid== undefined) return;
        if(this.GameData.mySSID){//别人站起&&庄家 顺移下一位
            return (ssid - this.GameData.mySSID + Profile_JinHuaTableConfig.playerCnt)%Profile_JinHuaTableConfig.playerCnt;
        }else{
            return ssid;//自己站起&&庄家 也是下一位
        }
    },
    //设置当前庄家客户端座位号
    setDealerCSID:function(){
        this.GameData.dealerCSID = this.getUserCSID(this.GameData.dealerSSID);
    },
    getChatMsg:function(){
        return this.chatMsg;
    },
    //准备
    getReadyData:function(){
        return this.readyData;
    },
    //站起
    getStandUpData:function(){
        return this.standUpData;
    },
    //看牌
    getCheckCardData:function(){
        return this.checkCardData;
    },
    //展示牌
    getShowCardData:function(){
        return this.showCardData;
    },
    //获取玩家数据
    getMySelf:function(){
        return this.mySelf;
    },
    //判断某个座位上是否有人
    hasPlayer:function(CSID){
        var bHas= false;
        var players= this.GameData["players"];
        for(var key in players){
            var player= players[key];
            if(!Common.judgeValueIsEffect(player)) continue;
            if(player.CSID== CSID){
                bHas= true;
            }
        }
        return bHas;
    },
    //判断某个玩家是否在牌桌上
    isSitDown:function(userID){
        if(!Common.judgeValueIsEffect(this.GameData)) return false;
        var players= this.getPlayers();
        if(!Common.judgeValueIsEffect(players)) return false;
        for(var key in players){
            var player= players[key];
            if(!Common.judgeValueIsEffect(player)) continue;
            if(player.userId== userID) return true;
        }
        return false;
    },
    //判断作为上是否有其他玩家(排除玩家本身)
    hasOtherPlayer:function(){
        if(!Common.judgeValueIsEffect(this.GameData)) return false;
        var players= this.getPlayers();
        if(!Common.judgeValueIsEffect(players)) return false;

        for(var key in players){
            var player= players[key];
            if(!Common.judgeValueIsEffect(player)) continue;
            if(player.userId!= profile_user.getSelfUserID()) return true;
        }
        return false;
    },
    //自己站起更新
    updatePlayerInfo_SelfStand:function(){
        if((this.GameData&&
            this.GameData["players"]&&
            this.GameData["players"][0]&&
            this.GameData["players"][0].userId== profile_user.getSelfUserID())){
            //清空自己的元素
            this.GameData["players"][0]= null;
        }
        //服务器座位号 置空
        this.GameData.mySSID= null;
        //旁观者模式
        this.mySelf.status= STATUS_PLAYER_WATCH;
        //下注金额置空
        this.mySelf.betCoins= 0;
        //更新当前庄家座位号
        this.setDealerCSID();
        //设置所有用户客户端座位号
        this.setAllUserCSID();
        //按照客户端顺序设置玩家数组
        this.setUserArrayOrder();
    },
    //设置所有用户客户端座位号
    setAllUserCSID:function(){
        if(this.GameData== null||this.GameData== undefined)  return;

        for(var key in this.GameData["players"]){
            var user= this.GameData["players"][key];
            if(user!= null&&user.SSID!= null){
                user.CSID= this.getUserCSID(user.SSID);
            }
        }
    },
    //按照客户端顺序设置玩家数组
    setUserArrayOrder:function(){
        if(this.GameData== null||this.GameData== undefined)  return;

        var users = {};
        for(var key in this.GameData["players"]){
            var user= this.GameData["players"][key];
            if(user!= null){
                users[this.GameData["players"][key].CSID] = this.GameData["players"][key];
            }
        }
        this.GameData["players"] = users;
    },
    //得到我的服务器座位号
    setMySSID:function(){
        if(this.GameData== null||this.GameData== undefined)  return;

        var myUserId= profile_user.getSelfUserID();
        for(var key in this.GameData["players"]){
            if(this.GameData["players"]&&
                this.GameData["players"][key]&&
                this.GameData["players"][key].userId== myUserId){
                this.mySelf= this.GameData["players"][key];
                this.GameData.mySSID= this.GameData["players"][key].SSID;
                break;
            }
        }
    },
    //获取押注信息
    getBetChipData:function(){
        return this.betChipData;
    },
    //获取坐下消息
    getSitDownData:function(){
        return this.sitDownData;
    },
    //获取发牌数据
    getInitCardData:function(){
        return this.initCardData;
    },
    //获取弃牌数据
    getFoldCardData:function(){
        return this.foldCardData;
    },
    //获取本局结算数据
    getGameResultData:function(){
        return this.gameResultData;
    },
    //换桌数据
    getChangeTable:function(){
        return this.changeTable;
    },
    //PK数据
    getPKData:function(){
        return this.PKData;
    },
    //获取我本局获得的经验提示
    getMyExpText:function(){
        var expText = null;
        if(!Common.judgeValueIsEffect(this.GameData)) return;
        if(!Common.judgeValueIsEffect(this.GameData["players"])) return;
        var players= this.GameData["players"];
        for(var key in players){
            var player= players[key];
            if(Common.judgeValueIsEffect(player)&&Common.judgeValueIsEffect(player.userId)&&(player.userId== profile_user.getSelfUserID())){
                expText= player.expText;
            }
        }
        return expText;
    },
    saveMyData:function(){
        for(var key in this.GameData["players"]){
            var player= this.GameData["players"][key];
            if(!Common.judgeValueIsEffect(player)) continue;
            if(profile_user.getSelfUserID()!= player.userId) continue;
            profile_user.setSelfUserID(player.userId);
            profile_user.setSelfNickName(player.nickName);
            profile_user.setSelfPhotoUrl(player.photoUrl);
            profile_user.setSelfCoin(player.remainCoins);
            profile_user.setSelfVipLevel(player.vipLevel);
            profile_user.setSelfSex(player.sex);
            profile_user.setSelfLevel(player.level);
        }
    },
    //牌桌同步
    readJHID_TABLE_SYNC:function(dataTable){
        this.clearData();
        this.GameData= dataTable;
        this.saveMyData();//存储我的数据
        this.setMySSID();//设置我的座位号
        this.setDealerCSID();//设置庄家
        this.setAllUserCSID();//更新所有的玩家
        this.setUserArrayOrder();//设置牌桌上玩家的位置
        this.setIsMatch();//设置是否为比赛
    },
    //背包数量
    readDBID_BACKPACK_GOODS_COUNT:function(dataTable){
        this.backPackGoodsCountData= dataTable;
        if(dataTable.ItemID== GameConfig.GOODS_ID_SUPERIORFACE){//高级表情
            GameConfig.remainSuperiorFaceTime= parseInt(dataTable.Num);
        }else if(dataTable.ItemID== GameConfig.GOODS_ID_CHANGECARD){//换牌道具
            Profile_JinHuaTableConfig.setRemainChangeCardCnt(dataTable.Num);
        }else if(dataTable.ItemID== GameConfig.GOODS_ID_NO_PK){//禁比道具
            Profile_JinHuaTableConfig.setRemainNoPKCnt(dataTable.Num);
        }
    },
    //退出房间
    readJHID_QUIT_TABLE:function(dataTable){
        console.log("退出房间");
    },
    //准备
    readJHID_READY:function(dataTable){
        this.readyData= dataTable;
        this.readyData.CSID = this.getUserCSID(this.readyData.SSID);
        if(this.GameData["players"]&&this.GameData["players"][this.readyData.CSID]&&this.readyData.result == 1){
            this.GameData["players"][this.readyData.CSID].status= STATUS_PLAYER_READY;
        }
    },
    //准备
    readJHID_CHAT:function(dataTable){
        this.chatMsg= dataTable;
        this.chatMsg.CSID = this.getUserCSID(this.chatMsg.SSID);
    },
    //加注(JHID_BET)
    readJHID_BET:function(dataTable){
        this.betChipData= dataTable;

        var CSID= this.getUserCSID(this.betChipData.SSID);
        this.betChipData.CSID = CSID;
        if(this.GameData["players"]&&this.GameData["players"][CSID]){
            this.GameData["players"][CSID].betCoins = dataTable["betCoins"];
            this.GameData["players"][CSID].remainCoins = dataTable["remainCoins"];
            this.GameData["round"] = dataTable["round"];
            this.GameData["totalPoolCoin"] = dataTable["totalPoolCoin"];
            this.GameData["singleCoin"] = dataTable["singleCoin"];

            if(this.betChipData["currentPlayer"]){
                this.betChipData["currentPlayer"].CSID = this.getUserCSID(this.betChipData["currentPlayer"].SSID);
            }
            if(this.betChipData.type == TYPE_BET_ANTE&& this.betChipData.dealerSSID){
                this.GameData.dealerSSID = this.betChipData.dealerSSID;
                //设置创建ID
                this.setDealerCSID();
            }
        }
    },
    //站起
    readJHID_STAND_UP:function(dataTable){
        this.standUpData= dataTable;
        this.standUpData.CSID = this.getUserCSID(this.standUpData.SSID);
        //如果是我 并且我主动要求站起（不考虑站起失败）
        if(this.mySelf.SSID&& this.mySelf.SSID == this.standUpData.SSID&& this.mySelf.status == STATUS_PLAYER_WATCH){
            this.mySelf.SSID= null;
        }
    },
    //坐下应答
    readJHID_SIT_DOWN:function(dataTable){
        if(!this.GameData["players"]) return;

        this.sitDownData= dataTable;
        //坐下失败
        if(this.sitDownData["result"]==0){
            return;
        }
        if(this.sitDownData.playerInfo&&this.sitDownData.playerInfo.userId){
            this.sitDownData.playerInfo.CSID = this.getUserCSID(this.sitDownData.playerInfo.SSID);

            //是否为玩家本身
            if(this.sitDownData.playerInfo.userId== profile_user.getSelfUserID()){
                this.mySelf.remainCoins = this.sitDownData.playerInfo.remainCoins;
                this.mySelf.status = this.sitDownData.playerInfo.status;
            }else{
                this.GameData["players"][this.sitDownData.playerInfo.CSID] = this.sitDownData.playerInfo;
            }
        }
    },
    //金花发牌
    readJHID_INIT_CARDS:function(dataTable){
        this.initCardData= dataTable;
        this.GameData.dealerSSID = this.initCardData.dealerSeatID;
        this.GameData.round = this.initCardData.round;
        this.GameData.currentLockCoin = this.initCardData.currentLockCoin;
        this.setDealerCSID();

        if(this.initCardData["currentPlayer"]){
            this.initCardData["currentPlayer"].CSID = this.getUserCSID(this.initCardData["currentPlayer"].SSID);
        }
    },
    //弃牌
    readJHID_DISCARD:function(dataTable){
        this.foldCardData= dataTable;
        this.foldCardData.CSID= this.getUserCSID(this.foldCardData["seatID"]);
        this.GameData.round = this.foldCardData.round;
        if(this.foldCardData.nextPlayer){
            this.foldCardData.nextPlayer.CSID = this.getUserCSID(this.foldCardData.nextPlayer.SSID);
        }
    },
    //本局结算
    readJHID_GAME_RESULT:function(dataTable){
        if(!this.GameData["players"]) return;
        this.gameResultData= dataTable;
        this.GameData["Exp"] = this.gameResultData["Exp"];
        this.GameData["levelUpExp"] = this.gameResultData["levelUpExp"];
        this.GameData["level"] = this.gameResultData["level"];
        this.gameResultData.CSID = this.getUserCSID(this.gameResultData.winnerSeat);
        for(var key in this.gameResultData.users){
            var user= this.gameResultData.users[key];
            if(!Common.judgeValueIsEffect(user)) continue;
            for(var i in this.GameData["players"]){
                var player= this.GameData["players"][i];
                if(!Common.judgeValueIsEffect(player)) continue;
                if(player.userId!= user.userID) continue;
                player.betCoins = user.betCoins;
                player.remainCoins = user.remainCoins;
                player.shtatus = user.status;
                player.cardValues = user.cardValues;
                player.cardType = user.cardType;
                player.exp = user.exp;
                player.level = user.level;
                player.expText = user.expText;
                player.isCert = user.isCert;
                JinHuaTablePlayer.setPlayerInfoByUserID(user, player.userId);
            }
        }

        //本局结束后，禁比失效
        this.mySelf.noPK= false;
    },
    //比牌
    readJHID_PK:function(dataTable){
        this.PKData= dataTable;
        if(this.GameData["players"]&&this.PKData["result"] == 1){
            var csid = this.getUserCSID(this.PKData.launchSeatID);
            //要求比牌的人
            this.PKData.launchCSID = csid;
            if(!this.GameData["players"][csid]) return;

            //要求比牌玩家下注的总金额
            this.GameData["players"][csid].betCoins = this.PKData["betCoins"];
            //要求比牌玩家剩余的金币
            this.GameData["players"][csid].remainCoins = this.PKData["remainCoins"];
            this.GameData.round = this.PKData.round;
            this.GameData.totalPoolCoin = this.PKData.totalPoolCoin;
            //要求比牌的人
            this.PKData.winCSID = this.getUserCSID(this.PKData.winnerSeatID);
            //被比牌的人客户端座位号
            this.PKData.aimCSID = this.getUserCSID(this.PKData.aimSeatID);

            if(this.PKData.winnerSeatID== this.PKData.launchSeatID){
                //如果赢的人是要求比牌的人，输的座位号为被比牌的人座位号
                this.PKData.lossCSID = this.PKData.aimCSID;
            }else{
                //如果赢的人是被比牌的人，输的座位号为要求比牌的人座位号
                this.PKData.lossCSID = this.PKData.launchCSID;
            }

            if(this.PKData.nextPlayer){
                this.PKData.nextPlayer.CSID = this.getUserCSID(this.PKData.nextPlayer.SSID);
            }
        }
    },
    //看牌
    readJHID_LOOK_CARDS:function(dataTable){
        this.checkCardData= dataTable;
        this.checkCardData.CSID= this.getUserCSID(this.checkCardData["seatID"]);
    },
    //展示牌
    readJHID_SHOW_CARDS:function(dataTable){
        this.showCardData= dataTable;
        if(this.showCardData.result== 1){
            this.GameData.totalPoolCoin = this.showCardData.totalPotCoin;
            this.showCardData.CSID = this.getUserCSID(this.showCardData.seatID);

            if(this.showCardData.nextPlayer){
                this.showCardData.nextPlayer.CSID = this.getUserCSID(this.showCardData.nextPlayer.SSID);
            }

            if(this.GameData["players"][this.showCardData.CSID]){
                this.GameData["players"][this.showCardData.CSID].betCoins = this.showCardData.betCoins;
                this.GameData["players"][this.showCardData.CSID].remainCoins = this.showCardData.remainCoins;
            }
        }
    },
    //换桌
    readJHID_CHANGE_TABLE:function(dataTable){
        this.changeTable= dataTable;
    },
    //读取禁比数据
    readJHID_NO_COMPARE:function(dataTable){
        this.noPKData= dataTable;
        this.noPKData.CSID= this.getUserCSID(this.noPKData["SSID"]);
        if(this.GameData["players"]&&this.GameData["players"][this.noPKData.CSID]){
            this.GameData["players"][this.noPKData.CSID].noPK = true;
        }
    }
};