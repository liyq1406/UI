var JinHuaTableLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_94:null,
	Panel_20:null,
	Panel_PrivateRoom:null,
	Label_CountDownTime:null,
	Panel_roominfo:null,
	Label_RoomNumber:null,
	Label_RoomRule:null,
	Label_MinCoinTxt:null,
	Label_MinCoin:null,
	Label_Holder:null,
	Label_HolderName:null,
	Panel_bg:null,
	Image_bg_left:null,
	Image_bg_right:null,
	Image_title_left:null,
	Image_title_right:null,
	Label_time:null,
	Image_dianchi:null,
	ProgressBar_battery:null,
	Panel_zongxiazhu:null,
	Panel_lunshu:null,
	Label_round:null,
	Label_allRound:null,
	Image_lunshu:null,
	Panel_danzhu:null,
	Label_baseCoin:null,
	Image_danzhu:null,
	Panel_zongxiazhu:null,
	Image_heidi:null,
	Label_sumCoin:null,
	Panel_quickchat:null,
	Image_dibutiao:null,
	Panel_waiting:null,
	Button_geweihao:null,
	Label_geweihao:null,
	Button_wolaishouqian:null,
	Label_wolaishouqian:null,
	Button_guarenlaile:null,
	Label_guarenlaile:null,
	Button_waiting_emo1:null,
	Button_waiting_emo2:null,
	Panel_afterfold:null,
	Button_ptcl:null,
	Label_ptcl:null,
	Button_snh:null,
	Label_snh:null,
	Button_xfnym:null,
	Label_xfnym:null,
	Button_afterfold_emo1:null,
	Button_afterfold_emo2:null,
	Panel_win:null,
	Button_xiexie:null,
	Label_xiexie:null,
	Button_zhunixiaju:null,
	Label_zhunixiaju:null,
	Button_laozi:null,
	Label_laozi:null,
	Button_win_emo1:null,
	Button_win_emo2:null,
	Panel_lose:null,
	Button_yunqicha:null,
	Label_yunqicha:null,
	Button_dadebucuo:null,
	Label_dadebucuo:null,
	Button_nizabushangtian:null,
	Label_nizabushangtian:null,
	Button_lose_emo1:null,
	Button_lose_emo2:null,
	Panel_EXP:null,
	Label_level:null,
	Label_exp:null,
	Image_exp_bg:null,
	ProgressBar_exp:null,
	Image_exp_bar1:null,
	Image_exp_bar2:null,
	Image_exp_bar3:null,
	Panel_dibu:null,
	Image_dibutiao:null,
	Button_tableChat:null,
	Panel_wait:null,
	Button_wait_fold:null,
	Image_qipaizi:null,
	Button_wait_pk:null,
	Image_bipaizi:null,
	Button_wait_raise:null,
	Image_jiazhuzi:null,
	Button_wait_alwaysbet:null,
	Image_genzhuzi:null,
	Panel_otherturn:null,
	Button_otherturn_fold:null,
	Image_qipaizi:null,
	Button_otherturn_pk:null,
	Image_bipaizi:null,
	Button_otherturn_raise:null,
	Image_jiazhuzi:null,
	Button_otherturn_alwaysbet:null,
	Image_genzhuzi:null,
	Image_xia1:null,
	Image_alwaysbet:null,
	Panel_myturn:null,
	Button_mine_fold:null,
	Image_qipaizi:null,
	Button_mine_pk:null,
	Image_bipaizi:null,
	Button_mine_raise:null,
	Image_mine_raise:null,
	Button_mine_call:null,
	Image_genzhuzi:null,
	Panel_canpk:null,
	Button_canpk_fold:null,
	Image_qipaizi:null,
	Button_canpk_pk:null,
	Image_bipaizi:null,
	Button_canpk_raise:null,
	Image_canpk_raise:null,
	Button_canpk_call:null,
	Image_genzhuzi:null,
	Panel_raise:null,
	Button_raise_one:null,
	AtlasLabel_jiner1:null,
	Button_raise_two:null,
	AtlasLabel_jiner2:null,
	Button_raise_three:null,
	AtlasLabel_jiner3:null,
	Button_raise_cancel:null,
	Image_qipaizi:null,
	Panel_allin:null,
	Button_allin_fold:null,
	Image_qipaizi:null,
	Button_allin_pk:null,
	Image_bipaizi:null,
	Button_allin_allin:null,
	Image_jiazhuzi:null,
	Button_allin_call:null,
	Image_genzhuzi:null,
	Panel_onlyraise:null,
	Button_onlyraise_fold:null,
	Image_qipaizi:null,
	Button_onlyraise_pk:null,
	Image_bipaizi:null,
	Button_onlyraise_raise:null,
	Image_jiazhuzi:null,
	Button_onlyraise_call:null,
	Image_genzhuzi:null,
	Panel_onlycall:null,
	Button_onlycall_fold:null,
	Image_qipaizi:null,
	Button_onlycall_pk:null,
	Image_bipaizi:null,
	Button_onlycall_raise:null,
	Image_jiazhuzi:null,
	Button_onlycall_call:null,
	Image_genzhuzi:null,
	Panel_onlypk:null,
	Button_onlypk_fold:null,
	Image_qipaizi:null,
	Button_onlypk_pk:null,
	Image_bipaizi:null,
	Button_onlypk_raise:null,
	Image_jiazhuzi:null,
	Button_onlypk_call:null,
	Image_genzhuzi:null,
	Panel_buttonGroup_right:null,
	Button_tequan:null,
	Image_tequan:null,
	Button_gift:null,
	Image_libaotu:null,
	Button_changeCard:null,
	Image_huanpai:null,
	Image_huanpaikahongdian:null,
	Label_changeCardNum:null,
	Button_noCompare:null,
	Image_jinbitu:null,
	Image_huanpaikahongdian:null,
	Label_noCompareNum:null,
	btn_libao:null,
	btn_renwu:null,
	btn_onlinebonus:null,
	Image_onlinebonus:null,
	Image_daojishi_bg:null,
	Image_onlinebonus_lingqu:null,
	Label_onlinebonus_daojishi:null,
	Image_onlinebonus_shine:null,
	Panel_buttonGroup_left:null,
	Panel_btnList_Left:null,
	Button_more:null,
	ImageView_Notice:null,
	panel_chat:null,
	Panel_matchBegin:null,
	Label_matchBeginTitle:null,
	Button_goMatch:null,
	AtlasLabel_matchTimer:null,
	Button_stayTable:null,
	Image_matchBegin:null,
	Panel_match:null,
	Button_barrage:null,
	Image_barragelock:null,
	Panel_AwardBar:null,
	Label_FirstAward:null,
	Label_FirstAwardNum:null,
	Label_AllAward:null,
	Label_AllAwardNum:null,
	Label_SecondAward:null,
	Label_SecondAwardNum:null,
	Panel_233:null,
	Label_matchBaseCoin:null,
	Label_matchBaseNum:null,
	Label_matchRound:null,
	Label_matchPkRound:null,
	Label_waiting:null,
	Label_match_name:null,
	Panel_234:null,
	Button_quickMatch:null,
	Button_matchRank:null,
	AtlasLabel_myMatchRank:null,

    /********自定义**********/
    labelNotice:null,//公告
    updateTimer:null,//更新系统时间-定时器
    sitButtonGroup:{},//坐下按钮table
    pkButtonGroup:{},//pk按钮table
    remainingTime:0,//房间剩余时间
    onlineRewardTime:0,//在线奖励
    buttonCheckIsShow:false,
    lastStatus:null,//最新状态
    CanRaise:true,
    canGetOnlinebonus:null,
    IncrBaoheRound:null,//宝盒奖励,几轮以后算一局
    changeCardRemainTime:0,
    showCard:false,
    isAlwaysBetCoin:false,//跟到底
    betData:null,//我的下注数据
    vibrateId:null,//震动定时ID(最后几秒)

    createView:function(){
        cc.spriteFrameCache.addSpriteFrames(Common.getResourcePath("chat_popup.plist"),Common.getResourcePath("chat_popup.png"));
        cc.spriteFrameCache.addSpriteFrames(Common.getResourcePath("desk.plist"),Common.getResourcePath("desk.png"));
        cc.spriteFrameCache.addSpriteFrames(Common.getResourcePath("table_elements.plist"),Common.getResourcePath("table_elements.png"));
        cc.spriteFrameCache.addSpriteFrames(Common.getResourcePath("poker_cards.plist"), Common.getResourcePath("poker_cards.png"));
    	this.initLayer();
        
        this.view.setTag(ModuleTable["JinHuaTable"]["Layer"]);
        
        this.initView();
        
        this.initData();

        //设置基层
        GameConfig.setCurBaseLayer(GUI_JINHUATABLE);
    },
    
	initView:function(){
		this.Panel_94 = CocoStudio.getComponent(this.view, "Panel_94");//Panel
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.Panel_PrivateRoom = CocoStudio.getComponent(this.view, "Panel_PrivateRoom");//Panel
		this.Label_CountDownTime = CocoStudio.getComponent(this.view, "Label_CountDownTime");//Label
		this.Panel_roominfo = CocoStudio.getComponent(this.view, "Panel_roominfo");//Panel
		this.Label_RoomNumber = CocoStudio.getComponent(this.view, "Label_RoomNumber");//Label
		this.Label_RoomRule = CocoStudio.getComponent(this.view, "Label_RoomRule");//Label
		this.Label_MinCoinTxt = CocoStudio.getComponent(this.view, "Label_MinCoinTxt");//Label
		this.Label_MinCoin = CocoStudio.getComponent(this.view, "Label_MinCoin");//Label
		this.Label_Holder = CocoStudio.getComponent(this.view, "Label_Holder");//Label
		this.Label_HolderName = CocoStudio.getComponent(this.view, "Label_HolderName");//Label
		this.Panel_bg = CocoStudio.getComponent(this.view, "Panel_bg");//Panel
		this.Image_bg_left = CocoStudio.getComponent(this.view, "Image_bg_left");//ImageView
		this.Image_bg_right = CocoStudio.getComponent(this.view, "Image_bg_right");//ImageView
		this.Image_title_left = CocoStudio.getComponent(this.view, "Image_title_left");//ImageView
		this.Image_title_right = CocoStudio.getComponent(this.view, "Image_title_right");//ImageView
		this.Label_time = CocoStudio.getComponent(this.view, "Label_time");//Label
		this.Image_dianchi = CocoStudio.getComponent(this.view, "Image_dianchi");//ImageView
		this.ProgressBar_battery = CocoStudio.getComponent(this.view, "ProgressBar_battery");//LoadingBar
		this.Panel_zongxiazhu = CocoStudio.getComponent(this.view, "Panel_zongxiazhu");//Panel
		this.Panel_lunshu = CocoStudio.getComponent(this.view, "Panel_lunshu");//Panel
		this.Label_round = CocoStudio.getComponent(this.view, "Label_round");//Label
		this.Label_allRound = CocoStudio.getComponent(this.view, "Label_allRound");//Label
		this.Image_lunshu = CocoStudio.getComponent(this.view, "Image_lunshu");//ImageView
		this.Panel_danzhu = CocoStudio.getComponent(this.view, "Panel_danzhu");//Panel
		this.Label_baseCoin = CocoStudio.getComponent(this.view, "Label_baseCoin");//Label
		this.Image_danzhu = CocoStudio.getComponent(this.view, "Image_danzhu");//ImageView
		this.Panel_zongxiazhu = CocoStudio.getComponent(this.view, "Panel_zongxiazhu");//Panel
		this.Image_heidi = CocoStudio.getComponent(this.view, "Image_heidi");//ImageView
		this.Label_sumCoin = CocoStudio.getComponent(this.view, "Label_sumCoin");//Label
		this.Panel_quickchat = CocoStudio.getComponent(this.view, "Panel_quickchat");//Panel
		this.Image_dibutiao = CocoStudio.getComponent(this.view, "Image_dibutiao");//ImageView
		this.Panel_waiting = CocoStudio.getComponent(this.view, "Panel_waiting");//Panel
		this.Button_geweihao = CocoStudio.getComponent(this.view, "Button_geweihao");//Button
		this.Label_geweihao = CocoStudio.getComponent(this.view, "Label_geweihao");//Label
		this.Button_wolaishouqian = CocoStudio.getComponent(this.view, "Button_wolaishouqian");//Button
		this.Label_wolaishouqian = CocoStudio.getComponent(this.view, "Label_wolaishouqian");//Label
		this.Button_guarenlaile = CocoStudio.getComponent(this.view, "Button_guarenlaile");//Button
		this.Label_guarenlaile = CocoStudio.getComponent(this.view, "Label_guarenlaile");//Label
		this.Button_waiting_emo1 = CocoStudio.getComponent(this.view, "Button_waiting_emo1");//Button
		this.Button_waiting_emo2 = CocoStudio.getComponent(this.view, "Button_waiting_emo2");//Button
		this.Panel_afterfold = CocoStudio.getComponent(this.view, "Panel_afterfold");//Panel
		this.Button_ptcl = CocoStudio.getComponent(this.view, "Button_ptcl");//Button
		this.Label_ptcl = CocoStudio.getComponent(this.view, "Label_ptcl");//Label
		this.Button_snh = CocoStudio.getComponent(this.view, "Button_snh");//Button
		this.Label_snh = CocoStudio.getComponent(this.view, "Label_snh");//Label
		this.Button_xfnym = CocoStudio.getComponent(this.view, "Button_xfnym");//Button
		this.Label_xfnym = CocoStudio.getComponent(this.view, "Label_xfnym");//Label
		this.Button_afterfold_emo1 = CocoStudio.getComponent(this.view, "Button_afterfold_emo1");//Button
		this.Button_afterfold_emo2 = CocoStudio.getComponent(this.view, "Button_afterfold_emo2");//Button
		this.Panel_win = CocoStudio.getComponent(this.view, "Panel_win");//Panel
		this.Button_xiexie = CocoStudio.getComponent(this.view, "Button_xiexie");//Button
		this.Label_xiexie = CocoStudio.getComponent(this.view, "Label_xiexie");//Label
		this.Button_zhunixiaju = CocoStudio.getComponent(this.view, "Button_zhunixiaju");//Button
		this.Label_zhunixiaju = CocoStudio.getComponent(this.view, "Label_zhunixiaju");//Label
		this.Button_laozi = CocoStudio.getComponent(this.view, "Button_laozi");//Button
		this.Label_laozi = CocoStudio.getComponent(this.view, "Label_laozi");//Label
		this.Button_win_emo1 = CocoStudio.getComponent(this.view, "Button_win_emo1");//Button
		this.Button_win_emo2 = CocoStudio.getComponent(this.view, "Button_win_emo2");//Button
		this.Panel_lose = CocoStudio.getComponent(this.view, "Panel_lose");//Panel
		this.Button_yunqicha = CocoStudio.getComponent(this.view, "Button_yunqicha");//Button
		this.Label_yunqicha = CocoStudio.getComponent(this.view, "Label_yunqicha");//Label
		this.Button_dadebucuo = CocoStudio.getComponent(this.view, "Button_dadebucuo");//Button
		this.Label_dadebucuo = CocoStudio.getComponent(this.view, "Label_dadebucuo");//Label
		this.Button_nizabushangtian = CocoStudio.getComponent(this.view, "Button_nizabushangtian");//Button
		this.Label_nizabushangtian = CocoStudio.getComponent(this.view, "Label_nizabushangtian");//Label
		this.Button_lose_emo1 = CocoStudio.getComponent(this.view, "Button_lose_emo1");//Button
		this.Button_lose_emo2 = CocoStudio.getComponent(this.view, "Button_lose_emo2");//Button
		this.Panel_EXP = CocoStudio.getComponent(this.view, "Panel_EXP");//Panel
		this.Label_level = CocoStudio.getComponent(this.view, "Label_level");//Label
		this.Label_exp = CocoStudio.getComponent(this.view, "Label_exp");//Label
		this.Image_exp_bg = CocoStudio.getComponent(this.view, "Image_exp_bg");//ImageView
		this.ProgressBar_exp = CocoStudio.getComponent(this.view, "ProgressBar_exp");//LoadingBar
		this.Image_exp_bar1 = CocoStudio.getComponent(this.view, "Image_exp_bar1");//ImageView
		this.Image_exp_bar2 = CocoStudio.getComponent(this.view, "Image_exp_bar2");//ImageView
		this.Image_exp_bar3 = CocoStudio.getComponent(this.view, "Image_exp_bar3");//ImageView
		this.Panel_dibu = CocoStudio.getComponent(this.view, "Panel_dibu");//Panel
		this.Image_dibutiao = CocoStudio.getComponent(this.view, "Image_dibutiao");//ImageView
		this.Button_tableChat = CocoStudio.getComponent(this.view, "Button_tableChat");//Button
		this.Panel_wait = CocoStudio.getComponent(this.view, "Panel_wait");//Panel
		this.Button_wait_fold = CocoStudio.getComponent(this.view, "Button_wait_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_wait_pk = CocoStudio.getComponent(this.view, "Button_wait_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_wait_raise = CocoStudio.getComponent(this.view, "Button_wait_raise");//Button
		this.Image_jiazhuzi = CocoStudio.getComponent(this.view, "Image_jiazhuzi");//ImageView
		this.Button_wait_alwaysbet = CocoStudio.getComponent(this.view, "Button_wait_alwaysbet");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_otherturn = CocoStudio.getComponent(this.view, "Panel_otherturn");//Panel
		this.Button_otherturn_fold = CocoStudio.getComponent(this.view, "Button_otherturn_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_otherturn_pk = CocoStudio.getComponent(this.view, "Button_otherturn_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_otherturn_raise = CocoStudio.getComponent(this.view, "Button_otherturn_raise");//Button
		this.Image_jiazhuzi = CocoStudio.getComponent(this.view, "Image_jiazhuzi");//ImageView
		this.Button_otherturn_alwaysbet = CocoStudio.getComponent(this.view, "Button_otherturn_alwaysbet");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Image_xia1 = CocoStudio.getComponent(this.view, "Image_xia1");//ImageView
		this.Image_alwaysbet = CocoStudio.getComponent(this.view, "Image_alwaysbet");//ImageView
		this.Panel_myturn = CocoStudio.getComponent(this.view, "Panel_myturn");//Panel
		this.Button_mine_fold = CocoStudio.getComponent(this.view, "Button_mine_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_mine_pk = CocoStudio.getComponent(this.view, "Button_mine_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_mine_raise = CocoStudio.getComponent(this.view, "Button_mine_raise");//Button
		this.Image_mine_raise = CocoStudio.getComponent(this.view, "Image_mine_raise");//ImageView
		this.Button_mine_call = CocoStudio.getComponent(this.view, "Button_mine_call");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_canpk = CocoStudio.getComponent(this.view, "Panel_canpk");//Panel
		this.Button_canpk_fold = CocoStudio.getComponent(this.view, "Button_canpk_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_canpk_pk = CocoStudio.getComponent(this.view, "Button_canpk_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_canpk_raise = CocoStudio.getComponent(this.view, "Button_canpk_raise");//Button
		this.Image_canpk_raise = CocoStudio.getComponent(this.view, "Image_canpk_raise");//ImageView
		this.Button_canpk_call = CocoStudio.getComponent(this.view, "Button_canpk_call");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_raise = CocoStudio.getComponent(this.view, "Panel_raise");//Panel
		this.Button_raise_one = CocoStudio.getComponent(this.view, "Button_raise_one");//Button
		this.AtlasLabel_jiner1 = CocoStudio.getComponent(this.view, "AtlasLabel_jiner1");//LabelAtlas
		this.Button_raise_two = CocoStudio.getComponent(this.view, "Button_raise_two");//Button
		this.AtlasLabel_jiner2 = CocoStudio.getComponent(this.view, "AtlasLabel_jiner2");//LabelAtlas
		this.Button_raise_three = CocoStudio.getComponent(this.view, "Button_raise_three");//Button
		this.AtlasLabel_jiner3 = CocoStudio.getComponent(this.view, "AtlasLabel_jiner3");//LabelAtlas
		this.Button_raise_cancel = CocoStudio.getComponent(this.view, "Button_raise_cancel");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Panel_allin = CocoStudio.getComponent(this.view, "Panel_allin");//Panel
		this.Button_allin_fold = CocoStudio.getComponent(this.view, "Button_allin_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_allin_pk = CocoStudio.getComponent(this.view, "Button_allin_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_allin_allin = CocoStudio.getComponent(this.view, "Button_allin_allin");//Button
		this.Image_jiazhuzi = CocoStudio.getComponent(this.view, "Image_jiazhuzi");//ImageView
		this.Button_allin_call = CocoStudio.getComponent(this.view, "Button_allin_call");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_onlyraise = CocoStudio.getComponent(this.view, "Panel_onlyraise");//Panel
		this.Button_onlyraise_fold = CocoStudio.getComponent(this.view, "Button_onlyraise_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_onlyraise_pk = CocoStudio.getComponent(this.view, "Button_onlyraise_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_onlyraise_raise = CocoStudio.getComponent(this.view, "Button_onlyraise_raise");//Button
		this.Image_jiazhuzi = CocoStudio.getComponent(this.view, "Image_jiazhuzi");//ImageView
		this.Button_onlyraise_call = CocoStudio.getComponent(this.view, "Button_onlyraise_call");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_onlycall = CocoStudio.getComponent(this.view, "Panel_onlycall");//Panel
		this.Button_onlycall_fold = CocoStudio.getComponent(this.view, "Button_onlycall_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_onlycall_pk = CocoStudio.getComponent(this.view, "Button_onlycall_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_onlycall_raise = CocoStudio.getComponent(this.view, "Button_onlycall_raise");//Button
		this.Image_jiazhuzi = CocoStudio.getComponent(this.view, "Image_jiazhuzi");//ImageView
		this.Button_onlycall_call = CocoStudio.getComponent(this.view, "Button_onlycall_call");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_onlypk = CocoStudio.getComponent(this.view, "Panel_onlypk");//Panel
		this.Button_onlypk_fold = CocoStudio.getComponent(this.view, "Button_onlypk_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_onlypk_pk = CocoStudio.getComponent(this.view, "Button_onlypk_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_onlypk_raise = CocoStudio.getComponent(this.view, "Button_onlypk_raise");//Button
		this.Image_jiazhuzi = CocoStudio.getComponent(this.view, "Image_jiazhuzi");//ImageView
		this.Button_onlypk_call = CocoStudio.getComponent(this.view, "Button_onlypk_call");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_buttonGroup_right = CocoStudio.getComponent(this.view, "Panel_buttonGroup_right");//Panel
		this.Button_tequan = CocoStudio.getComponent(this.view, "Button_tequan");//Button
		this.Image_tequan = CocoStudio.getComponent(this.view, "Image_tequan");//ImageView
		this.Button_gift = CocoStudio.getComponent(this.view, "Button_gift");//Button
		this.Image_libaotu = CocoStudio.getComponent(this.view, "Image_libaotu");//ImageView
		this.Button_changeCard = CocoStudio.getComponent(this.view, "Button_changeCard");//Button
		this.Image_huanpai = CocoStudio.getComponent(this.view, "Image_huanpai");//ImageView
		this.Image_huanpaikahongdian = CocoStudio.getComponent(this.view, "Image_huanpaikahongdian");//ImageView
		this.Label_changeCardNum = CocoStudio.getComponent(this.view, "Label_changeCardNum");//Label
		this.Button_noCompare = CocoStudio.getComponent(this.view, "Button_noCompare");//Button
		this.Image_jinbitu = CocoStudio.getComponent(this.view, "Image_jinbitu");//ImageView
		this.Image_huanpaikahongdian = CocoStudio.getComponent(this.view, "Image_huanpaikahongdian");//ImageView
		this.Label_noCompareNum = CocoStudio.getComponent(this.view, "Label_noCompareNum");//Label
		this.btn_libao = CocoStudio.getComponent(this.view, "btn_libao");//Button
		this.btn_renwu = CocoStudio.getComponent(this.view, "btn_renwu");//Button
		this.btn_onlinebonus = CocoStudio.getComponent(this.view, "btn_onlinebonus");//Button
		this.Image_onlinebonus = CocoStudio.getComponent(this.view, "Image_onlinebonus");//ImageView
		this.Image_daojishi_bg = CocoStudio.getComponent(this.view, "Image_daojishi_bg");//ImageView
		this.Image_onlinebonus_lingqu = CocoStudio.getComponent(this.view, "Image_onlinebonus_lingqu");//ImageView
		this.Label_onlinebonus_daojishi = CocoStudio.getComponent(this.view, "Label_onlinebonus_daojishi");//Label
		this.Image_onlinebonus_shine = CocoStudio.getComponent(this.view, "Image_onlinebonus_shine");//ImageView
		this.Panel_buttonGroup_left = CocoStudio.getComponent(this.view, "Panel_buttonGroup_left");//Panel
		this.Panel_btnList_Left = CocoStudio.getComponent(this.view, "Panel_btnList_Left");//Panel
		this.Button_more = CocoStudio.getComponent(this.view, "Button_more");//Button
		this.ImageView_Notice = CocoStudio.getComponent(this.view, "ImageView_Notice");//ImageView
		this.panel_chat = CocoStudio.getComponent(this.view, "panel_chat");//Panel
		this.Panel_matchBegin = CocoStudio.getComponent(this.view, "Panel_matchBegin");//Panel
		this.Label_matchBeginTitle = CocoStudio.getComponent(this.view, "Label_matchBeginTitle");//Label
		this.Button_goMatch = CocoStudio.getComponent(this.view, "Button_goMatch");//Button
		this.AtlasLabel_matchTimer = CocoStudio.getComponent(this.view, "AtlasLabel_matchTimer");//LabelAtlas
		this.Button_stayTable = CocoStudio.getComponent(this.view, "Button_stayTable");//Button
		this.Image_matchBegin = CocoStudio.getComponent(this.view, "Image_matchBegin");//ImageView
		this.Panel_match = CocoStudio.getComponent(this.view, "Panel_match");//Panel
		this.Button_barrage = CocoStudio.getComponent(this.view, "Button_barrage");//Button
		this.Image_barragelock = CocoStudio.getComponent(this.view, "Image_barragelock");//ImageView
		this.Panel_AwardBar = CocoStudio.getComponent(this.view, "Panel_AwardBar");//Panel
		this.Label_FirstAward = CocoStudio.getComponent(this.view, "Label_FirstAward");//Label
		this.Label_FirstAwardNum = CocoStudio.getComponent(this.view, "Label_FirstAwardNum");//Label
		this.Label_AllAward = CocoStudio.getComponent(this.view, "Label_AllAward");//Label
		this.Label_AllAwardNum = CocoStudio.getComponent(this.view, "Label_AllAwardNum");//Label
		this.Label_SecondAward = CocoStudio.getComponent(this.view, "Label_SecondAward");//Label
		this.Label_SecondAwardNum = CocoStudio.getComponent(this.view, "Label_SecondAwardNum");//Label
		this.Panel_233 = CocoStudio.getComponent(this.view, "Panel_233");//Panel
		this.Label_matchBaseCoin = CocoStudio.getComponent(this.view, "Label_matchBaseCoin");//Label
		this.Label_matchBaseNum = CocoStudio.getComponent(this.view, "Label_matchBaseNum");//Label
		this.Label_matchRound = CocoStudio.getComponent(this.view, "Label_matchRound");//Label
		this.Label_matchPkRound = CocoStudio.getComponent(this.view, "Label_matchPkRound");//Label
		this.Label_waiting = CocoStudio.getComponent(this.view, "Label_waiting");//Label
		this.Label_match_name = CocoStudio.getComponent(this.view, "Label_match_name");//Label
		this.Panel_234 = CocoStudio.getComponent(this.view, "Panel_234");//Panel
		this.Button_quickMatch = CocoStudio.getComponent(this.view, "Button_quickMatch");//Button
		this.Button_matchRank = CocoStudio.getComponent(this.view, "Button_matchRank");//Button
		this.AtlasLabel_myMatchRank = CocoStudio.getComponent(this.view, "AtlasLabel_myMatchRank");//LabelAtlas
	},

    initLayer:function(){
		var gui = GUI_JINHUATABLE;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/JinHuaTable.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/JinHuaTable.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/JinHuaTable.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}
	},
    
	callback_Panel_94:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_PrivateRoom:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_roominfo:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_bg:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_lunshu:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_danzhu:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_zongxiazhu:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_geweihao:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_geweihao.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_wolaishouqian:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_wolaishouqian.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_guarenlaile:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_guarenlaile.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_waiting_emo1:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_COMMON_V2,3);
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_waiting_emo2:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_COMMON_V2,4);
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_ptcl:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_ptcl.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_snh:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_snh.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_xfnym:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_xfnym.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_afterfold_emo1:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_COMMON_V2,2);
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_afterfold_emo2:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_COMMON_V2,14);
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_xiexie:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_xiexie.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_zhunixiaju:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_zhunixiaju.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_laozi:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_laozi.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_win_emo1:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_COMMON_V2,10);
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_win_emo2:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_COMMON_V2,3);
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_yunqicha:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_yunqicha.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_dadebucuo:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_dadebucuo.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_nizabushangtian:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_nizabushangtian.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_lose_emo1:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_COMMON_V2,8);
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_lose_emo2:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_COMMON_V2,6);
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_tableChat:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_otherturn_fold:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_otherturn_alwaysbet:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_mine_fold:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_mine_raise:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_mine_call:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_canpk_fold:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_canpk_pk:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_canpk_raise:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_canpk_call:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_raise_one:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_raise_two:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_raise_three:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_raise_cancel:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_allin_fold:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_allin_pk:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_allin_allin:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_allin_call:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_onlyraise_raise:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_onlycall_call:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_onlypk_pk:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_tequan:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_gift:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_changeCard:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_noCompare:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_libao:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_renwu:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_RENWU);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_onlinebonus:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableLogic.onLineBonus();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_more:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_JINHUATABLEMORE);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_goMatch:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_stayTable:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_barrage:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_barragelock:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_quickMatch:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_matchRank:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},
    //安卓手机的返回键的监听事件
    onKeypad:function(event){
    	if(event == "backClicked"){//返回键
    		
    	}else if(event == "menuClicked"){//菜单键
    	
    	}
    },
    //添加信号
    addSlot:function(){
    	Frameworks.addSlot2Signal(DBID_BACKPACK_GOODS_COUNT, ProfileJinHuaTable.slot_DBID_BACKPACK_GOODS_COUNT);//更新背包数量
    	Frameworks.addSlot2Signal(JHID_QUIT_TABLE, ProfileJinHuaTable.slot_JHID_QUIT_TABLE);//退出牌桌
    	Frameworks.addSlot2Signal(JINHUA_MGR_NOTICE, ProfileJinHuaTable.slot_JINHUA_MGR_NOTICE);//更新公告信息
    	Frameworks.addSlot2Signal(JHID_STAND_UP, ProfileJinHuaTable.slot_JHID_STAND_UP);//站起
    	Frameworks.addSlot2Signal(JHID_SIT_DOWN, ProfileJinHuaTable.slot_JHID_SIT_DOWN);//坐下
    	Frameworks.addSlot2Signal(JHID_READY, ProfileJinHuaTable.slot_JHID_READY);//准备
    	Frameworks.addSlot2Signal(JHID_GET_BAOHE_STEP_INFO, ProfileJinHuaTable.slot_JHID_GET_BAOHE_STEP_INFO);//获取在线奖励
    	Frameworks.addSlot2Signal(JHID_GET_ONLINE_REWARD, ProfileJinHuaTable.slot_JHID_GET_ONLINE_REWARD);//获取在线奖励
    	Frameworks.addSlot2Signal(JHID_BET, ProfileJinHuaTable.slot_JHID_BET);//下注押注
    	Frameworks.addSlot2Signal(JHID_CHAT, ProfileJinHuaTable.slot_JHID_CHAT);//聊天
        Frameworks.addSlot2Signal(JINHUA_MGR_SETTING, ProfileJinHuaTable.slot_JINHUA_MGR_SETTING);//金花游戏数据
        Frameworks.addSlot2Signal(DBID_USER_INFO, ProfileJinHuaTable.slot_DBID_USER_INFO);//更新用户数据（自己或者玩家）
        Frameworks.addSlot2Signal(JHID_INIT_CARDS, ProfileJinHuaTable.slot_JHID_INIT_CARDS);//发牌
},
    //移除信号
    removeSlot:function(){
    	Frameworks.removeSlotFromSignal(DBID_BACKPACK_GOODS_COUNT, ProfileJinHuaTable.slot_DBID_BACKPACK_GOODS_COUNT);
    	Frameworks.removeSlotFromSignal(JHID_QUIT_TABLE, ProfileJinHuaTable.slot_JHID_QUIT_TABLE);
    	Frameworks.removeSlotFromSignal(JINHUA_MGR_NOTICE, ProfileJinHuaTable.slot_JINHUA_MGR_NOTICE);
    	Frameworks.removeSlotFromSignal(JHID_STAND_UP, ProfileJinHuaTable.slot_JHID_STAND_UP);
    	Frameworks.removeSlotFromSignal(JHID_SIT_DOWN, ProfileJinHuaTable.slot_JHID_SIT_DOWN);
    	Frameworks.removeSlotFromSignal(JHID_READY, ProfileJinHuaTable.slot_JHID_READY);
    	Frameworks.removeSlotFromSignal(JHID_GET_BAOHE_STEP_INFO, ProfileJinHuaTable.slot_JHID_GET_BAOHE_STEP_INFO);
    	Frameworks.removeSlotFromSignal(JHID_GET_ONLINE_REWARD, ProfileJinHuaTable.slot_JHID_GET_ONLINE_REWARD);
    	Frameworks.removeSlotFromSignal(JHID_BET, ProfileJinHuaTable.slot_JHID_BET);
    	Frameworks.removeSlotFromSignal(JHID_CHAT, ProfileJinHuaTable.slot_JHID_CHAT);
    	Frameworks.removeSlotFromSignal(JINHUA_MGR_SETTING, ProfileJinHuaTable.slot_JINHUA_MGR_SETTING);
    	Frameworks.removeSlotFromSignal(DBID_USER_INFO, ProfileJinHuaTable.slot_DBID_USER_INFO);
    	Frameworks.removeSlotFromSignal(JHID_INIT_CARDS, ProfileJinHuaTable.slot_JHID_INIT_CARDS);
    },
    
    //释放界面的私有数据
    releaseData:function(){
        cc.spriteFrameCache.removeSpriteFramesFromFile(Common.getResourcePath("chat_popup.plist"));
        cc.spriteFrameCache.removeSpriteFramesFromFile(Common.getResourcePath("desk.plist"));
        cc.spriteFrameCache.removeSpriteFramesFromFile(Common.getResourcePath("table_elements.plist"));
        cc.spriteFrameCache.removeSpriteFramesFromFile(Common.getResourcePath("poker_cards.plist"));
        //关闭更新系统时间-定时器
        clearInterval(this.updateTimer);
        delete this.updateTimer;
        if(this.labelNotice!= null){
            this.labelNotice.stopAllActions();
            delete this.labelNotice;
        }
    },
    
    requestMsg:function(){
    
    },
    //初始化界面
    initData:function(){
        //Todo:清理数据
        JinHuaTableTips.clear();

        //更新背包道具数量
        this.updateBACKPACK_GOODS_COUNT();
        //初始化牌桌(玩家、筹码)
        Profile_JinHuaTableConfig.initTableElmentsCoordinate();

        var GameData= Profile_JinHuaGameData.getGameData();
        //请求在线奖励信息
        if(GameData.roomId != null){
            sendJHID_GET_BAOHE_STEP_INFO(GameData.roomId);
        }
        //初始化牌桌背景
        this.initBg();

        this.Panel_buttonGroup_right.setVisible(true);
        this.btn_renwu.setVisible(true);
    },
    //更新背包道具数量
    updateBACKPACK_GOODS_COUNT:function(){
        sendDBID_BACKPACK_GOODS_COUNT(GameConfig.GOODS_ID_SUPERIORFACE);
        sendDBID_BACKPACK_GOODS_COUNT(GameConfig.GOODS_ID_CHANGECARD);
        sendDBID_BACKPACK_GOODS_COUNT(GameConfig.GOODS_ID_NO_PK);
    },
    //更新背包(禁比、换牌、高级表情)
    updateDBID_BACKPACK_GOODS_COUNT:function(){
        var backPackGoodsCountData= Profile_JinHuaGameData.getBackPackGoodsCountData();
        if(backPackGoodsCountData.ItemID== GameConfig.GOODS_ID_CHANGECARD){//换牌
            var GameData= Profile_JinHuaGameData.getGameData();
            var roomInfo= Profile_JinHuaRoomData.getRoomByID(GameData.roomId);

            //是否为千王场(换牌卡)
            if(((roomInfo&&roomInfo.roomType== Profile_JinHuaRoomData.TYPE_QIANWANG)
                ||(GameData.BUILDRoomType!=null&&GameData.BUILDRoomType== Profile_JinHuaRoomData.TYPE_QIANWANG))){
                //更新换牌卡个数
                this.updateChangeCardCountText();
                //更新换牌卡数量
                this.updateChangeCardCount(Profile_JinHuaGameData.getIsMatch());
            }else{
                //更新换牌卡个数
                this.updateChangeCardCountText();
                //更新换牌卡数量
                this.updateChangeCardCount(Profile_JinHuaGameData.getIsMatch());
                //不可点击状态
                this.Button_changeCard.setOpacity(80);
                this.Image_huanpai.setOpacity(80);
                this.Image_huanpaikahongdian.setOpacity(80);
                this.Label_changeCardNum.setOpacity(80);
            }
        }else if(backPackGoodsCountData.ItemID== GameConfig.GOODS_ID_NO_PK){//禁比
            this.updateNoPkCountText();
        }
    },
    //根据是否为比赛，更新换牌卡的数量
    updateChangeCardCount:function(isMatch){
        if(isMatch){
            this.Button_changeCard.setVisible(true);
            this.Button_changeCard.setTouchEnabled(true);
        }
    },
    //更新换牌卡个数
    updateChangeCardCountText:function(){
        //获取位数
        var digitCount= Profile_JinHuaTableConfig.remainChangeCardCnt.toString().length;

        if(digitCount> 2){
            JinHuaTableLogic.Label_changeCardNum.setString("99+");
        }else{
            JinHuaTableLogic.Label_changeCardNum.setString(Profile_JinHuaTableConfig.remainChangeCardCnt);
        }
    },
    //更新禁比卡的数量
    updateNoPkCountText:function(){
        //获取位数
        var digitCount= Profile_JinHuaTableConfig.remainNoPKCnt.toString().length;
        if(digitCount> 2){
            JinHuaTableLogic.Label_noCompareNum.setString("99+");
        }else{
            JinHuaTableLogic.Label_noCompareNum.setString(Profile_JinHuaTableConfig.remainNoPKCnt);
        }
    },
    //初始化背景
    initBg:function(){
        //初始化<坐下>按钮
        this.initSitBtn();
        //初始化<Pk>按钮
        this.initPkBtn();
        //牌桌标题
        this.initTableTitle();
        //牌桌类型
        this.initTableType();
        //桌面上的玩家(自身玩家重新坐下)
        if(ProfileJinHuaTable.JinHuaTablePlayer){
            ProfileJinHuaTable.JinHuaTablePlayer.removeFromParent(true);
        }
        ProfileJinHuaTable.JinHuaTablePlayer= JinHuaTablePlayer.create();
        this.view.addChild(ProfileJinHuaTable.JinHuaTablePlayer, 100);
        //坐下提示模块
        this.view.addChild(JinHuaTableTips.getTableTipsLayer());

        //设置牌桌数据
        this.createLayerFarm();
        //进入牌桌提示
        this.enterTablePrompt();
    },
    //初始化坐下按钮
    initSitBtn:function(){
        if(this.sitButtonGroup== null||this.sitButtonGroup== undefined) this.sitButtonGroup= {};
        for(var i=0; i< Profile_JinHuaTableConfig.playerCnt; ++i){
            this.sitButtonGroup[i] = cc.MenuItemImage.create(Common.getResourcePath("ui_weizuoren.png"),Common.getResourcePath("ui_weizuoren.png"),this.onSitDown, this);
            this.sitButtonGroup[i].setAnchorPoint(cc.p(0, 0));
            var menu = cc.Menu.create(this.sitButtonGroup[i]);
            menu.setPosition(Profile_JinHuaTableConfig.spritePlayers[i].locX,Profile_JinHuaTableConfig.spritePlayers[i].locY);
            JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(menu);
            this.sitButtonGroup[i].setVisible(false);
            this.sitButtonGroup[i].setZOrder(3);
            this.sitButtonGroup[i].setTag(i);
        }
    },
    //响应事件- 坐下
    onSitDown:function(pSender){
        //其中pSender.getTag()就是服务器端的座位号(CSID)
        console.log("ID:"+ pSender.getTag()+"坐下");
        JinHuaTablePlayer.sitDownMe(pSender.getTag());
    },
    //按钮：PK
    initPkBtn:function(){
        this.pkButtonGroup[1] = cc.MenuItemImage.create(Common.getResourcePath("table_pk_collimation.png"),Common.getResourcePath("table_pk_collimation.png"),this.onClick_btnPK, this);
        var menu1 = cc.Menu.create(this.pkButtonGroup[1]);
        menu1.setPosition(Profile_JinHuaTableConfig.spritePlayers[1].pkX,Profile_JinHuaTableConfig.spritePlayers[1].pkY);
        menu1.setZOrder(12);
        JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(menu1);

        this.pkButtonGroup[2] = cc.MenuItemImage.create(Common.getResourcePath("table_pk_collimation.png"),Common.getResourcePath("table_pk_collimation.png"),this.onClick_btnPK, this);
        var menu2 = cc.Menu.create(this.pkButtonGroup[2]);
        menu2.setPosition(Profile_JinHuaTableConfig.spritePlayers[2].pkX,Profile_JinHuaTableConfig.spritePlayers[2].pkY);
        menu2.setZOrder(12);
        JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(menu2);

        this.pkButtonGroup[3] = cc.MenuItemImage.create(Common.getResourcePath("table_pk_collimation.png"),Common.getResourcePath("table_pk_collimation.png"),this.onClick_btnPK, this);
        var menu3 = cc.Menu.create(this.pkButtonGroup[3]);
        menu3.setPosition(Profile_JinHuaTableConfig.spritePlayers[3].pkX,Profile_JinHuaTableConfig.spritePlayers[3].pkY);
        menu3.setZOrder(12);
        JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(menu3);

        this.pkButtonGroup[4] = cc.MenuItemImage.create(Common.getResourcePath("table_pk_collimation.png"),Common.getResourcePath("table_pk_collimation.png"),this.onClick_btnPK, this);
        var menu4 = cc.Menu.create(this.pkButtonGroup[4]);
        menu4.setPosition(Profile_JinHuaTableConfig.spritePlayers[4].pkX,Profile_JinHuaTableConfig.spritePlayers[4].pkY);
        menu4.setZOrder(12);
        JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(menu4);

        this.pkButtonGroup[1].setVisible(false);
        this.pkButtonGroup[2].setVisible(false);
        this.pkButtonGroup[3].setVisible(false);
        this.pkButtonGroup[4].setVisible(false);

        this.pkButtonGroup[1].setTag(1);
        this.pkButtonGroup[2].setTag(2);
        this.pkButtonGroup[3].setTag(3);
        this.pkButtonGroup[4].setTag(4);

        this.blinkPK(this.pkButtonGroup[1]);
        this.blinkPK(this.pkButtonGroup[2]);
        this.blinkPK(this.pkButtonGroup[3]);
        this.blinkPK(this.pkButtonGroup[4]);
    },
    onClick_btnPK:function(pSender){
        console.log("PK:"+ pSender.getTag());
    },
    //放大缩小PK按钮
    blinkPK:function(button){
        var seq= cc.sequence(cc.scaleTo(0.5, 0.8),cc.scaleTo(0.5, 1));
        button.runAction(seq.repeatForever());
    },
    //显示隐藏Pk按钮
    showPkButton:function(id){
        this.pkButtonGroup[id].setVisible(true);
        this.pkButtonGroup[id].setEnabled(true);
    },
    //显示隐藏Pk按钮
    hidePkButton:function(){
        //除了玩家本身 全部隐藏
        for(var i=1; i< Profile_JinHuaTableConfig.playerCnt; ++i){
            this.pkButtonGroup[i].setVisible(false);
            this.pkButtonGroup[i].setEnabled(false);
        }
    },
    //显示某个下标的坐下按钮
    showSitButton:function(CSID){
        if(this.sitButtonGroup[CSID]){
            this.sitButtonGroup[CSID].setVisible(true);
            this.sitButtonGroup[CSID].setEnabled(true);
        }
    },
    //隐藏某个下标的坐下按钮
    hideSitButton:function(CSID){
        if(this.sitButtonGroup[CSID]){
            this.sitButtonGroup[CSID].setVisible(false);
            this.sitButtonGroup[CSID].setEnabled(false);
        }
    },
    //隐藏所有的坐下按钮
    hideAllSitButton:function(){
        for(var i=0; i< Profile_JinHuaTableConfig.playerCnt; ++i){
            if(this.sitButtonGroup[i]){
                this.sitButtonGroup[i].setVisible(false);
                this.sitButtonGroup[i].setEnabled(false);
            }
        }
    },
    //初始化牌桌名
    initTableTitle:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        switch (GameData.roomId){
            case Profile_JinHuaRoomData.ROOMID_BASIC_LOW:
                this.Image_title_left.loadTexture("ui_jingdianchang.png",1);
                this.Image_title_right.loadTexture("ui_chujichang.png",1);
                break;
            case Profile_JinHuaRoomData.ROOMID_BASIC_MID:
                this.Image_title_left.loadTexture("ui_jingdianchang.png",1);
                this.Image_title_right.loadTexture("ui_zhongjichang.png",1);
                break;
            case Profile_JinHuaRoomData.ROOMID_BASIC_HIGH:
                this.Image_title_left.loadTexture("ui_jingdianchang.png",1);
                this.Image_title_right.loadTexture("ui_gaojichang.png",1);
                break;
            case Profile_JinHuaRoomData.ROOMID_SHARK_LOW:
                this.Image_title_left.loadTexture("ui_qianchangwang.png",1);
                this.Image_title_right.loadTexture("ui_zhongjichang.png",1);
                break;
            case Profile_JinHuaRoomData.ROOMID_SHARK_MID:
                this.Image_title_left.loadTexture("ui_qianchangwang.png",1);
                this.Image_title_right.loadTexture("ui_gaojichang.png",1);
                break;
            case Profile_JinHuaRoomData.ROOMID_SHARK_HIGH:
                this.Image_title_left.loadTexture("ui_qianchangwang.png",1);
                this.Image_title_right.loadTexture("ui_fuhaochang.png",1);
                break;
        }
    },
    //初始化牌桌类型(有可能是房间,比赛以及自建牌桌)
    initTableType:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        
        if(Profile_JinHuaGameData.getIsMatch()){
            //如果是比赛牌桌
            this.Panel_EXP.setVisible(false);
            this.Panel_match.setVisible(true);
            this.Button_matchRank.setTouchEnabled(true);
            this.Button_gift.setVisible(false);
            this.Button_gift.setTouchEnabled(false)
            this.btn_libao.setVisible(false)
            this.btn_libao.setTouchEnabled(false)
            this.Button_tequan.setVisible(false)
            this.Button_tequan.setTouchEnabled(false)
            this.Button_changeCard.setVisible(false)
            this.Button_changeCard.setTouchEnabled(false)
            this.btn_renwu.setVisible(false)
            this.btn_renwu.setTouchEnabled(false)
            this.Button_noCompare.setVisible(false)
            this.Button_noCompare.setTouchEnabled(false)
            this.Image_title_left.setVisible(false)
            this.Image_title_right.setVisible(false)
            this.Panel_PrivateRoom.setVisible(false)
            //Todo:sendJINHUA_ALLOW_REBUY(GameData["matchInstanceId"])
            if(GameData.mySSID!= null){
                this.Button_barrage.setTouchEnabled(false)
                this.Button_barrage.setVisible(false)
                this.Button_tableChat.setTouchEnabled(false)
                this.Button_tableChat.setVisible(false)
                this.Image_barragelock.setTouchEnabled(true)
                this.Image_barragelock.setVisible(true)
                //Todo:
//                if JinHuaBarrage.getSwitch() == true then
//                JinHuaBarrage.setSwitch(true)
//            else
//                JinHuaBarrage.setSwitch(false)
//                end
            }else{
                this.Button_barrage.setTouchEnabled(true)
                this.Button_barrage.setVisible(true)
                this.Image_barragelock.setTouchEnabled(false)
                this.Image_barragelock.setVisible(false)
            }
            if(GameData["matchInstanceId"]!= null||GameData["matchInstanceId"]!= ""){
                //Todo:sendJINHUA_RANK_CHANGE(GameData["matchInstanceId"])
            }
            if(GameData["tableId"] == 0){
                this.Label_waiting.setVisible(true);
            }
        }else{
            //非比赛场
            this.Panel_buttonGroup_right.setVisible(true);
            this.Panel_EXP.setVisible(true);
            this.Panel_match.setVisible(false);
            this.Button_matchRank.setTouchEnabled(false);
            this.Button_barrage.setTouchEnabled(false);
            this.Image_barragelock.setTouchEnabled(false);
            this.Button_gift.setVisible(true);
            this.Button_gift.setTouchEnabled(true);
            this.btn_libao.setVisible(true);
            this.btn_libao.setTouchEnabled(true);
            this.Button_tequan.setVisible(true);
            this.Button_tequan.setTouchEnabled(true);
            this.Button_changeCard.setVisible(true);
            this.Button_changeCard.setTouchEnabled(true);
            this.Button_tableChat.setTouchEnabled(true);
            this.Button_tableChat.setVisible(true);
            this.btn_renwu.setVisible(GameConfig.GAME_ID!= GameConfig.JINHUA_GAME_ID);
            this.btn_renwu.setTouchEnabled(GameConfig.GAME_ID!= GameConfig.JINHUA_GAME_ID);
            this.Button_noCompare.setVisible(true);
            this.Button_noCompare.setTouchEnabled(true);
            this.Image_title_left.setVisible(true);
            this.Image_title_right.setVisible(true);
            this.Panel_PrivateRoom.setVisible(false);

            if(GameData.BUILDTableId!= null&&GameData.BUILDTableId!= 0){
                //如果是自建房间
                this.Image_title_left.setVisible(false);
                this.Image_title_right.setVisible(false);
                this.Panel_PrivateRoom.setVisible(true);
                this.Label_RoomNumber.setString("自建房间("+ GameData.BUILDTableId+"):");
                if(GameData.BUILDRoomType== Profile_JinHuaTableConfig.TYPE_JINGDIAN){
                    this.Label_RoomNumber.setString("经典场");
                }else if(GameData.BUILDRoomType== Profile_JinHuaTableConfig.TYPE_QIANWANG){
                    this.Label_RoomNumber.setString("千王场");
                }
                this.Label_MinCoin.setString(GameData.BUILDMinCoin+"金币");
                this.Label_HolderName.setString(GameData.BUILDPlayerName);
                //初始化房间剩余时间
                this.initBuildTableRemainingTime();
            }
        }
    },
    //初始化房间剩余时间
    initBuildTableRemainingTime:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        this.remainingTime= parseInt(GameData.BUILDOverTime);
        var self= this;
        if(this.remainingTime!= null&& this.remainingTime>0){
            var seq= cc.sequence(cc.delayTime(1), cc.callFunc(function(pSender){
                self.setBuildTableRemainingTime();
            }));
            this.Label_CountDownTime.runAction(seq.repeatForever());
        }
    },
    //设置房间剩余时间
    setBuildTableRemainingTime:function(){
        if(this.remainingTime> 0){
            this.remainingTime--;
            //剩余小时
            var timeHour= Math.floor(this.remainingTime/ 3600);
            //剩余分钟
            var timeMin= Math.floor((this.remainingTime/ 60)% 60);
            //剩余秒数
            var timeSec= Math.floor(this.remainingTime% 60);

            timeHour= timeHour<10?"0"+timeHour:timeHour;
            timeMin= timeMin<10?"0"+timeMin:timeMin;
            timeSec= timeSec<10?"0"+timeSec:timeSec;
            //剩余时间
            var time= timeHour+":"+timeMin+":"+timeSec;
            this.Label_CountDownTime.setString(time);
        }else{
            this.Label_CountDownTime.stopAllActions();
        }
    },
    //显示系统公告
    showNotice:function(){
        //利用文本是否为空，判断是否进行中
        if(this.labelNotice!= null) return;

        //获取系统公告
        var noticeTable= Profile_JinHuaNotice.getOneNotice();
        if(noticeTable== null||noticeTable== undefined||noticeTable==""){
            //重新获取公告
            return;
        }

        var ImageNoticeSize= this.ImageView_Notice.getContentSize();
        var chatPanelSize= this.panel_chat.getContentSize();
        var chatPanelPoint= this.panel_chat.getPosition();

        var textNotice = noticeTable.content;
        //创建系统公告文本
        this.createSystemNoticeLabel(textNotice, cc.color(noticeTable.colorR, noticeTable.colorG, noticeTable.colorB));

        if(this.labelNotice== null) return;
        //设置初始位置
        this.labelNotice.setPosition(cc.p(chatPanelSize.width + chatPanelPoint.x + ImageNoticeSize.width / 2,0));
        //播放系统公告
        var moveBy =  cc.MoveBy.create(GameConfig.NOTICE_MOVE_TIME*(this.labelNotice.width + chatPanelSize.width), cc.p(-chatPanelPoint.x -this.labelNotice.width -chatPanelSize.width*2,0));
        var self= this;
        var seq = cc.Sequence.create(moveBy,cc.callFunc(function(){
            self.hideNotice();
        }));
        this.labelNotice.runAction(cc.RepeatForever.create(seq));
    },
    //隐藏系统公告
    hideNotice:function(){
        if(this.labelNotice!= null&&this.panel_chat!= null){
            this.labelNotice.stopAllActions();
            this.labelNotice.removeFromParent(true);
            this.labelNotice= null;
        }
        this.showNotice();
    },
    //系统公告文本
    createSystemNoticeLabel:function(systemNotice,color) {
        var chatPanelSize = this.panel_chat.getContentSize();
        var chatPanelPoint = this.panel_chat.getPosition();
        var ImageNoticeSize = this.ImageView_Notice.getContentSize();

        this.labelNotice = cc.LabelTTF.create(systemNotice.toString(), "微软雅黑", 20);
        this.labelNotice.setAnchorPoint(cc.p(0, 0));
        this.labelNotice.setPosition(cc.p(chatPanelSize.width + chatPanelPoint.x + ImageNoticeSize.width / 2, 0));
        this.labelNotice.setColor(color);
        this.panel_chat.addChild(this.labelNotice);
    },
    //启动计时器
    startUpdateTimeAndBatteryScheduler:function(){
        //初始时，更新一次，系统时间
        this.updateTime();
        //不能及时更新系统时间,60s更新一次
        this.updateTimer= setInterval(this.updateTime, 60000);
    },
    //更新系统时间
    updateTime:function(){
        var date= new Date();
        var hour= date.getHours()<10?"0"+ date.getHours():date.getHours();
        var minute= date.getMinutes()<10?"0"+ date.getMinutes():date.getMinutes();
        JinHuaTableLogic.Label_time.setString(hour + ":"+ minute);
    },
    //设置底部面板是否可见
    setBotPanelVisible:function(visible){
        this.Panel_dibu.setVisible(visible);
        this.Panel_dibu.setTouchEnabled(visible);
        this.Button_tableChat.setTouchEnabled(visible);
    },
    //设置在线时长礼包是否可领取
    setOnLineBonusVisible:function(visible){
        this.Label_onlinebonus_daojishi.setVisible(visible);
        this.btn_onlinebonus.setVisible(visible);
        this.btn_onlinebonus.setTouchEnabled(visible);
    },
    //隐藏所有快捷聊天按钮极其点击效果
    hideAllQuickChatButton:function(){
        this.Panel_quickchat.setVisible(false);
        this.Panel_waiting.setVisible(false);
        this.Panel_afterfold.setVisible(false);
        this.Panel_win.setVisible(false);
        this.Panel_lose.setVisible(false);

        this.Button_geweihao.setVisible(false);
        this.Button_geweihao.setTouchEnabled(false);
        this.Button_wolaishouqian.setVisible(false);
        this.Button_wolaishouqian.setTouchEnabled(false);
        this.Button_guarenlaile.setVisible(false);
        this.Button_guarenlaile.setTouchEnabled(false);
        this.Button_waiting_emo1.setVisible(false);
        this.Button_waiting_emo1.setTouchEnabled(false);
        this.Button_waiting_emo2.setVisible(false);
        this.Button_waiting_emo2.setTouchEnabled(false);

        this.Button_ptcl.setVisible(false);
        this.Button_ptcl.setTouchEnabled(false);
        this.Button_snh.setVisible(false);
        this.Button_snh.setTouchEnabled(false);
        this.Button_xfnym.setVisible(false);
        this.Button_xfnym.setTouchEnabled(false);
        this.Button_afterfold_emo1.setVisible(false);
        this.Button_afterfold_emo1.setTouchEnabled(false);
        this.Button_afterfold_emo2.setVisible(false);
        this.Button_afterfold_emo2.setTouchEnabled(false);

        this.Button_xiexie.setVisible(false);
        this.Button_xiexie.setTouchEnabled(false);
        this.Button_zhunixiaju.setVisible(false);
        this.Button_zhunixiaju.setTouchEnabled(false);
        this.Button_laozi.setVisible(false);
        this.Button_laozi.setTouchEnabled(false);
        this.Button_win_emo1.setVisible(false);
        this.Button_win_emo1.setTouchEnabled(false);
        this.Button_win_emo2.setVisible(false);
        this.Button_win_emo2.setTouchEnabled(false);

        this.Button_yunqicha.setVisible(false);
        this.Button_yunqicha.setTouchEnabled(false);
        this.Button_dadebucuo.setVisible(false);
        this.Button_dadebucuo.setTouchEnabled(false);
        this.Button_nizabushangtian.setVisible(false);
        this.Button_nizabushangtian.setTouchEnabled(false);
        this.Button_lose_emo1.setVisible(false);
        this.Button_lose_emo1.setTouchEnabled(false);
        this.Button_lose_emo2.setVisible(false);
        this.Button_lose_emo2.setTouchEnabled(false);
    },
    //显示相对类型的快捷聊天按钮
    showQuickChatButton:function(type){
        //比赛
        if(Profile_JinHuaGameData.getIsMatch()) return;
        //首先隐藏所有的
        this.hideAllQuickChatButton();

        //Todo:金花新手引导
        if(type == STATUS_QUICK_CHAT_WAITING){
            this.Panel_waiting.setVisible(true);
            this.Button_geweihao.setVisible(true);
            this.Button_geweihao.setTouchEnabled(true);
            this.Button_wolaishouqian.setVisible(true);
            this.Button_wolaishouqian.setTouchEnabled(true);
            this.Button_guarenlaile.setVisible(true);
            this.Button_guarenlaile.setTouchEnabled(true);
            this.Button_waiting_emo1.setVisible(true);
            this.Button_waiting_emo1.setTouchEnabled(true);
            this.Button_waiting_emo2.setVisible(true);
            this.Button_waiting_emo2.setTouchEnabled(true);
        }else if(type == STATUS_QUICK_CHAT_FOLD) {
            this.Panel_afterfold.setVisible(true);
            this.Button_ptcl.setVisible(true);
            this.Button_ptcl.setTouchEnabled(true);
            this.Button_snh.setVisible(true);
            this.Button_snh.setTouchEnabled(true);
            this.Button_xfnym.setVisible(true);
            this.Button_xfnym.setTouchEnabled(true);
            this.Button_afterfold_emo1.setVisible(true);
            this.Button_afterfold_emo1.setTouchEnabled(true);
            this.Button_afterfold_emo2.setVisible(true);
            this.Button_afterfold_emo2.setTouchEnabled(true);
        }else if(type == STATUS_QUICK_CHAT_WIN) {
            this.Panel_win.setVisible(true);
            this.Button_xiexie.setVisible(true);
            this.Button_xiexie.setTouchEnabled(true);
            this.Button_zhunixiaju.setVisible(true);
            this.Button_zhunixiaju.setTouchEnabled(true);
            this.Button_laozi.setVisible(true);
            this.Button_laozi.setTouchEnabled(true);
            this.Button_win_emo1.setVisible(true);
            this.Button_win_emo1.setTouchEnabled(true);
            this.Button_win_emo2.setVisible(true);
            this.Button_win_emo2.setTouchEnabled(true);
        }else if(type == STATUS_QUICK_CHAT_LOSE){
            this.Panel_lose.setVisible(true);
            this.Button_yunqicha.setVisible(true);
            this.Button_yunqicha.setTouchEnabled(true);
            this.Button_dadebucuo.setVisible(true);
            this.Button_dadebucuo.setTouchEnabled(true);
            this.Button_nizabushangtian.setVisible(true);
            this.Button_nizabushangtian.setTouchEnabled(true);
            this.Button_lose_emo1.setVisible(true);
            this.Button_lose_emo1.setTouchEnabled(true);
            this.Button_lose_emo2.setVisible(true);
            this.Button_lose_emo2.setTouchEnabled(true);
        }
        this.Panel_quickchat.setVisible(true);
    },
    //初始化看牌按钮
    initCheckBtn:function(){
        //Todo:封装看牌按钮
//        JinHuaTableCheckButton.createCheckButton();
//        JinHuaTableCheckButton.setSpriteVisible(buttonCheckIsShow);
    },
    //初始化牌桌数据
    createLayerFarm:function(){
        //开启定时器，更新系统时间
        this.startUpdateTimeAndBatteryScheduler();

        var GameData= Profile_JinHuaGameData.getGameData();

        if(Profile_JinHuaGameData.getIsMatch()){
            //更新比赛底注
            this.Label_matchBaseCoin.setString(GameData.singleCoin);
            this.Label_match_name.setVisible(true);
            this.Label_match_name.setString(GameData.matchTitle);
        }
        //Todo:金币堆模块
        //JinHuaTableCoin.createTableCoins(GameData.chips);
        //更新牌桌基本信息显示
        this.updateTableTitle();
        //设置总轮数
        this.initAllRound();
        //设置经验
        this.initExpProgressBar();
        //设置特权特权按钮是否显示
        this.initRule();
    },
    //更新牌桌基本信息显示
    updateTableTitle:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        if(Profile_JinHuaGameData.getIsMatch()){
            //更新比赛基本信息
            this.Label_matchBaseNum.setString(GameData.baseChips);
            this.Label_matchRound.setString(GameData.round +"/"+ GameData.allRound);
            this.Label_matchPkRound.setString(GameData.CompareRound);
            this.Label_sumCoin.setString(GameData.totalPoolCoin);
        }else{
            //更新牌桌基本信息
            this.Label_baseCoin.setString(GameData.singleCoin);
            this.Label_sumCoin.setString(GameData.totalPoolCoin);
            this.Label_round.setString(GameData.round);
        }
    },
    //设置总轮数
    initAllRound:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        if(GameData["allRound"]!= null){
            this.Label_allRound.setString(GameData["allRound"]);
        }
    },
    //设置经验条
    initExpProgressBar:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        if(GameData["Exp"]!= null&&GameData["levelUpExp"]!= null&&GameData["level"]!= null){
            //初始化锁定牌桌按钮
            this.Panel_EXP.setVisible(true);
            this.Label_level.setString("Lv."+ GameData["level"]);
            this.Label_exp.setString("经验:"+ GameData["Exp"] + "/" + GameData["levelUpExp"]);
            this.ProgressBar_exp.setPercent(GameData["Exp"]/GameData["levelUpExp"]);
        }else{
            this.Panel_EXP.setVisible(false);
        }
    },
    //设置特权
    initRule:function(){
        if(!Profile_JinHuaGameData.getIsMatch()){
            this.Button_tequan.setVisible(true);
            this.Button_tequan.setTouchEnabled(true);
        }
    },
    //进入牌桌提示
    enterTablePrompt:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        if(GameData.status!=  STATUS_TABLE_WAITTING&&GameData.status!= STATUS_TABLE_READY){
            //没有在打牌
            if(!Profile_JinHuaGameData.isMePlayingThisRound()){
                this.showBotButton(STATUS_BUTTON_WAIT);
            }
        }else{
            this.showBotButton(STATUS_BUTTON_WAIT);
            this.onReady();
        }

        //如果断线重连 看牌按钮是否显示
        var playerTable = GameData["players"];
        if(playerTable== null) return;
        for(var i=0; i< GameData["playersCnt"];++i){
            if(playerTable[i]!= null && playerTable[i].userId== profile_user.getSelfUserID){
                if(playerTable[i]["cardCnt"]== 0){
                    this.buttonCheckIsShow= true;
                    //Todo:JinHuaTableCheckButton.setSpriteVisible(true);
                }else{
                    this.buttonCheckIsShow= false;
                    //Todo:JinHuaTableCheckButton.setSpriteVisible(false);
                }
            }
        }
    },
    //显示相对类型的下排操作按钮
    showBotButton:function(type){
        //隐藏所有下排操作按钮极其点击效果
        this.hideAllBotButton();
        this.lastStatus= type;
        switch (type){
            case STATUS_BUTTON_WAIT://等待
                //Todo:JinHuaTableCheckButton.setSpriteVisible(false)
                this.buttonCheckIsShow= false;
                this.Panel_wait.setVisible(true);

                this.Button_wait_fold.setVisible(true);
                this.Button_wait_fold.setTouchEnabled(true);
                this.Button_wait_pk.setVisible(true);
                this.Button_wait_pk.setTouchEnabled(true);
                this.Button_wait_raise.setVisible(true);
                this.Button_wait_raise.setTouchEnabled(true);
                this.Button_wait_alwaysbet.setVisible(true);
                this.Button_wait_alwaysbet.setTouchEnabled(true);
                break;
            case STATUS_BUTTON_OTHERTURN://等待
                this.Panel_otherturn.setVisible(true);

                this.Button_otherturn_fold.setVisible(true);
                this.Button_otherturn_fold.setTouchEnabled(true);
                this.Button_otherturn_pk.setVisible(true);
                this.Button_otherturn_pk.setTouchEnabled(true);
                this.Button_otherturn_raise.setVisible(true);
                this.Button_otherturn_raise.setTouchEnabled(true);
                this.Button_otherturn_alwaysbet.setVisible(true);
                this.Button_otherturn_alwaysbet.setTouchEnabled(true);
                break;
            case STATUS_BUTTON_MYTURN://等待
                this.Panel_myturn.setVisible(true);

                this.Button_mine_fold.setVisible(true);
                this.Button_mine_fold.setTouchEnabled(true);
                this.Button_mine_pk.setVisible(true);
                this.Button_mine_pk.setTouchEnabled(true);
                this.Button_mine_raise.setVisible(true);
                this.Button_mine_raise.setTouchEnabled(true);
                this.Button_mine_call.setVisible(true)
                this.Button_mine_call.setTouchEnabled(true)
                if(this.CanRaise){
                    this.Button_mine_raise.setTouchEnabled(false)
                    this.Button_mine_raise.setOpacity(ALPHA_CAN_NOT_TOUCH)
                    this.Image_mine_raise.setOpacity(ALPHA_CAN_NOT_TOUCH)
                }else{
                    this.Button_mine_raise.setOpacity(ALPHA_CAN_TOUCH)
                    this.Image_mine_raise.setOpacity(ALPHA_CAN_TOUCH)
                }
                break;
            case STATUS_BUTTON_RAISE://等待
                this.Panel_raise.setVisible(true)

                this.Button_raise_one.setVisible(true)
                this.Button_raise_one.setTouchEnabled(true)
                this.Button_raise_two.setVisible(true)
                this.Button_raise_two.setTouchEnabled(true)
                this.Button_raise_three.setVisible(true)
                this.Button_raise_three.setTouchEnabled(true)
                this.Button_raise_cancel.setVisible(true)
                this.Button_raise_cancel.setTouchEnabled(true)
                break;
            case STATUS_BUTTON_ALLIN:
                this.Panel_allin.setVisible(true)

                this.Button_allin_fold.setVisible(true)
                this.Button_allin_fold.setTouchEnabled(true)
                this.Button_allin_pk.setVisible(true)
                this.Button_allin_pk.setTouchEnabled(true)
                this.Button_allin_allin.setVisible(true)
                this.Button_allin_allin.setTouchEnabled(true)
                this.Button_allin_call.setVisible(true)
                this.Button_allin_call.setTouchEnabled(true)
                break;
            case STATUS_BUTTON_CANPK:
                this.Panel_canpk.setVisible(true)

                this.Button_canpk_fold.setVisible(true)
                this.Button_canpk_fold.setTouchEnabled(true)
                this.Button_canpk_pk.setVisible(true)
                this.Button_canpk_pk.setTouchEnabled(true)
                this.Button_canpk_raise.setVisible(true)
                this.Button_canpk_raise.setTouchEnabled(true)
                this.Button_canpk_call.setVisible(true)
                this.Button_canpk_call.setTouchEnabled(true)
                if(this.CanRaise){
                    this.Button_canpk_raise.setTouchEnabled(false)
                    this.Button_canpk_raise.setOpacity(ALPHA_CAN_NOT_TOUCH)
                    this.Image_canpk_raise.setOpacity(ALPHA_CAN_NOT_TOUCH)
                }else{
                    this.Button_canpk_raise.setOpacity(ALPHA_CAN_TOUCH)
                    this.Image_canpk_raise.setOpacity(ALPHA_CAN_TOUCH)
                }
                break;
            case STATUS_BUTTON_GUIDE_ONLY_CHECK:
                //Todo:JinHuaTableCheckButton.setSpriteVisible(true)

                this.Panel_wait.setVisible(true);

                this.Button_wait_fold.setVisible(true);
                this.Button_wait_fold.setTouchEnabled(true);
                this.Button_wait_pk.setVisible(true);
                this.Button_wait_pk.setTouchEnabled(true);
                this.Button_wait_raise.setVisible(true);
                this.Button_wait_raise.setTouchEnabled(true);
                this.Button_wait_alwaysbet.setVisible(true);
                this.Button_wait_alwaysbet.setTouchEnabled(true);
                break;
            case STATUS_BUTTON_GUIDE_ONLY_RAISE:
                this.Panel_onlyraise.setVisible(true);
                this.Button_onlyraise_raise.setTouchEnabled(true);
                break;
            case STATUS_BUTTON_GUIDE_ONLY_CALL:
                this.Panel_onlycall.setVisible(true);
                this.Button_onlycall_call.setTouchEnabled(true);
                break;
            case STATUS_BUTTON_GUIDE_ONLY_PK:
                this.Panel_onlypk.setVisible(true);
                this.Button_onlypk_pk.setTouchEnabled(true);
                break;
        }
        //Todo:
//        if GameConfig.GAME_ID == GameConfig.JINHUA_GAME_ID then
//        if UserGuideUtil.isUserGuide == false then
//        if buttonCheckIsShow == false then
//        JinHuaTableCheckButton.setSpriteVisible(false)
//        else
//        JinHuaTableCheckButton.setSpriteVisible(true)
//        end
//        end
//        else
//        if buttonCheckIsShow == false then
//        JinHuaTableCheckButton.setSpriteVisible(false)
//        else
//        JinHuaTableCheckButton.setSpriteVisible(true)
//        end
//        end
    },
    //隐藏所有下排操作按钮极其点击效果
    hideAllBotButton:function(){
        this.Panel_wait.setVisible(false);
        this.Panel_otherturn.setVisible(false);
        this.Panel_myturn.setVisible(false);
        this.Panel_raise.setVisible(false);
        this.Panel_allin.setVisible(false);
        this.Panel_onlyraise.setVisible(false);
        this.Panel_onlycall.setVisible(false);
        this.Panel_onlypk.setVisible(false);
        this.Panel_canpk.setVisible(false);

        this.Button_wait_fold.setVisible(false);
        this.Button_wait_fold.setTouchEnabled(false);
        this.Button_wait_pk.setVisible(false);
        this.Button_wait_pk.setTouchEnabled(false);
        this.Button_wait_raise.setVisible(false);
        this.Button_wait_raise.setTouchEnabled(false);
        this.Button_wait_alwaysbet.setVisible(false);
        this.Button_wait_alwaysbet.setTouchEnabled(false);

        this.Button_otherturn_fold.setVisible(false);
        this.Button_otherturn_fold.setTouchEnabled(false);
        this.Button_otherturn_pk.setVisible(false);
        this.Button_otherturn_pk.setTouchEnabled(false);
        this.Button_otherturn_raise.setVisible(false);
        this.Button_otherturn_raise.setTouchEnabled(false);
        this.Button_otherturn_alwaysbet.setVisible(false);
        this.Button_otherturn_alwaysbet.setTouchEnabled(false);

        this.Button_mine_fold.setVisible(false);
        this.Button_mine_fold.setTouchEnabled(false);
        this.Button_mine_pk.setVisible(false);
        this.Button_mine_pk.setTouchEnabled(false);
        this.Button_mine_raise.setVisible(false);
        this.Button_mine_raise.setTouchEnabled(false);
        this.Button_mine_call.setVisible(false);
        this.Button_mine_call.setTouchEnabled(false);

        this.Button_raise_one.setVisible(false);
        this.Button_raise_one.setTouchEnabled(false);
        this.Button_raise_two.setVisible(false);
        this.Button_raise_two.setTouchEnabled(false);
        this.Button_raise_three.setVisible(false);
        this.Button_raise_three.setTouchEnabled(false);
        this.Button_raise_cancel.setVisible(false);
        this.Button_raise_cancel.setTouchEnabled(false);

        this.Button_allin_fold.setVisible(false);
        this.Button_allin_fold.setTouchEnabled(false);
        this.Button_allin_pk.setVisible(false);
        this.Button_allin_pk.setTouchEnabled(false);
        this.Button_allin_allin.setVisible(false);
        this.Button_allin_allin.setTouchEnabled(false);
        this.Button_allin_call.setVisible(false);
        this.Button_allin_call.setTouchEnabled(false);

        this.Button_onlyraise_raise.setTouchEnabled(false)
        this.Button_onlycall_call.setTouchEnabled(false);
        this.Button_onlypk_pk.setTouchEnabled(false);

        this.Button_canpk_fold.setVisible(false);
        this.Button_canpk_fold.setTouchEnabled(false);
        this.Button_canpk_pk.setVisible(false);
        this.Button_canpk_pk.setTouchEnabled(false);
        this.Button_canpk_raise.setVisible(false);
        this.Button_canpk_raise.setTouchEnabled(false);
        this.Button_canpk_call.setVisible(false);
        this.Button_canpk_call.setTouchEnabled(false);
    },
    //准备
    onReady:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        if(GameData.status== STATUS_TABLE_READY||GameData.status== STATUS_TABLE_WAITTING){
            //发送准备请求
            sendJHID_READY();
        }
    },
    //当前宝盒进度
    updateJHID_GET_BAOHE_STEP_INFO:function(){
        var BaoheStepInfoTable = Profile_JinHuaOnlineReward.getBaoheStepInfoTable()
        var GameData= Profile_JinHuaGameData.getGameData();
        if(BaoheStepInfoTable["nowNumberMax"]== null||BaoheStepInfoTable["nowNumberMax"]== 0|| GameData.mySSID){
            this.btn_onlinebonus.setVisible(false);
            this.btn_onlinebonus.setTouchEnabled(false);
            return;
        }
        this.btn_onlinebonus.setVisible(true);
        this.btn_onlinebonus.setTouchEnabled(true);
        this.Label_onlinebonus_daojishi.setText(BaoheStepInfoTable["nowNumber"]+ "/" +BaoheStepInfoTable["nowNumberMax"])
        if(BaoheStepInfoTable["nowNumber"] >= BaoheStepInfoTable["nowNumberMax"]){
            this.canGetOnlinebonus = 0;
            this.Label_onlinebonus_daojishi.setVisible(false);
            this.Image_onlinebonus_lingqu.setVisible(true);
            this.Image_onlinebonus_shine.setVisible(true);
            this.btn_onlinebonus.stopAllActions();
            GamePub.showShakeAnimate(this.btn_onlinebonus);
        }else{
            this.canGetOnlinebonus = BaoheStepInfoTable["nowNumberMax"] - BaoheStepInfoTable["nowNumber"]
        }
        this.IncrBaoheRound = BaoheStepInfoTable["IncrBaoheRound"]
    },
    //在线礼包
    onLineBonus:function(){
        if(this.canGetOnlinebonus== 0){
            sendJHID_GET_ONLINE_REWARD();
        }else{
            if(this.IncrBaoheRound== null||this.IncrBaoheRound== 0){
                Common.showToast("亲，再打" + this.canGetOnlinebonus + "盘才能打开金币福袋哦！",3);
            }else{
                Common.showToast("亲，再打" + this.canGetOnlinebonus + "盘才能打开金币福袋哦！(" + this.IncrBaoheRound + "轮以上算一局)",3)
            }
        }
    },
    //牌桌领取在线时长奖励
    updateJHID_GET_ONLINE_REWARD:function(){
        var JinGetOnlineRewardTable = Profile_JinHuaOnlineReward.getGetOnlineRewardTable();
        if(JinGetOnlineRewardTable== null|| JinGetOnlineRewardTable["result"]== null){
            Common.showToast("领取奖励出错",2);
            return;
        }

        if(JinGetOnlineRewardTable["result"] == 1){
            //领取在线时长奖励成功
            this.btn_onlinebonus.stopAllActions();
            this.btn_onlinebonus.setRotation(0);
            this.Label_onlinebonus_daojishi.setVisible(true);
            this.Image_onlinebonus_shine.setVisible(false);
            this.Image_onlinebonus_lingqu.setVisible(false);
            Common.showToast(JinGetOnlineRewardTable["message"],3);
            if(JinGetOnlineRewardTable["nowNumberMax"]!= null&&JinGetOnlineRewardTable["nowNumberMax"]!= 0){
                this.canGetOnlinebonus = JinGetOnlineRewardTable["nowNumberMax"] - JinGetOnlineRewardTable["nowNumber"]
                this.btn_onlinebonus.setVisible(true);
                this.btn_onlinebonus.setTouchEnabled(true);
                this.Label_onlinebonus_daojishi.setText(JinGetOnlineRewardTable["nowNumber"] + "/" +JinGetOnlineRewardTable["nowNumberMax"]);
            }else{
                this.btn_onlinebonus.setVisible(false);
                this.btn_onlinebonus.setTouchEnabled(false);
            }
            //设置我当前的金币
            var playerTable = Profile_JinHuaGameData.getPlayers();
            var GameData= Profile_JinHuaGameData.getGameData();
            for(var key in playerTable){
                if(playerTable[key]!= null
                    &&playerTable[key].userId!= null
                    &&playerTable[key].userId == GameData["players"][key].userId == profile_user.getSelfUserID()
                    &&GameData.mySSID!= null){
                    playerTable[key].changeCoinNumOnView(JinGetOnlineRewardTable["nowCoin"]);
                }
            }
        }else {
            //领取在线时长奖励失败
            Common.showToast(JinGetOnlineRewardTable["message"], 3)
        }
    },
    /**
     * Func:下注应答
     */
    updateJHID_BET:function(){

    },
    //聊天
    updateJHID_CHAT:function(){
        var chatMsg= Profile_JinHuaGameData.getChatMsg();
        JinHuaTablePlayer.updateTableAfterPlayerChatServerBack(chatMsg);
    },
    //设置坐下按钮是否可用
    setSitButtonEnabled:function(enabled){
        for(var key in this.sitButtonGroup){
            this.sitButtonGroup[key].setEnabled(enabled==undefined?false:enabled);
        }
    },
    //站起
    updateJHID_STAND_UP:function(){
        JinHuaTablePlayer.updateTableAfterStandUpByServer()
    },
    //坐下
    updateJHID_SIT_DOWN:function(){
        JinHuaTablePlayer.updateTableSitDownByServer();
    },
    //隐藏座位
    hideSit:function(CSID){
        var GameData= Profile_JinHuaGameData.getGameData();
        if(!GameData.mySSID){
            this.hideSitButton(CSID);
            JinHuaTableTips.removeSitTip(CSID);
        }
    },
    updateJHID_INIT_CARDS:function(){
        JinHuaTableCard.updateTableAfterSendCardByServer();
    },
    updateDataSendCard:function(){
        this.changeCardRemainTime = 3;
        this.showCard = false;
    },
    //更新是否可以换牌提示
    updateIsCanChangeCardState:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        //轮数变更
    },
    //设置轮到我操作
    //return  如果要开启计时器返回true
    setMyTurnToOperate_ReturnIfNeedMyTimer:function(player){
        //是否<跟到底>
        if(this.isAlwaysBetCoin){
            if(this.betData&&this.betData.callCoin< 0){//All In
                this.onRaiseAll();
            }else{//跟注
                this.onRaise();
            }
        }else if(player.status!= STATUS_PLAYER_DISCARD){//没有弃牌
            if(Profile_JinHuaGameData.getGameData().round>= Profile_JinHuaTableConfig.CAN_PK_ROUND){
                //是否已经超出一定的轮数，可以比牌
                this.showBotButton(STATUS_BUTTON_CANPK);
            }else{
                this.showBotButton(STATUS_BUTTON_MYTURN);
            }

            if(!this.vibrateId){
                //10s之后，震动提醒
                this.vibrateId= setTimeout(this.callback_vibrate, 10000);
                //Todo:执行的按钮的点击事件中，移除
            }
        }else{
            this.showBotButton(STATUS_BUTTON_WAIT);
        }
    },
    //All In
    onRaiseAll:function(){

    },
    //下注
    onRaise:function(){

    },
    //震动提醒
    callback_vibrate:function(){
        console.log("震动提醒");
    },
    //更新我的操作按钮
    updateMyOperationBtns:function(currentPlayer){
        //下注数据
        this.betData= currentPlayer;
        this.updateMyPKAndShowCardBtns();
    },
    // 更新我的pk和开牌按钮
    //比牌按钮  0 不能操作，1 比牌 2 开牌
    updateMyPKAndShowCardBtns:function(){
        if(!this.betData) return;
        if(this.betData.compareCard == 2){//比牌
            this.showCard = true;
            //显示开牌提示
            //JinHuaTableTips.showTipOpenCard();
        }
    }
};

//Todo:大喇叭