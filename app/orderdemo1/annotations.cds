using OrderService as service from '../../srv/Order.service';

annotate service.Orders with @odata.draft.enabled;

annotate service.Orders with @(
    UI.HeaderInfo:{
        Title: {
            $Type: 'UI.DataField',
            Value: orderNumber,
        },
        TypeName:'Order',
        TypeNamePlural:'Orders',
        // Description:{Value:orderType}
    },
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataFieldForAction',
                Action: 'OrderService.myTestAction',
                Label : '{@i18n>myTestAction}',
                InvocationGrouping:#ChangeSet
            },
            {
                $Type : 'UI.DataField',
                Label : '{@i18n>orderNumber}',
                Value : orderNumber,
            },
            {
                $Type : 'UI.DataField',
                Label : '{@i18n>orderType}',
                Value : orderType,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>companycode}',
                Value : companyCode,
            },
            {
                $Type : 'UI.DataField',
                Label : '{@i18n>purchaseOrg}',
                Value : purchaseOrg,
            },
            {
                $Type : 'UI.DataField',
                Label : '{@i18n>purchaseGrp}',
                Value : purchaseGrp,
            },
            {
                $Type : 'UI.DataField',
                Label : '{@i18n>headText}',
                Value : headText,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'Headers',
            Label : '{@i18n>headerInfo}',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
        {
            $Type:'UI.ReferenceFacet',
            Label:'{@i18n>itemsInfo}',
            Target:'items/@UI.LineItem'
        }
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataFieldForAction',
            Action: 'OrderService.myTestAction',
            Label : '{@i18n>myTestAction}',
            InvocationGrouping:#ChangeSet
        },
        {
            $Type : 'UI.DataField',
            Label : '{@i18n>orderNumber}',
            Value : orderNumber,
        },
        {
            $Type : 'UI.DataField',
            Label : '{@i18n>orderType}',
            Value : orderType,
        },
        {
            $Type : 'UI.DataField',
            Label : '{@i18n>companyCode}',
            Value : companyCode,
        },
        {
            $Type : 'UI.DataField',
            Label : '{@i18n>purchaseOrg}',
            Value : purchaseOrg,
        },
        {
            $Type : 'UI.DataField',
            Label : '{@i18n>purchaseGrp}',
            Value : purchaseGrp,
        },
    ],
);

annotate service.OrderItems with @( 
    UI.HeaderInfo  : {
        Title:{
            $Type:'UI.DataField',
            Value: orderItem,
        },
        TypeName : '',
        TypeNamePlural : '',
    },

    UI.Facets : [
        {
            $Type:'UI.ReferenceFacet',
            Label:'{@i18n>detailsInfo}',
            Target:'@UI.Identification'
        }
    ],

    UI.LineItem:[
        {
            $Type:'UI.DataField',
            Label:'{@i18n>orderNumber}',
            Value:orderNumber,
        },
        {
            $Type:'UI.DataField',
            Label:'{@i18n>orderItem}',
            Value:orderItem,
        },{
            $Type:'UI.DataField',
            Label:'{@i18n>material}',
            Value:material,
        },{
            $Type:'UI.DataField',
            Label:'{@i18n>plant}',
            Value:plant,
        },{
            $Type:'UI.DataField',
            Label:'{@i18n>storageLocation}',
            Value:storageLocation,
        },{
            $Type:'UI.DataField',
            Label:'{@i18n>quantity}',
            Value:quantity,
        },{
            $Type:'UI.DataField',
            Label:'{@i18n>amount}',
            Value:amount,
        }
    ],

    UI.Identification:[
        {
            $Type:'UI.DataField',
            Label:'{@i18n>orderNumber}',
            Value:orderNumber,
        },
        {
            $Type:'UI.DataField',
            Label:'{@i18n>orderItem}',
            Value:orderItem,
        },{
            $Type:'UI.DataField',
            Label:'{@i18n>material}',
            Value:material,
        },{
            $Type:'UI.DataField',
            Label:'{@i18n>plant}',
            Value:plant,
        },{
            $Type:'UI.DataField',
            Label:'{@i18n>storageLocation}',
            Value:storageLocation,
        },{
            $Type:'UI.DataField',
            Label:'{@i18n>quantity}',
            Value:quantity,
        },{
            $Type:'UI.DataField',
            Label:'{@i18n>amount}',
            Value:amount,
        }
    ]
);

