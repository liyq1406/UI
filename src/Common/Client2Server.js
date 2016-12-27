/**金花**/
function sendJINHUA_MGR_USER_INFO(userID)
{
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage= new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ+ JINHUA_MGR_USER_INFO);

    nmBaseMessage.writeStart();

    //GameID	byte	游戏ID
    nmBaseMessage.writeByte(GAME_ID);
    //userID	Int	查看的玩家id
    nmBaseMessage.writeInt(userID);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//金花VIP等级信息 (JINHUA_MGR_VIP_INFO)
function sendJINHUA_MGR_VIP_INFO(){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_VIP_INFO);
    nmBaseMessage.writeStart();

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//金花在线人数 (JINHUA_MGR_SETTING)
function sendJINHUA_MGR_SETTING(Timestamp){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_SETTING);
    nmBaseMessage.writeStart();
    //GameID	byte	ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);
    //Timestamp	Long	时间戳
    nmBaseMessage.writeLong(Timestamp);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//获取游戏公告JINHUA_MGR_NOTICE
function sendJINHUA_MGR_NOTICE(Timestamp){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_NOTICE);
    nmBaseMessage.writeStart();
    //GameID	byte	ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);
    //Timestamp	Long	时间戳
    nmBaseMessage.writeLong(Timestamp);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//3.46金花背包V2(JINHUA_MGR_BACKPACK_ITEMS_V2）
function sendJINHUA_MGR_BACKPACK_ITEMS_V2(){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_BACKPACK_ITEMS_V2);
    nmBaseMessage.writeStart();

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//保险箱info (JHID_STRONG_BOX_INFO)
function sendJHID_STRONG_BOX_INFO(){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JHID_STRONG_BOX_INFO);
    nmBaseMessage.writeStart();

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//保险箱存钱(JHID_SAVE_TAKE_STRONG_BOX_COIN)
function sendJHID_SAVE_TAKE_STRONG_BOX_COIN(Coin,Type){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JHID_SAVE_TAKE_STRONG_BOX_COIN);
    nmBaseMessage.writeStart();

    nmBaseMessage.writeStart();
    //Coin	Long	单次不能存取太多金币
    nmBaseMessage.writeLong(Coin);
    //Type	Byte	操作类型	1存钱2取钱
    nmBaseMessage.writeByte(Type);
    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}


//扎金花工资面板 (JINHUA_MGR_DAILY_SALARY）
function sendJINHUA_MGR_DAILY_SALARY(){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_DAILY_SALARY);
    nmBaseMessage.writeStart();

    nmBaseMessage.writeStart();
    //游戏ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}
//获取每日工资
function sendJINHUA_MGR_GET_SALARY(){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_GET_SALARY);
    nmBaseMessage.writeStart();

    //游戏ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//获取好友列表
function sendJINHUA_MGR_FRIEND_LIST(){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_FRIEND_LIST);
    nmBaseMessage.writeStart();

    //游戏ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//获取追踪列表(JINHUA_MGR_TRACE_LIST)
function sendJINHUA_MGR_TRACE_LIST(){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_TRACE_LIST);
    nmBaseMessage.writeStart();

    //游戏ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//获取陌生人列表(JINHUA_MGR_STRANGER_LIST)
function sendJINHUA_MGR_STRANGER_LIST(){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_STRANGER_LIST);
    nmBaseMessage.writeStart();

    //游戏ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//领取好友送金
function sendJINHUA_MGR_SIGN_FRIEND_REWARD(userID, index){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_SIGN_FRIEND_REWARD);
    nmBaseMessage.writeStart();

    //userId	好友id
    nmBaseMessage.writeInt(userID);
    //index		好友在列表中的位置
    nmBaseMessage.writeInt(index);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//金花请求破产送金信息(JINHUA_MGR_REVIVE_INFO)
function sendJINHUA_MGR_REVIVE_INFO(){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_REVIVE_INFO);
    nmBaseMessage.writeStart();

    //GameID	byte	ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//金花请求破产送金 (JINHUA_MGR_REVIVE)
function sendJINHUA_MGR_REVIVE(){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_REVIVE);
    nmBaseMessage.writeStart();

    //GameID	byte	ID
    nmBaseMessage.writeByte(GameConfig.GAME_ID);

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//金花玩家登录请求领节日礼物 (JINHUA_MGR_JH_ACTIVITY）
function sendJINHUA_MGR_JH_ACTIVITY(){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_JH_ACTIVITY);
    nmBaseMessage.writeStart();

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}


//扎金花好友是否有红点(JINHUA_MGR_FRIEND_HAVE_REDP)
function sendJINHUA_MGR_FRIEND_HAVE_REDP(){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_FRIEND_HAVE_REDP);
    nmBaseMessage.writeStart();

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//扎金花房间列表
function sendJINHUA_ROOMID_ROOM_LIST(time){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_ROOMID_ROOM_LIST);
    nmBaseMessage.setExtData(3);
    nmBaseMessage.writeStart();

    //TimeStamp  时间戳
    nmBaseMessage.writeLong(time);
    //gameID	Byte	游戏id
    nmBaseMessage.writeByte(GameConfig.GAME_ID);
    //gameVersion	Int	扎金花游戏主版本号
    nmBaseMessage.writeInt(Common.getVersion() + Common.getChannelID());

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//扎金花首充翻倍消息 (JINHUA_MGR_FIRST_RECHARGE_DOUBLE）
function sendJINHUA_MGR_RECHARGE_REBATE_INFO(){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JINHUA_MGR_RECHARGE_REBATE_INFO);
    nmBaseMessage.writeStart();
    //客户端版本号
    nmBaseMessage.writeInt(Common.getVersion() + Common.getChannelID());

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//快速开始
function sendJHID_QUICK_START(){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JHID_QUICK_START);
    nmBaseMessage.setExtData(3);
    nmBaseMessage.writeStart();

    nmBaseMessage.writeByte(GameConfig.GAME_ID);
    nmBaseMessage.writeByte(0);
    //ScriptVerCode	Int	脚本版本号	(游戏版本号+渠道号)
    nmBaseMessage.writeInt(Common.getVersion() + Common.getChannelID());

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}

//进入房间
function sendJHID_ENTER_ROOM(roomID){
    //断网状态
    if(!Network.getInstance().getWebSocketConnecting()) return;

    var nmBaseMessage = new NMBaseMessage();
    nmBaseMessage.setMessageType(REQ + JHID_ENTER_ROOM);
    nmBaseMessage.setExtData(3);
    nmBaseMessage.writeStart();
    //房间ID
    nmBaseMessage.writeInt(roomID);
    nmBaseMessage.writeInt(-1);
    nmBaseMessage.writeByte(GameConfig.GAME_ID);
    nmBaseMessage.writeByte(0);
    //ScriptVerCode	Int	脚本版本号	(游戏版本号+渠道号)
    nmBaseMessage.writeInt(Common.getVersion() + Common.getChannelID());

    nmBaseMessage.writeOver();

    Network.getInstance().sendMessage(nmBaseMessage);

    delete nmBaseMessage;
}