sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
        },
        createSupplierModel:function(){

            let oModel = new JSONModel({

                "suppliers":[

                    
                        {
                            "SupplierNumber": "SUP12345",
                            "SupplierLegalName": "Global Enterprises Inc.",
                            "CompanyOrigin": "United States",
                            "TINNumber": "987654321",
                            "BICNumber": "BICUS123",
                            "VATNUMBER": "USVAT123",
                            "RegistrationCertificateNumber": "REG45678",
                            "YearOfIncorportation": 2005,
                            "CompanyHeadquarter": "New York",
                            "LicenseNumber": "LIC7890",
                            "Status":"100% verified"
                        },
                        {
                            "SupplierNumber": "SUP23456",
                            "SupplierLegalName": "EuroTech Solutions Ltd.",
                            "CompanyOrigin": "United Kingdom",
                            "TINNumber": "123456789",
                            "BICNumber": "BICEU456",
                            "VATNUMBER": "GBVAT456",
                            "RegistrationCertificateNumber": "REG56789",
                            "YearOfIncorportation": 2008,
                            "CompanyHeadquarter": "London",
                            "LicenseNumber": "LIC9012",
                            "Status":"70% verified"
                        },
                        {
                            "SupplierNumber": "SUP34567",
                            "SupplierLegalName": "Asia-Pacific Traders",
                            "CompanyOrigin": "Singapore",
                            "TINNumber": "9876543210",
                            "BICNumber": "BICSG789",
                            "VATNUMBER": "SGVAT789",
                            "RegistrationCertificateNumber": "REG67890",
                            "YearOfIncorportation": 2010,
                            "CompanyHeadquarter": "Singapore",
                            "LicenseNumber": "LIC1234",
                            "Status":"80% verified"
                        },
                        {
                            "SupplierNumber": "SUP45678",
                            "SupplierLegalName": "Latin America Imports",
                            "CompanyOrigin": "Brazil",
                            "TINNumber": "1234567890",
                            "BICNumber": "BICBR890",
                            "VATNUMBER": "BRVAT890",
                            "RegistrationCertificateNumber": "REG78901",
                            "YearOfIncorportation": 2007,
                            "CompanyHeadquarter": "São Paulo",
                            "LicenseNumber": "LIC2345",
                            "Status":"20% verified"
                        },
                        {
                            "SupplierNumber": "SUP56789",
                            "SupplierLegalName": "African Trade Co.",
                            "CompanyOrigin": "South Africa",
                            "TINNumber": "9876543211",
                            "BICNumber": "BICZA901",
                            "VATNUMBER": "ZAVAT901",
                            "RegistrationCertificateNumber": "REG89012",
                            "YearOfIncorportation": 2012,
                            "CompanyHeadquarter": "Johannesburg",
                            "LicenseNumber": "LIC3456",
                            "Status":"90% verified"
                        },
                        {
                            "SupplierNumber": "SUP67890",
                            "SupplierLegalName": "Oceania Enterprises",
                            "CompanyOrigin": "Australia",
                            "TINNumber": "1234567891",
                            "BICNumber": "BICAU012",
                            "VATNUMBER": "AUVAT012",
                            "RegistrationCertificateNumber": "REG90123",
                            "YearOfIncorportation": 2009,
                            "CompanyHeadquarter": "Sydney",
                            "LicenseNumber": "LIC4567",
                            "Status":"90% verified"
                        },
                        {
                            "SupplierNumber": "SUP78901",
                            "SupplierLegalName": "Middle East Traders",
                            "CompanyOrigin": "United Arab Emirates",
                            "TINNumber": "9876543212",
                            "BICNumber": "BICAE123",
                            "VATNUMBER": "AEVAT123",
                            "RegistrationCertificateNumber": "REG01234",
                            "YearOfIncorportation": 2011,
                            "CompanyHeadquarter": "Dubai",
                            "LicenseNumber": "LIC5678",
                            "Status":"100% verified"
                        },
                        {
                            "SupplierNumber": "SUP89012",
                            "SupplierLegalName": "Scandinavian Imports",
                            "CompanyOrigin": "Sweden",
                            "TINNumber": "1234567892",
                            "BICNumber": "BICSE234",
                            "VATNUMBER": "SEVAT234",
                            "RegistrationCertificateNumber": "REG12345",
                            "YearOfIncorportation": 2006,
                            "CompanyHeadquarter": "Stockholm",
                            "LicenseNumber": "LIC6789",
                            "Status":"100% verified"
                        },
                        {
                            "SupplierNumber": "SUP90123",
                            "SupplierLegalName": "Russian Trading Co.",
                            "CompanyOrigin": "Russia",
                            "TINNumber": "9876543213",
                            "BICNumber": "BICRU345",
                            "VATNUMBER": "RUVAT345",
                            "RegistrationCertificateNumber": "REG23456",
                            "YearOfIncorportation": 2003,
                            "CompanyHeadquarter": "Stockholm",
                            "LicenseNumber": "LIC67899",
                            "Status":"30% verified"
                        }

                    
                ],
                "suppliersVerification":[
                    {
                        "SupplierDetail":"SupplierLegalName",
                        "KPORecord":"Global Enterprises Inc.",
                        "GovtRecord":"Global Enterprises Inc.",
                        "Status":100
                    },
                    {
                        "SupplierDetail":"CompanyOrigin",
                        "KPORecord":"United States",
                        "GovtRecord":"United States",
                        "Status":100
                    },
                    {
                        "SupplierDetail":"TINNumber",
                        "KPORecord":"987654321",
                        "GovtRecord":"987654321",
                        "Status":100
                    },
                    {
                        "SupplierDetail":"BINNumber",
                        "KPORecord":"BICEU456",
                        "GovtRecord":"BICEU456",
                        "Status":100
                    },
                    {
                        "SupplierDetail":"VATNUMBER",
                        "KPORecord":"USVAT123",
                        "GovtRecord":"USVAT123",
                        "Status":100
                    },
                    {
                        "SupplierDetail":"RegistrationCertificateNumber",
                        "KPORecord":"REG45678",
                        "GovtRecord":"REG45678",
                        "Status":100
                    },
                    {
                        "SupplierDetail":"YearOfIncorportation",
                        "KPORecord":"2005",
                        "GovtRecord":"2005",
                        "Status":100
                    },
                    {
                        "SupplierDetail":"CompanyHeadquarter",
                        "KPORecord":"New York",
                        "GovtRecord":"New York",
                        "Status":100
                    },
                    {
                        "SupplierDetail":"LicenseNumber",
                        "KPORecord":"LIC7890",
                        "GovtRecord":"LIC7890",
                        "Status":100
                    }
                ],
                "questionsResponse":[
                    {
                        "Questions":"Are there any personal relationships between key personnel of your company or its Affiliates, and KPO Key Personnel?",
                        "Response":"No",
                         "SupplierComments":"",
                        "Status":"100"
                    },
                    {
                        "Questions":"Are you aware of anti-bribery laws applicable to your company in the Republic of Kazakhstan?",
                        "Response":"Yes",
                        "SupplierComments":"",
                        "Status":"100"
                    },
                    {
                        "Questions":"Does your company have policies to ensure compliance/ethical conduct in accordance with anti-bribery laws?",
                        "Response":"Yes",
                        "SupplierComments":"",
                        "Status":"100"
                    }
                ],
                "attachment":[
                    {
                        "documentId":"2190000",
                        "fileName":"ComplianceDox.doc",
                        "url":"https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fui5.sap.com%2Ftest-resources%2Fsap%2Fm%2Fdemokit%2Fsample%2FUploadCollection%2FLinkedDocuments%2FBusiness%2520Plan%2520Agenda.doc&wdOrigin=BROWSELINK"
                    }
                ]
            });

            return oModel;

        }
    };
});