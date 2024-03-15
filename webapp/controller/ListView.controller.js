sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("com.sap.suppliereddcheck.controller.ListView", {
            onInit: function () {

            },
            onNav:function(){
                this.getOwnerComponent().getRouter().navTo("RouteCheckView");
            },
            onCreate:function(){
                this.getOwnerComponent().getRouter().navTo("RouteEddView");

            },
            onCreateVendor:function(){
                this.getOwnerComponent().getRouter().navTo("RouteVendorView");
            },
            
    onCreateNew: function(){
    if (!this._CreateDialog) {
                        Fragment.load({
                            id: this.getView().getId(),
                            name: "com.sap.suppliereddcheck.view.fragment.Create",
                            controller: this
                        }).then(oDialog => {
                            this._CreateDialog = oDialog;
                            this.getView().addDependent()
                            oDialog.open()
                        })
                    }
                    else {
                        this._CreateDialog.open()
                    }
    
                },
                onCancel: function () {
                    this._CreateDialog.close()
    
                },
        });
    });
