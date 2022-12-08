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
                <toolbar id="toolbar" bg="#ff4fb3ff" title="老司机神器助手"/>
                <tabs id="tabs" bg="#ff4fb3ff"/>
            </appbar>
            <viewpager id="viewpager">
                <frame>
                <img src={"https://ghproxy.com/https://raw.githubusercontent.com/qchengq/laosijishenqi/main/5.jpeg" } scaleType="centerCrop" alpha="0.55" />
                    <vertical>
                        <vertical gravity="center" layout_weight="1">
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text text="作者：老司机 " textColor="#990000" textSize="16sp" maxLines="1" />
                                        <text text="此软件需要专属修改版强国,专为苹果IOS云手机用户定制" textColor="#EE00EE" textSize="12sp" maxLines="1" />
                                        <text text="此软件不得随意外传，否则远程直接停用" textColor="#EE00EE" textSize="12sp" maxLines="1" />  
                                        <text text="使用方法在方法栏查看" textColor="#EE00EE" textSize="12sp" maxLines="1" />  
                                        <text text="修改版强国在左上角三个横杠处，下载2.23改版本" textColor="#EE00EE" textSize="12sp" maxLines="1" />                                     
                                    </vertical>
                                </horizontal>
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="无障碍服务" textColor="#4B0082" textSize="16sp" maxLines="1" />
                                        <text text="此功能云手机自动开启" textColor="#008B00" textSize="14sp" maxLines="1" />
                                    </vertical>
                                    <checkbox id="autoService" marginLeft="4" marginRight="6" checked="{{auto.service != null}}" />
                                </horizontal>
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="悬浮窗权限" textColor="#4B0082" textSize="16sp" maxLines="1" />
                                        <text text="此功能云手机自动开启" textColor="#008B00" textSize="14sp" maxLines="1" />
                                    </vertical>
                                    <checkbox id="consoleshow" marginLeft="4" marginRight="6" checked="{{floaty.checkPermission()}}" />
                                </horizontal>
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="音量上键可以停止所有脚本运行" textColor="#4B0082" textSize="16sp" maxLines="1" />
                                        <text text="建议自行调试，不会需本人调试，将一对一收费服务" textColor="#008B00" textSize="14sp" maxLines="1" />
                                    </vertical>
                                </horizontal>
                        </vertical>
                                <horizontal gravity="center_vertical">
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <button h="50" layout_gravity="center" id="update" textSize="18sp" />
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
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="空着或0不开启自动滑动验证，滑动分3段" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="中间会折返一下，总时间是填的数值*3" />
                                </vertical> 
                                <input id="lsj_slide_verify" marginLeft="4" marginRight="6" text="300" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="每周答题" />
                                    <spinner id="lsj_meizhou" marginLeft="4" marginRight="6" entries="最近一次已作答开始倒序|正序答题|不做" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="专项答题" />
                                    <spinner id="lsj_zhuanxiang" marginLeft="4" marginRight="6" entries="最近一次已作答开始倒序|正序答题|不做" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="ocr识别跳过阈值(ms)" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="空着或0默认5000，超过此时间会跳过多人对战" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="建议按照平时正常的ocr识别时间设置" />
                                </vertical> 
                                <input id="lsj_ocr_maxtime" marginLeft="4" marginRight="6" text="1500" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="订阅" />
                                    <spinner id="lsj_dingyue" marginLeft="4" marginRight="6" entries="不做|正序订阅|只订阅年度上新" />
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
        <vertical layout_gravity="left" bg="#ffffff" w="280">
            <img w="280" h="200" scaleType="fitXY" src="https://ghproxy.com/https://raw.githubusercontent.com/qchengq/laosijishenqi/main/10.jpeg"/>
            <list id="menu">
                <horizontal bg="?selectableItemBackground" w="*">
                    <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}"/>
                    <text textColor="black" textSize="15sp" text="{{this.title}}" layout_gravity="center"/>
                </horizontal>
            </list>
        </vertical>
    </drawer>
);

ui.update.visibility = 8;

http.__okhttp__.setTimeout(10000);

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

// 设置滑动页面的标题
ui.viewpager.setTitles(["首页", "脚本配置"]);
// 让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);

// 脚本选择监听
GLOBAL_CONFIG.put("script_chosen", 0);

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

// 打开日志
ui.log.click(function () {
    app.startActivity("console");
});


// 下载并运行所选脚本
ui.start.click(function () {
    threads.shutDownAll();
    if (thread != null && thread.isAlive()) {
        alert("注意", "脚本正在运行，请结束之前进程");
        return;
    }
    threads.start(function () {
        toastLog("脚本加载中，请稍后...")
        var link = "https://ghproxy.com/https://raw.githubusercontent.com/qchengq/laosijishenqi/main/xxqg.js"
 
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
    LSJ_CONFIG.put("meizhou", ui.lsj_meizhou.getSelectedItemPosition());
    LSJ_CONFIG.put("zhuanxiang", ui.lsj_zhuanxiang.getSelectedItemPosition());
    LSJ_CONFIG.put("ocr_maxtime", ui.lsj_ocr_maxtime.getText()+"");
    LSJ_CONFIG.put("dingyue", ui.lsj_dingyue.getSelectedItemPosition());

    toastLog("老司机神器配置保存成功！");
});

// 重置老司机神器脚本设置
ui.lsj_reset.click(function () {
    LSJ_CONFIG.put("slide_verify", "300");
    ui.lsj_slide_verify.setText(LSJ_CONFIG.get("slide_verify"));
    LSJ_CONFIG.put("meizhou", 1);
    ui.lsj_meizhou.setSelection(LSJ_CONFIG.get("meizhou"));
    LSJ_CONFIG.put("zhuanxiang", 1);
    ui.lsj_zhuanxiang.setSelection(LSJ_CONFIG.get("zhuanxiang"));
    LSJ_CONFIG.put("ocr_maxtime", "1500");
    ui.lsj_ocr_maxtime.setText(LSJ_CONFIG.get("ocr_maxtime"));
    LSJ_CONFIG.put("dingyue", 1);
    ui.lsj_dingyue.setSelection(LSJ_CONFIG.get("dingyue"));

    toastLog("老司机神器配置恢复默认！");
});


// 读取脚本设置
function Initialize() {
    ui.script_chosen.setSelection(GLOBAL_CONFIG.get("script_chosen", 0));

    ui.lsj_slide_verify.setText(LSJ_CONFIG.get("slide_verify", "300"));
    ui.lsj_meizhou.setSelection(LSJ_CONFIG.get("meizhou", 1));
    ui.lsj_zhuanxiang.setSelection(LSJ_CONFIG.get("zhuanxiang", 1));
    ui.lsj_ocr_maxtime.setText(LSJ_CONFIG.get("ocr_maxtime", "1500"));
    ui.lsj_dingyue.setSelection(LSJ_CONFIG.get("dingyue", 1));


}



//让工具栏左上角可以打开侧拉菜单
ui.toolbar.setupWithDrawer(ui.drawer);

ui.menu.setDataSource([
  {
      title: "安卓手机学习教程",
      icon: "@drawable/ic_android_black_48dp"
  },
  {
      title: "苹果云手机学习教程",
      icon: "@drawable/ic_settings_black_48dp"
  },
  {
      title: "更新日志",
      icon: "@drawable/ic_favorite_black_48dp"
  },
  {
    title: "老司机神器苹果云手机版下载地址",
    icon: "@drawable/ic_android_black_48dp"
},
/* {
    title: "强国2.19改下载地址",
    icon: "@drawable/ic_settings_black_48dp"
}, */
{
    title: "强国2.23改下载地址",
    icon: "@drawable/ic_favorite_black_48dp"
},
{
      title: "退出软件",
      icon: "@drawable/ic_exit_to_app_black_48dp"
  }
]);

ui.menu.on("item_click", item => {
    switch(item.title){
        case "安卓手机学习教程":
            app.openUrl("https://share.weiyun.com/eYzxaBsB");
            break;
    }
})

ui.menu.on("item_click", item => {
    switch(item.title){
        case "苹果云手机学习教程":
            app.openUrl("https://share.weiyun.com/4OMnhObg");
            break;
    }
})

ui.menu.on("item_click", item => {
    switch(item.title){
        case "更新日志":
            app.openUrl("https://share.weiyun.com/XBiFrHYj");
            break;
    }
})

ui.menu.on("item_click", item => {
    switch(item.title){
        case "老司机神器苹果云手机版下载地址":
            app.openUrl("https://65444.lanzoue.com/izh7A0hcpbwd");
            break;
    }
})

/* ui.menu.on("item_click", item => {
    switch(item.title){
        case "强国2.19改下载地址":
            app.openUrl("https://www.123pan.com/s/g3e0Vv-Fq08H");
            break;
    }
})
 */
ui.menu.on("item_click", item => {
    switch(item.title){
        case "强国2.23改下载地址":
            app.openUrl("https://www.123pan.com/s/g3e0Vv-gq08H");
            break;
    }
})


ui.menu.on("item_click", item => {
    switch(item.title){
        case "退出软件":
            ui.finish();
            break;
    }
})
