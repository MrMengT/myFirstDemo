using { Currency, managed, cuid } from '@sap/cds/common';
namespace sap.myfirstdemo.order;

entity OrderHeads : cuid,managed {
    // @Common.Label : '{i18n>orderNumber}'
    @title:'{i18n>orderNumber}'
    key orderNumber : String(10);
    orderType : String(10);
    companyCode : String(4);
    purchaseOrg : String(4);
    purchaseGrp : String(3);
    @UI.MultiLineText
    headText: String(4000);
    @odata.draft.bypass
    abapCode: String;
    items : Composition of many OrderItems on items.orderNumber = $self.orderNumber;
}

entity OrderItems : managed{
    // key orderNumber : Association to OrderHeads;
    @Common.Label : 'Order Number'
    @readonly
    key orderNumber : String(10);
    @Common.Label : 'orderItem'
    key orderItem : Integer;
    material : String(40);
    plant : String(4);
    storageLocation : String(4);
    @Measures.Unit : unit
    quantity : Decimal(24, 2);
    unit : String(3);
    @Measures.ISOCurrency : currency_code
    amount : Decimal(24, 2);
    currency  :Currency;
}

