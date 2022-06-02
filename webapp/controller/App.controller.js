sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("DEV.project1.controller.controller.App", {
        onInit() {
/*            
            var sPath = jQuery.sap.getModulePath("DEV.project1", "/model/data.json"); 
            var oModel = new JSONModel(sPath);
            this.getView().setModel(oModel, "jsonFile");
*/

            var oBusy = new sap.m.BusyDialog();
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.attachRequestSent(function() {
                oBusy.open();
            });

            oModel.loadData("/model/data.json");

            oModel.attachRequestCompleted(function(oEvent) {
                oBusy.close();
                var usrResponse = oModel.getProperty("/ZPWD_004_DATUSER/response/T_DATEMPR");
            });
               // oModel.setData(mData);
            //this.getView().setModel(oModel)            
        }
      });
    }
  );
  