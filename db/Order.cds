using { Currency, managed, cuid } from '@sap/cds/common';
namespace sap.myfirstdemo.order;

entity OrderHeads : cuid,managed {
    key orderNumber : String(10);
    orderType : String(10);
    companyCode : String(4);
    purchaseOrg : String(4);
    purchaseGrp : String(3);
    headText: String(40);
    items : Composition of many OrderItems on items.orderNumber = $self.orderNumber;
}

entity OrderItems : managed{
    // key orderNumber : Association to OrderHeads;
    key orderNumber : String(10);
    key orderItem : Integer;
    material : String(40);
    plant : String(4);
    storageLocation : String(4);
    quantity : Decimal(24, 2);
    unit : String(3);
    amount : Decimal(24, 2);
    currency  :Currency;
}

