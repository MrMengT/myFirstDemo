sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'orderdemo1/test/integration/FirstJourney',
		'orderdemo1/test/integration/pages/OrdersList',
		'orderdemo1/test/integration/pages/OrdersObjectPage',
		'orderdemo1/test/integration/pages/OrderItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrdersList, OrdersObjectPage, OrderItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('orderdemo1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrdersList: OrdersList,
					onTheOrdersObjectPage: OrdersObjectPage,
					onTheOrderItemsObjectPage: OrderItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);