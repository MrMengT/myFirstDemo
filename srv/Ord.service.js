// module.exports = mysrv => {
//     console.log(`service name: ${mysrv.name} is served at  ${mysrv.path}`)

//     mysrv.after('READ','Orders',datas =>{
//         console.log('===>')
//         console.log(datas)

//         const newOrders = []

//         datas.forEach(data => {
//             if(data.companyCode == '1000' ){
//                 data.headText = 'Test'
//             }

//             newOrders.push(data)
//         });

//         return newOrders
//     })

//     this.on('myTestAction',this.myTestAction);
// }

const cds = require('@sap/cds');

class OrderService extends cds.ApplicationService{
    init() {
        // const { Orders } = this.entities;
        // const myTestAction = Orders.actions;
        console.log("Running...");
        // this.after('READ',Orders,this.ChangeReadOrders);

        this.on("myTestAction", this.myTestActionImpl.bind(this) );
        // this.on('myTestAction',req => {
        //     req.notify(200,'Test')
        // });

        return super.init();
    }

    // ChangeReadOrders(results) {
    //     console.log("ChangeReadOrders...");
    //     for ( let order of results ){
    //         if (order.companyCode == '1000' ){
    //             order.headText = 'Auto changed'
    //         }
    //     }
    // }

    async myTestActionImpl(req){
        console.log("myTestAction...");
        // req.notify(200,"Test");
        req.notify(200,'Test')

        // const { Orders } = this.entities
        // let OrderData = await SELECT.from(Orders).where`orderNumber=${Orders.orderNumber}`
        const OrderData = await SELECT.from(req.subject);

        console.log(OrderData)
    }
}

module.exports = OrderService;