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
        const { Orders,OrderItems } = this.entities;
        const myTestAction = Orders.actions;
        console.log("Running...");
        this.after('READ',Orders,this.ChangeReadOrders);

        // this.on(myTestAction,Orders,this.myTestAction);
        this.on('myTestAction',Orders,req => {
            console.log("myTestAction...")
        });

        return super.init();
    }

    ChangeReadOrders(results) {
        console.log("ChangeReadOrders...");
        for ( let order of results ){
            if (order.companyCode == '1000' ){
                order.headText = 'Auto changed'
            }
        }
    }

    // async myTestAction(req,Orders){
    //     console.log("myTestAction...");
    //     // req.notify(200,Orders.orderNumber);
    // }
}

module.exports = OrderService;