using { Currency, managed, cuid } from '@sap/cds/common';
namespace sap.myfirstdemo.order;

entity OrderHeads : cuid,managed {
    orderNumber : String(10);
    orderType : String(10);
    companyCode : String(4);
    purchaseOrg : String(4);
    purchaseGrp : String(3);
    items : Composition of many OrderItems on items.orderNumber = $self;
}

entity OrderItems : cuid,managed{
    orderNumber : Association to OrderHeads;
    orderItem : Integer;
    material : String(40);
    plant : String(4);
    storageLocation : String(4);
    quantity : Decimal(24, 2);
    unit : String(3);
    amount : Decimal(24, 2);
    currency  :Currency;
}

