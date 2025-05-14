module.exports = mysrv => {
    console.log(`service name: ${mysrv.name} is served at  ${mysrv.path}`)

    mysrv.after('READ','Orders',datas =>{
        console.log('===>')
        console.log(datas)

        const newOrders = []

        datas.forEach(data => {
            if(data.companyCode == '1000' ){
                data.headText = 'Test'
            }

            newOrders.push(data)
        });

        return newOrders
    })
}