sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.suppliereddcheck.controller.ListView", {
            onInit: function () {

            },
            onNav:function(){
                this.getOwnerComponent().getRouter().navTo("RouteCheckView");
            }
        });
    });
