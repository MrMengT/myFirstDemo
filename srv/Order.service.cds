using { sap.myfirstdemo.order as myOrder } from '../db/Order';
service OrderService @(impl:'srv/Ord.service.js'){
    entity Orders as select from myOrder.OrderHeads{ *,items } excluding { createdBy, modifiedBy } actions{
        action myTestAction( );
    } ;
    entity OrderItems as select from myOrder.OrderItems{ * } excluding { createdBy, modifiedBy };
    
}
