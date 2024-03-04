sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.sap.suppliereddcheck.controller.EddView", {
            onInit: function () {
                let data = [{
                
                    "question": "Are there any personal relationships between key personnel of your company or its Affiliates, and KPO Key Personnel?"
                },
                {
                
                    "question": "Are you aware of anti-bribery laws applicable to your company in the Republic of Kazakhstan?"
                },
                {
                
                    "question": "Does your company have policies to ensure compliance/ethical conduct in accordance with anti-bribery laws?"
                },
                {
                
                    "question": "Has your company’s senior management formally approved the compliance/ethical conduct policies?"
                },
                {
                
                    "question": "Does your company provide training for all employees in your organization on ethical conduct and anti-corruption?"
                },
                {
                
                    "question": "Kindly refer to the KPO Code of Conduct and confirm that your company does business in a manner consistent with KPO’s Code of Conduct?"
                },
                {
                
                    "question": "With regards to bribery, corruption or dishonest dealings with third parties, in the last 3 years, has your company been subjected to any external investigation?Has such an investigation been concluded and/or are there currently any outstanding investigations against your company?"
                }
    
                ];
                let dDropdown = [
                    {
                        "text": "SUP12345"
                    },
                    {
                        "text": "SUP23456"
                    },
                    {
                        "text": "SUP34567"
                    }];

                    

                let oModel = new JSONModel(data);
                this.getView().setModel(oModel, "myModel")
                let sModel = new JSONModel(dDropdown);
                this.getView().setModel(sModel, "sModel")
            },

           
        });
    });
