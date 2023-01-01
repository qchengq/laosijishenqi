"ui";

importClass(java.net.HttpURLConnection);
importClass(java.net.URL);
importClass(java.io.File);
importClass(java.io.FileOutputStream);
importClass(android.graphics.Color);

var color = "#FF4FB3";

ui.statusBarColor("#FF4FB3")

ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar>
                <toolbar id="toolbar" bg="#ff4fb3" title="老司机神器"/>
                <tabs id="tabs" bg="#ff4fb3ff"/>
            </appbar>
            <viewpager id="viewpager">
            <frame>
                <img src={"https://ghproxy.com/https://raw.githubusercontent.com/qchengq/laosijishenqi/main/5.jpeg" } scaleType="centerCrop" alpha="0.55" />
                  {/*  <vertical>  */}
                        <vertical gravity="center" layout_weight="1">
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="无障碍服务" textColor="#4B0082" textSize="16sp" maxLines="1" />
                                    </vertical>
                                    <checkbox id="autoService" marginLeft="4" marginRight="6" checked="{{auto.service != null}}" />
                                </horizontal>
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="悬浮窗权限" textColor="#4B0082" textSize="16sp" maxLines="1" />
                                    </vertical>
                                    <checkbox id="consoleshow" marginLeft="4" marginRight="6" checked="{{floaty.checkPermission()}}" />
                                </horizontal>
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="音量上键可以停止所有脚本运行" textColor="#4B0082" textSize="16sp" maxLines="1" />
                                    </vertical>
                                </horizontal>
                                <horizontal gravity="center_vertical">
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <button h="5" layout_gravity="center" id="update" textSize="18sp" />
                                    <button id="start" text="开 始 学 习" textSize="25sp" color="#FFFF00" bg="#CC3399" />
                                </vertical>
                                </horizontal>   
                            </vertical>

                </frame>
                    <frame>
                    <img src={"https://ghproxy.com/https://raw.githubusercontent.com/qchengq/laosijishenqi/main/6.jpeg" } scaleType="centerCrop" alpha="0.55" />
                    <ScrollView>
                        <vertical id="lsj" gravity="center">
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="滑动验证的滑动时间(ms)" />
                                </vertical> 
                                <input id="lsj_slide_verify" marginLeft="4" marginRight="6" text="300" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="专项答题" />
                                    <spinner id="lsj_zhuanxiang" marginLeft="4" marginRight="6" entries="倒序答题|正序答题|不做" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="ocr识别跳过阈值(ms)" />
                                </vertical> 
                                <input id="lsj_ocr_maxtime" marginLeft="4" marginRight="6" text="1500" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="订阅" />
                                    <spinner id="lsj_dingyue" marginLeft="4" marginRight="6" entries="不做|正序订阅|只订阅年度上新" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="pushplus_token(微信推送)" />
                                    <input id="lsj_pushplus" text="" textSize="13sp" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="多账号(选填，最多3个)" />
                                    <input id="lsj_zhanghao" text="" textSize="13sp" />
                                </vertical> 
                            </horizontal>
                            <horizontal  w="auto"   gravity="center" marginTop="10" > 
                                <button style="Widget.AppCompat.Button.Colored" id="lsj_save" text="保存配置" padding="12dp" w="*" alpha="0.55" />
                                <button style="Widget.AppCompat.Button.Colored" id="lsj_reset" text="恢复默认" padding="12dp" w="*" alpha="0.55" />
                            </horizontal>
                        </vertical>
                        </ScrollView>
                    </frame>
            </viewpager>
        </vertical>
    </drawer>
);


http.__okhttp__.setTimeout(10000);
//标签名
// 设置滑动页面的标题
ui.viewpager.setTitles(["首页", "配置","方法"]);
// 让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);

//帮助页加载
/* var src = "https://share.weiyun.com/eYzxaBsB";
ui.webview.loadUrl(src);
var src = "https://share.weiyun.com/XBiFrHYj";
ui.webview1.loadUrl(src); */

var GLOBAL_CONFIG = storages.create("GLOBAL_CONFIG");
var LSJ_CONFIG = storages.create("LSJ_CONFIG");
var execution = "";
var thread = null;
Initialize();

// 创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu=>{
    menu.add("日志");
    menu.add("修改强国下载");
});


// 监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item)=>{
    switch(item.getTitle()){
        case "日志":
            app.startActivity("console");
            break;
        case "修改强国下载":
            app.openUrl("https://www.123pan.com/s/g3e0Vv-Ve08H");
            break;                             
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);

GLOBAL_CONFIG.put("script_chosen", 0);//在xxqg文件中，选择启动指定脚本

// 用户勾选无障碍服务的选项时，跳转到页面让用户去开启 
// android.permission.SYSTEM_ALERT_WINDOW
ui.autoService.on("check", function (checked) {
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});

// 悬浮窗权限
ui.consoleshow.on("check", function (checked) {
    if (checked && !floaty.checkPermission()) {
        app.startActivity({
            packageName: "com.android.settings",
            className: "com.android.settings.Settings$AppDrawOverlaySettingsActivity",
            data: "package:" + context.getPackageName(),
        });
    }
});
 
// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
    ui.consoleshow.checked = floaty.checkPermission();
});

// 下载并运行脚本
ui.start.click(function () {
    threads.shutDownAll();
    if (thread != null && thread.isAlive()) {
        alert("注意", "脚本正在运行，请结束之前进程");
        return;
    }
    threads.start(function () {
        toastLog("脚本加载中，请稍后...")
        var link = "https://ghproxy.com/https://raw.githubusercontent.com/qchengq/laosijishenqi/main/ziyong/xxqg1.js"
 
        let resc = http.get(link, {
                headers: {   //通过headers修复文件过大网络无法下载
                    "Accept-Language": "zh-cn,zh;q=0.5",
                    "User-Agent": random(0, 17),
                },
                });
            var xxqg = resc.body.string();
            if (resc != 0){} 
        else {
            toastLog('脚本下载失败');
        }
        engines.execScript("老司机神器", xxqg);
        //engines.execScriptFile("./xxqg.js");
    });
});

// 保存老司机神器脚本设置
ui.lsj_save.click(function () {
    LSJ_CONFIG.put("slide_verify", ui.lsj_slide_verify.getText()+"");
    //LSJ_CONFIG.put("meizhou", ui.lsj_meizhou.getSelectedItemPosition());
    LSJ_CONFIG.put("zhuanxiang", ui.lsj_zhuanxiang.getSelectedItemPosition());
    LSJ_CONFIG.put("ocr_maxtime", ui.lsj_ocr_maxtime.getText()+"");
    LSJ_CONFIG.put("dingyue", ui.lsj_dingyue.getSelectedItemPosition());
    LSJ_CONFIG.put("pushplus", ui.lsj_pushplus.getText()+"");
    LSJ_CONFIG.put("zhanghao", ui.lsj_zhanghao.getText()+"");

    toastLog("老司机神器保存成功！");
});

// 重置老司机神器脚本设置
ui.lsj_reset.click(function () {
    LSJ_CONFIG.put("slide_verify", "300");
    ui.lsj_slide_verify.setText(LSJ_CONFIG.get("slide_verify"));
    //LSJ_CONFIG.put("meizhou", 1);
    //ui.lsj_meizhou.setSelection(LSJ_CONFIG.get("meizhou"));
    LSJ_CONFIG.put("zhuanxiang", 1);
    ui.lsj_zhuanxiang.setSelection(LSJ_CONFIG.get("zhuanxiang"));
    LSJ_CONFIG.put("ocr_maxtime", "1500");
    ui.lsj_ocr_maxtime.setText(LSJ_CONFIG.get("ocr_maxtime"));
    LSJ_CONFIG.put("dingyue", 1);
    ui.lsj_dingyue.setSelection(LSJ_CONFIG.get("dingyue"));
    LSJ_CONFIG.put("pushplus", "");
    ui.lsj_pushplus.setText(LSJ_CONFIG.get("pushplus"));
    LSJ_CONFIG.put("zhanghao", "");
    ui.lsj_zhanghao.setText(LSJ_CONFIG.get("zhanghao"));    
    toastLog("老司机神器恢复默认！");
});


// 读取脚本设置
function Initialize() {
    //ui.script_chosen.setSelection(GLOBAL_CONFIG.get("script_chosen", 0));

    ui.lsj_slide_verify.setText(LSJ_CONFIG.get("slide_verify", "300"));
    //ui.lsj_meizhou.setSelection(LSJ_CONFIG.get("meizhou", 1));
    ui.lsj_zhuanxiang.setSelection(LSJ_CONFIG.get("zhuanxiang", 1));
    ui.lsj_ocr_maxtime.setText(LSJ_CONFIG.get("ocr_maxtime", "1500"));
    ui.lsj_dingyue.setSelection(LSJ_CONFIG.get("dingyue", 1));
    ui.lsj_pushplus.setText(LSJ_CONFIG.get("pushplus", ""));
    ui.lsj_zhanghao.setText(LSJ_CONFIG.get("zhanghao", ""));

}

