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
                        <vertical gravity="center" layout_weight="1">
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="脚本选择" textColor="#FFFF00" textSize="16sp" maxLines="1" />
                                        <text text="切换脚本后需在配置页设置" textColor="#EE00EE" textSize="12sp" maxLines="1" />
                                    </vertical>
                                    <spinner id="script_chosen" marginLeft="4" marginRight="6" textColor="#FF6600" entries="老司机神器|挑战双四人|老司机无限挑战|自动学习" />
                                </horizontal>
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text text="作者：老司机 " textColor="#990000" textSize="16sp" maxLines="1" />
                                        <text text="此软件需使用修改版强国" textColor="#EE00EE" textSize="12sp" maxLines="1" />
                                        <text text="使用教程和下载地址在左上角三横处" textColor="#EE00EE" textSize="12sp" maxLines="1" />    
                                        <text text="教程不看需本人配置的将开启收费" textColor="#EE00EE" textSize="12sp" maxLines="1" />
                                        <text text="本软件不适用安卓12-13和鸿蒙3，需要使用请用虚拟机开启" textColor="#EE00EE" textSize="12sp" maxLines="1" />                           
                                    </vertical>
                                </horizontal>
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="无障碍服务" textColor="#FFFF00" textSize="16sp" maxLines="1" />
                                        <text text="请确保开启" textColor="#EE00EE" textSize="14sp" maxLines="1" />
                                    </vertical>
                                    <checkbox id="autoService" marginLeft="4" marginRight="6" checked="{{auto.service != null}}" />
                                </horizontal>
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="悬浮窗权限" textColor="#FFFF00" textSize="16sp" maxLines="1" />
                                        <text text="请确保开启" textColor="#EE00EE" textSize="14sp" maxLines="1" />
                                    </vertical>
                                    <checkbox id="consoleshow" marginLeft="4" marginRight="6" checked="{{floaty.checkPermission()}}" />
                                </horizontal>
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="音量上键可以停止所有脚本运行" textColor="#FFFF00" textSize="16sp" maxLines="1" />
                                    </vertical>
                                </horizontal>
                                <horizontal gravity="center_vertical">
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <button h="50" layout_gravity="center" id="log" textSize="18sp" text="查看日志" color="#339933" bg="#FF6666" />
                                    <button h="50" layout_gravity="center" id="update" textSize="18sp" />
                                    <button id="start" text="开 始 学 习" textSize="25sp" color="#FFFF00" bg="#CC3399" />

                                </vertical>
                                </horizontal>
                        </vertical>
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
                                    <text w="auto" textColor="#FFFF00" textSize="15sp" text="滑动验证的滑动时间(ms)" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="空着或0不开启自动滑动验证，滑动分3段" />
                                </vertical> 
                                <input id="lsj_slide_verify" marginLeft="4" marginRight="6" text="300" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="1 1" >
                                <vertical padding="5 5 5 5" h="auto" w="0" layout_weight="0.5">
                                    <text w="auto" textColor="#FFFF00" textSize="15sp" text="每周答题" />
                                    <spinner id="lsj_meizhou" marginLeft="4" marginRight="6" textColor="#FF6600" entries="最近一次已作答开始倒序|正序答题|不做" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="1 1" >
                                <vertical padding="5 5 5 5" h="auto" w="0" layout_weight="0.5">
                                    <text w="auto" textColor="#FFFF00" textSize="15sp" text="专项答题" />
                                    <spinner id="lsj_zhuanxiang" marginLeft="4" marginRight="6" textColor="#FF6600" entries="最近一次已作答开始倒序|正序答题|不做" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="1 1" >
                                <vertical padding="5 5 5 5" h="auto" w="0" layout_weight="0.5">
                                    <text w="auto" textColor="#FFFF00" textSize="15sp" text="ocr识别跳过阈值(ms)" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="空着或0默认5000，超过此时间会跳过多人对战" />
                                </vertical> 
                                <input id="lsj_ocr_maxtime" marginLeft="4" marginRight="6" text="1500" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="1 1" >
                                <vertical padding="5 5 5 5" h="auto" w="0" layout_weight="0.5">
                                    <text w="auto" textColor="#FFFF00" textSize="15sp" text="订阅" />
                                    <spinner id="lsj_dingyue" marginLeft="4" marginRight="6" textColor="#FF6600" entries="不做|正序订阅|只订阅年度上新" />
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
                                    <text w="auto" textColor="#FFFF00" textSize="15sp" text="滑动验证的滑动时间(ms)" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="空着或0不开启自动滑动验证，滑动分3段" />
                                    <text w="auto" textColor="#004b50" textSize="12sp" text="中间会折返一下，总时间是填的数值*3" />
                                </vertical> 
                                <input id="lsjauto_slide_verify" marginLeft="4" marginRight="6" text="300" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#FFFF00" textSize="15sp" text="ocr识别跳过阈值(ms)" />
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
                                        <text text="Server为网络题库模式，json为本地题库模式" textColor="#EE00EE" textSize="12sp" maxLines="1" />                                                                 
                                    </vertical>
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                            <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="是否启动网络模式" />
                                </vertical>
                                <checkbox id="wxtz_tkms" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="wxtz_save" text="保存配置" padding="12dp" w="*" />
                            </horizontal>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="wxtz_reset" text="恢复默认" padding="12dp" w="*" />
                            </horizontal>
                        </vertical>
                        <ScrollView>
                        <vertical id="autoxuexi" gravity="top">
                            <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="此软件需要专属修改版强国，在右上角三个点下载" textColor="#EE00EE" textSize="12sp" maxLines="1" />
                                        <text text="开启后会自动进入学习,答题完成后会自动退出" textColor="#EE00EE" textSize="12sp" maxLines="1" />  
                                        <text text="此脚本没有悬浮窗，隐蔽执行,为应急备用，没老司机神器好用" textColor="#EE00EE" textSize="12sp" maxLines="1" />  
                                        <text text="百度AK,SK需要去百度云获取，百度收费项目" textColor="#EE00EE" textSize="12sp" maxLines="1" />                                                                        
                                    </vertical>
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="5 5 5 5" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#FFFF00" textSize="15sp" text="加载时间" />
                                    <text w="auto" textColor="#EE00EE" textSize="12sp" text="跳转页面加载的时间(以秒s为单位)" />
                                    <text w="auto" textColor="#EE00EE" textSize="12sp" text="默认为1s(支持小数点形式)，根据手机性能与网络情况自行而定" />
                                    <text w="auto" textColor="#EE00EE" textSize="12sp" text="时间越长出bug的可能越小，但同时耗费的时间越长" />
                                </vertical> 
                                <input id="autoxuexi_shijian" marginLeft="4" marginRight="6" text="1"  hint="秒"  textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="5 5 5 5" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#FFFF00" textSize="15sp" text="每周答题" />
                                    <text text="之前的每周答题是否全部完成" textColor="#EE00EE" textSize="12sp" maxLines="1" />   
                                    <text text="请填入yes或no默认为no" textColor="#EE00EE" textSize="12sp" maxLines="1" /> 
                                    <text text="如果完成就不需要浪费时间向下搜索" textColor="#EE00EE" textSize="12sp" maxLines="1" /> 
                                    <spinner id="autoxuexi_mzdt" marginLeft="4" marginRight="6" textColor="#FF6600" entries="yes|no" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="5 5 5 5" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#FFFF00" textSize="15sp" text="专项答题" />
                                    <text text="之前的专项答题是否全部完成" textColor="#EE00EE" textSize="12sp" maxLines="1" /> 
                                    <text text="请填入yes或no默认为no" textColor="#EE00EE" textSize="12sp" maxLines="1" /> 
                                    <text text="如果完成就不需要浪费时间向下搜索" textColor="#EE00EE" textSize="12sp" maxLines="1" /> 
                                    <spinner id="autoxuexi_zxdt" marginLeft="4" marginRight="6" textColor="#FF6600" entries="yes|no" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="5 5 5 5" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#FFFF00" textSize="15sp" text="订阅" />
                                    <text text="是否完成订阅模块" textColor="#EE00EE" textSize="12sp" maxLines="1" /> 
                                    <text text="请填入yes或no默认为no" textColor="#EE00EE" textSize="12sp" maxLines="1" /> 
                                    <spinner id="autoxuexi_dyue" marginLeft="4" marginRight="6" textColor="#FF6600" entries="yes|no" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="5 5 5 5" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#FFFF00" textSize="15sp" text="发表言论" />
                                    <text text="是否完成发表言论模块" textColor="#EE00EE" textSize="12sp" maxLines="1" /> 
                                    <text text="请填入yes或no默认为no" textColor="#EE00EE" textSize="12sp" maxLines="1" /> 
                                    <spinner id="autoxuexi_fbyl" marginLeft="4" marginRight="6" textColor="#FF6600" entries="yes|no" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="5 5 5 5" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#FFFF00" textSize="15sp" text="百度AK" />
                                    <text text="请在双引号里填写百度AK，如何获取请看右上角三个点" textColor="#EE00EE" textSize="12sp" maxLines="1" /> 
                                    <input id="autoxuexi_bdak" text="" textColor="#FF6600" textSize="13sp" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="5 5 5 5" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#FFFF00" textSize="15sp" text="百度SK" />
                                    <text text="请在双引号里填写百度SK，如何获取请看右上角三个点" textColor="#EE00EE" textSize="12sp" maxLines="1" /> 
                                    <input id="autoxuexi_bdsk" text="" textColor="#FF6600" textSize="13sp" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <vertical padding="5 5 5 5" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#FFFF00" textSize="15sp" text="微信推送" />
                                    <text text="选填，是否要使用微信消息推送功能" textColor="#EE00EE" textSize="12sp" maxLines="1" /> 
                                    <text text="公众号关注pushplus获取token" textColor="#EE00EE" textSize="12sp" maxLines="1" /> 
                                    <input id="autoxuexi_wxts" text="" textColor="#FF6600" textSize="13sp" />
                                </vertical> 
                            </horizontal>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="autoxuexi_save" text="保存配置" padding="12dp" w="*" />
                            </horizontal>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="autoxuexi_reset" text="恢复默认" padding="12dp" w="*" />
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
var LSJAUTO_CONFIG = storages.create("LSJAUTO_CONFIG");
var WXTZ_CONFIG = storages.create("WXTZ_CONFIG");
var AUTOXUEXI_CONFIG = storages.create("AUTOXUEXI_CONFIG");
var BAIDUAPI = storages.create("BAIDUAPI");
var execution = "";
var thread = null;
Initialize();



// 创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu=>{
    menu.add("日志");
    menu.add("修改强国下载");
    menu.add("百度AK,SK获取");
    // menu.add("联系QQ");
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
        case "百度AK,SK获取":
            app.openUrl("https://login.bce.baidu.com/");
            break;            
/*         case "联系QQ":
            alert("联系QQ", "807397510");
            break;   */                              
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);

// 设置滑动页面的标题
ui.viewpager.setTitles(["首页", "脚本配置"]);
// 让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);

// 脚本选择监听
var script_chosen_Listener = new android.widget.AdapterView.OnItemSelectedListener({
    onItemSelected: function (parent, view, position, id) {
        toastLog('选择脚本：' + ui.script_chosen.getSelectedItem());
        if (ui.script_chosen.getSelectedItemPosition() == 0) {
            ui.lsjauto.visibility = 8;
            ui.wxtz.visibility = 8;
            ui.autoxuexi.visibility = 8;
            ui.lsj.visibility = 0;
        }
        else if (ui.script_chosen.getSelectedItemPosition() == 1) {
            ui.lsj.visibility = 8;
            ui.wxtz.visibility = 8;
            ui.autoxuexi.visibility = 8;
            ui.lsjauto.visibility = 0;
        }
        else if (ui.script_chosen.getSelectedItemPosition() == 2) {
            ui.lsj.visibility = 8;
            ui.lsjauto.visibility = 8;
            ui.autoxuexi.visibility = 8;
            ui.wxtz.visibility = 0;
        }
        else if (ui.script_chosen.getSelectedItemPosition() == 3) {
            ui.lsj.visibility = 8;
            ui.lsjauto.visibility = 8;
            ui.wxtz.visibility = 8;
            ui.autoxuexi.visibility = 0;
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
ui.lsjauto_reset.click(function () {
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
}); */

// 保存自动学习脚本设置
ui.autoxuexi_save.click(function () {
    AUTOXUEXI_CONFIG.put("shijian", ui.autoxuexi_shijian.getText()+"");
    AUTOXUEXI_CONFIG.put("mzdt", ui.autoxuexi_mzdt.getSelectedItemPosition());
    AUTOXUEXI_CONFIG.put("zxdt", ui.autoxuexi_zxdt.getSelectedItemPosition());
    AUTOXUEXI_CONFIG.put("dyue", ui.autoxuexi_dyue.getSelectedItemPosition());
    AUTOXUEXI_CONFIG.put("fbyl", ui.autoxuexi_fbyl.getSelectedItemPosition());
    AUTOXUEXI_CONFIG.put("bdak", ui.autoxuexi_bdak.getText()+"");
    AUTOXUEXI_CONFIG.put("bdsk", ui.autoxuexi_bdsk.getText()+"");
    AUTOXUEXI_CONFIG.put("wsts", ui.autoxuexi_wxts.getText()+"");

    toastLog("自动学习配置保存成功！");
});

// 重置自动学习脚本设置
ui.autoxuexi_reset.click(function () {
    AUTOXUEXI_CONFIG.put("shijian", "1");
    ui.autoxuexi_shijian.setText(AUTOXUEXI_CONFIG.get("shijian"));
    AUTOXUEXI_CONFIG.put("mzdt", 0);
    ui.autoxuexi_mzdt.setSelection(AUTOXUEXI_CONFIG.get("mzdt"));
    AUTOXUEXI_CONFIG.put("zxdt", 0);
    ui.autoxuexi_zxdt.setSelection(AUTOXUEXI_CONFIG.get("zxdt"));
    AUTOXUEXI_CONFIG.put("dyue", 0);
    ui.autoxuexi_dyue.setSelection(AUTOXUEXI_CONFIG.get("dyue"));
    AUTOXUEXI_CONFIG.put("fbyl", 0);
    ui.autoxuexi_fbyl.setSelection(AUTOXUEXI_CONFIG.get("fbyl"));
    AUTOXUEXI_CONFIG.put("bdak", "");
    ui.autoxuexi_bdak.setText(AUTOXUEXI_CONFIG.get("bdak"));
    AUTOXUEXI_CONFIG.put("bdsk", "");
    ui.autoxuexi_bdsk.setText(AUTOXUEXI_CONFIG.get("bdsk"));
    AUTOXUEXI_CONFIG.put("wxts", "");
    ui.autoxuexi_wxts.setText(AUTOXUEXI_CONFIG.get("wxts"));

    toastLog("自动学习配置恢复默认！");
});

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

    ui.autoxuexi_shijian.setText(AUTOXUEXI_CONFIG.get("shijian", "1"));
    ui.autoxuexi_mzdt.setSelection(AUTOXUEXI_CONFIG.get("mzdt", 0));
    ui.autoxuexi_zxdt.setSelection(AUTOXUEXI_CONFIG.get("zxdt", 0));
    ui.autoxuexi_dyue.setSelection(AUTOXUEXI_CONFIG.get("dyue", 0));
    ui.autoxuexi_fbyl.setSelection(AUTOXUEXI_CONFIG.get("fbyl", 0));
    ui.autoxuexi_bdak.setText(AUTOXUEXI_CONFIG.get("bdak", ""));
    ui.autoxuexi_bdsk.setText(AUTOXUEXI_CONFIG.get("bdsk", ""));
    ui.autoxuexi_wxts.setText(AUTOXUEXI_CONFIG.get("wxts", ""));

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
    title: "老司机神器下载地址",
    icon: "@drawable/ic_android_black_48dp"
},
{
    title: "老司机神器苹果云手机版下载地址",
    icon: "@drawable/ic_android_black_48dp"
},
{
    title: "强国2.19改下载地址",
    icon: "@drawable/ic_settings_black_48dp"
},
{
    title: "强国2.23改下载地址",
    icon: "@drawable/ic_favorite_black_48dp"
},
{
    title: "强国2.33改下载地址",
    icon: "@drawable/ic_android_black_48dp"
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
        case "苹果云手机学习教程学习教程":
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
        case "老司机神器下载地址":
            app.openUrl("https://65444.lanzoue.com/izh7A0hcpbwd");
            break;
    }
})

ui.menu.on("item_click", item => {
    switch(item.title){
        case "老司机神器苹果云手机版下载地址":
            app.openUrl("https://65444.lanzoue.com/i2PV40i4qf3c");
            break;
    }
})

ui.menu.on("item_click", item => {
    switch(item.title){
        case "强国2.19改下载地址":
            app.openUrl("https://www.123pan.com/s/g3e0Vv-Fq08H");
            break;
    }
})

ui.menu.on("item_click", item => {
    switch(item.title){
        case "强国2.23改下载地址":
            app.openUrl("https://www.123pan.com/s/g3e0Vv-gq08H");
            break;
    }
})

ui.menu.on("item_click", item => {
    switch(item.title){
        case "强国2.33改下载地址":
            app.openUrl("https://www.123pan.com/s/g3e0Vv-Yq08H");
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
