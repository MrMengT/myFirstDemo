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
    };
});
