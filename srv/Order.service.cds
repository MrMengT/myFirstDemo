using { sap.myfirstdemo.order as myOrder } from '../db/Order';
service OrderService @(impl:'srv/Ord.service.js'){
    @readonly entity Orders as select from myOrder.OrderHeads{ *,items } excluding { createdBy, modifiedBy } ;
    entity OrderItems as select from myOrder.OrderItems{ * } excluding { createdBy, modifiedBy };
    action myTestAction1(order:myOrder.OrderHeads:orderNumber);
}
