"ui";

importClass(java.net.HttpURLConnection);
importClass(java.net.URL);
importClass(java.io.File);
importClass(java.io.FileOutputStream);
importClass(android.graphics.Color);

var color = "#FF4FB3FF";

ui.statusBarColor("#FF4FB3FF")

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
                    {/* <vertical> */}
                        <vertical gravity="center" layout_weight="1">
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="脚本选择" textColor="#222222" textSize="16sp" maxLines="1" />
                                        <text text="切换脚本后需在配置页设置" textColor="#999999" textSize="14sp" maxLines="1" />
                                    </vertical>
                                    <spinner id="script_chosen" marginLeft="4" marginRight="6" entries="老司机神器|挑战双四人|老司机无限挑战" />
                                </horizontal>
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text text="作者：老司机 " textColor="#990000" textSize="16sp" maxLines="1" />
                                        <text text="联系QQ：807397510" textColor="#EE00EE" textSize="12sp" maxLines="1" />
                                        <text text="联系微信：xuexilaosiji" textColor="#EE00EE" textSize="12sp" maxLines="1" />                                      
                                    </vertical>
                                </horizontal>
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="无障碍服务" textColor="#222222" textSize="16sp" maxLines="1" />
                                        <text text="请确保开启" textColor="#999999" textSize="14sp" maxLines="1" />
                                    </vertical>
                                    <checkbox id="autoService" marginLeft="4" marginRight="6" checked="{{auto.service != null}}" />
                                </horizontal>
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="悬浮窗权限" textColor="#222222" textSize="16sp" maxLines="1" />
                                        <text text="请确保开启" textColor="#999999" textSize="14sp" maxLines="1" />
                                    </vertical>
                                    <checkbox id="consoleshow" marginLeft="4" marginRight="6" checked="{{floaty.checkPermission()}}" />
                                </horizontal>
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="音量上键可以停止所有脚本运行" textColor="#222222" textSize="16sp" maxLines="1" />
                                    </vertical>
                                </horizontal>
                                <horizontal gravity="center_vertical">
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <button h="50" layout_gravity="center" id="join_QQ" textSize="18sp" text="QQ群" color="#FF0033" bg="#996600" />
                                    <button h="50" layout_gravity="center" id="log" textSize="18sp" text="查看日志" color="#339933" bg="#FF6666" />
                                    <button h="50" layout_gravity="center" id="update" textSize="18sp" />
                                    <button id="start" text="开 始 学 习" textSize="25sp" color="#FFFF00" bg="#CC3399" />

                                </vertical>
                                </horizontal>
                        </vertical>
{/*                         <button h="60" layout_gravity="center" id="join_QQ" textSize="18sp" text="QQ群" color="#FF0033" bg="#996600" />
                        <button h="60" layout_gravity="center" id="log" textSize="18sp" text="查看日志" color="#339933" bg="#FF6666" />
                        <button h="60" layout_gravity="center" id="update" textSize="18sp" />
                        <button id="start" text="开 始 学 习" textSize="25sp" color="#FFFF00" bg="#CC3399" foreground="?selectableItemBackground"/> */}
                     {/* </vertical> */}
                </frame>
                    <frame>
                    <img src={"https://ghproxy.com/https://raw.githubusercontent.com/qchengq/laosijishenqi/main/6.jpeg" } scaleType="centerCrop" alpha="0.55" />
                        <vertical id="lsj" gravity="center_vertical" marginBottom="10" >
                        <horizontal gravity="center_vertical">
                                    <vertical padding="5 5 5 5" h="auto" w="0" layout_weight="1">                                    
                                        <text text="此软件需要专属修改版强国，在右上角三个点下载" textColor="#EE00EE" textSize="12sp" maxLines="1" />
                                        <text text="使用方法在方法栏查看" textColor="#EE00EE" textSize="12sp" maxLines="1" />  
                                        <text text="适配安卓7-11和鸿蒙1-2，安卓12-13和鸿蒙3需使用虚拟机学习" textColor="#EE00EE" textSize="12sp" maxLines="1" />                                     
                                    </vertical>
                                </horizontal>    
                        <horizontal  gravity="center_vertical" padding="1 1" >
                                <vertical padding="5 5 5 5" h="auto" w="0" layout_weight="0.5">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="滑动验证的滑动时间(ms)" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="空着或0不开启自动滑动验证，滑动分3段" />
                                </vertical> 
                                <input id="lsj_slide_verify" marginLeft="4" marginRight="6" text="300" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="1 1" >
                                <vertical padding="5 5 5 5" h="auto" w="0" layout_weight="0.5">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="每周答题" />
                                    <spinner id="lsj_meizhou" marginLeft="4" marginRight="6" entries="最近一次已作答开始倒序|正序答题|不做" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="1 1" >
                                <vertical padding="5 5 5 5" h="auto" w="0" layout_weight="0.5">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="专项答题" />
                                    <spinner id="lsj_zhuanxiang" marginLeft="4" marginRight="6" entries="最近一次已作答开始倒序|正序答题|不做" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="1 1" >
                                <vertical padding="5 5 5 5" h="auto" w="0" layout_weight="0.5">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="ocr识别跳过阈值(ms)" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="空着或0默认5000，超过此时间会跳过多人对战" />
                                </vertical> 
                                <input id="lsj_ocr_maxtime" marginLeft="4" marginRight="6" text="1500" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="1 1" >
                                <vertical padding="5 5 5 5" h="auto" w="0" layout_weight="0.5">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="订阅" />
                                    <spinner id="lsj_dingyue" marginLeft="4" marginRight="6" entries="不做|正序订阅|只订阅年度上新" />
                                </vertical> 
                            </horizontal>
                            <horizontal  >
                                <button style="Widget.AppCompat.Button.Colored" id="lsj_save" text="保存配置" padding="12dp" w="*" />
                            </horizontal>
                            <horizontal  >
                                <button style="Widget.AppCompat.Button.Colored" id="lsj_reset" text="恢复默认" padding="12dp" w="*" />
                            </horizontal>
                        </vertical>
                        <vertical id="lsjauto" gravity="center">
                        <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="此软件需要专属修改版强国，在右上角三个点下载" textColor="#EE00EE" textSize="12sp" maxLines="1" />
                                        <text text="开启后会自动进入学习" textColor="#EE00EE" textSize="12sp" maxLines="1" />  
                                        <text text="答题完成后会自动退出" textColor="#EE00EE" textSize="12sp" maxLines="1" />  
                                        <text text="并不能保证每次胜利，介意勿用" textColor="#EE00EE" textSize="12sp" maxLines="1" />                                     
                                        <text text="全程学习需使用老司机神器" textColor="#EE00EE" textSize="12sp" maxLines="1" />                                    
                                    </vertical>
                                </horizontal>
                                <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="滑动验证的滑动时间(ms)" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="空着或0不开启自动滑动验证，滑动分3段" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="中间会折返一下，总时间是填的数值*3" />
                                </vertical> 
                                <input id="lsjauto_slide_verify" marginLeft="4" marginRight="6" text="300" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="ocr识别跳过阈值(ms)" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="空着或0默认5000，超过此时间会跳过多人对战" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="建议按照平时正常的ocr识别时间设置" />
                                </vertical> 
                                <input id="lsjauto_ocr_maxtime" marginLeft="4" marginRight="6" text="1500" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="lsjauto_save" text="保存配置" padding="12dp" w="*" />
                            </horizontal>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="lsjauto_reset" text="恢复默认" padding="12dp" w="*" />
                            </horizontal>
                        </vertical>
                        <vertical id="wxtz" gravity="top">
                        <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="此软件需要专属修改版强国，在右上角三个点下载" textColor="#EE00EE" textSize="12sp" maxLines="1" />
                                        <text text="开启无限挑战后需手动进入挑战答题界面" textColor="#EE00EE" textSize="12sp" maxLines="1" />  
                                        <text text="进入答题界面后会自动进行答题模式" textColor="#EE00EE" textSize="12sp" maxLines="1" />  
                                        <text text="题库问题并不能保证答全部答完，错误后会自动重新开始" textColor="#EE00EE" textSize="12sp" maxLines="1" /> 
                                        <text text="此功能无悬浮窗，不可重复点击开始学习，点一次就手动进入" textColor="#EE00EE" textSize="12sp" maxLines="1" />                                                                  
                                    </vertical>
                                </horizontal>
{/*                             <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="挑战模式" />
                                    <spinner id="lsj_wxtz" marginLeft="4" marginRight="6" entries="Server|Json" />
                                </vertical> 
                            </horizontal>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="wxtz_save" text="保存配置" padding="12dp" w="*" />
                            </horizontal>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="wxtz_reset" text="恢复默认" padding="12dp" w="*" />
                            </horizontal> */}
                        </vertical>
                    </frame>
                <frame>
                    <webview id="webview" h="*" w="auto" />
                </frame>
                <frame>
                    <webview id="webview1" h="*" w="auto" />
                </frame>
            </viewpager>
        </vertical>
    </drawer>
);

ui.update.visibility = 8;

http.__okhttp__.setTimeout(10000);


var GLOBAL_CONFIG = storages.create("GLOBAL_CONFIG");
var LSJ_CONFIG = storages.create("LSJ_CONFIG");
var LSJAUTO_CONFIG = storages.create("LSJAUTO_CONFIG");
var WXTZ_CONFIG = storages.create("WXTZ_CONFIG");
var BAIDUAPI = storages.create("BAIDUAPI");
var execution = "";
var thread = null;
Initialize();

//一键加qq群
ui.join_QQ.click(function() {
    // threads.start(加群)
    //加群(qq群号);
    var qq群号 = 909303199;
    //加群(qq群号);
    app.startActivity({
        action: "android.intent.action.VIEW",
        data: "mqqapi://card/show_pslcard?card_type=group&uin=" + qq群号,
        packageName: "com.tencent.mobileqq",
    }); //打开qq群名片
})

//帮助页加载
var src = "https://share.weiyun.com/eYzxaBsB";
ui.webview.loadUrl(src);
var src = "https://share.weiyun.com/XBiFrHYj";
ui.webview1.loadUrl(src);

// 创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu=>{
    menu.add("日志");
    menu.add("修改强国下载");
    menu.add("联系QQ");
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
        case "联系QQ":
            alert("联系QQ", "807397510");
            break;                                
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);

// 设置滑动页面的标题
ui.viewpager.setTitles(["首页", "脚本配置","方法","更新说明"]);
// 让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);

// 脚本选择监听
var script_chosen_Listener = new android.widget.AdapterView.OnItemSelectedListener({
    onItemSelected: function (parent, view, position, id) {
        toastLog('选择脚本：' + ui.script_chosen.getSelectedItem());
        if (ui.script_chosen.getSelectedItemPosition() == 0) {
            ui.lsjauto.visibility = 8;
            ui.wxtz.visibility = 8;
            ui.lsj.visibility = 0;
        }
        else if (ui.script_chosen.getSelectedItemPosition() == 1) {
            ui.lsj.visibility = 8;
            ui.wxtz.visibility = 8;
            ui.lsjauto.visibility = 0;
        }
        else if (ui.script_chosen.getSelectedItemPosition() == 2) {
            ui.lsj.visibility = 8;
            ui.lsjauto.visibility = 8;
            ui.wxtz.visibility = 0;
        }
        GLOBAL_CONFIG.put("script_chosen", ui.script_chosen.getSelectedItemPosition());
    }
})
ui.script_chosen.setOnItemSelectedListener(script_chosen_Listener);

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
        let url = 'https://ghproxy.com/https://raw.githubusercontent.com/qchengq/laosijishenqi/main/'+ui.script_chosen.getSelectedItemPosition()+'.js';
        execution = engines.execScript("老司机助手", http.get(url).body.string());
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

// 保存挑双四脚本设置
ui.lsjauto_save.click(function () {
    LSJAUTO_CONFIG.put("slide_verify", ui.lsjauto_slide_verify.getText()+"");
    LSJAUTO_CONFIG.put("ocr_maxtime", ui.lsjauto_ocr_maxtime.getText()+"");

    toastLog("老司机神器配置保存成功！");
});

// 重置挑双四脚本设置
ui.lsj_reset.click(function () {
    LSJAUTO_CONFIG.put("slide_verify", "300");
    ui.lsjauto_slide_verify.setText(LSJAUTO_CONFIG.get("slide_verify"));
    LSJAUTO_CONFIG.put("ocr_maxtime", "1500");
    ui.lsjauto_ocr_maxtime.setText(LSJAUTO_CONFIG.get("ocr_maxtime"));

    toastLog("老司机神器配置恢复默认！");
});

/* // 保存无限挑战脚本设置
ui.wxtz_save.click(function () {
    WXTZ_CONFIG.put("wxtz", ui.lsj_wxtz.getSelectedItemPosition());

    toastLog("无限挑战配置保存成功！");
});

// 重置无限挑战脚本设置
ui.wxtz_reset.click(function () {
    WXTZ_CONFIG.put("wxtz", 0);
    ui.lsj_wxtz.setSelection(WXTZ_CONFIG.get("wxtz"));

    toastLog("无限挑战配置恢复默认！");
});
 */


// 读取脚本设置
function Initialize() {
    ui.script_chosen.setSelection(GLOBAL_CONFIG.get("script_chosen", 0));

    ui.lsj_slide_verify.setText(LSJ_CONFIG.get("slide_verify", "300"));
    ui.lsj_meizhou.setSelection(LSJ_CONFIG.get("meizhou", 1));
    ui.lsj_zhuanxiang.setSelection(LSJ_CONFIG.get("zhuanxiang", 1));
    ui.lsj_ocr_maxtime.setText(LSJ_CONFIG.get("ocr_maxtime", "1500"));
    ui.lsj_dingyue.setSelection(LSJ_CONFIG.get("dingyue", 1));

    ui.lsjauto_slide_verify.setText(LSJAUTO_CONFIG.get("slide_verify", "300"));
    ui.lsjauto_ocr_maxtime.setText(LSJAUTO_CONFIG.get("ocr_maxtime", "1500"));

    // ui.lsj_wxtz.setSelection(WXTZ_CONFIG.get("wxtz", 0));
}





