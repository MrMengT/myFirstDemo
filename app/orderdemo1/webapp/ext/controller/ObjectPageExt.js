sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";
  return Controller.extend("orderdemo1.ext.controller.ObjectPageExt", {
    onInit: function() {
        console.log("======")
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
  });
});
