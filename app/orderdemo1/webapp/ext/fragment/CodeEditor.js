sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onPress: function(oEvent) {
            console.log("running...")
            MessageToast.show("Custom handler invoked.");
        },
        // onAfterRendering: function () {
        //     console.log("running...")
        //     // 获取 UI5 CodeEditor 控件
        //     var oCodeEditor = this.byId("codeEditor");
        //     // 获取底层 Ace Editor 实例
        //     var oEditor = oCodeEditor.getEditorInstance();
            
        //     // 显示打印标尺，并设置到第 72 列
        //     oEditor.setShowPrintMargin(true);
        //     oEditor.setPrintMarginColumn(12);
            
        //     // 开启软换行，并在 72 列处强制换行
        //     oEditor.session.setUseWrapMode(true);
        //     oEditor.session.setWrapLimitRange(12, 12);
        // }
        onInit: function() {
            console.log("onInit...")
            // 每次渲染后都执行
            this.getView().addEventDelegate({
                onAfterRendering: function() {
                    console.log("======")
                var oCodeEditor = this.byId("codeEditor");
                if (!oCodeEditor) {
                    return;
                }
                // getEditorInstance() 确保 Ace 完全加载
                oCodeEditor.getEditorInstance().then(function(oEditor) {
                    // 在第 72 列显示垂直标尺
                    oEditor.setShowPrintMargin(true);            // :contentReference[oaicite:2]{index=2}
                    oEditor.setPrintMarginColumn(72);            // :contentReference[oaicite:3]{index=3}
                    // 开启软换行，并在第 72 列处自动换行
                    oEditor.session.setUseWrapMode(true);         // :contentReference[oaicite:4]{index=4}
                    oEditor.session.setWrapLimitRange(72, 72);    // :contentReference[oaicite:5]{index=5}
                });
                }.bind(this)
            });
        }
    };
});
