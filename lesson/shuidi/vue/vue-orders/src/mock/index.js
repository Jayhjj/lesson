import Mock from 'mockjs'

// const dataList = [] ; 列表数据

const dataList = {
    'orders|100': [{
        "_id|+1": 1, //id字段自增
        "name": "@cname",
        "orderDate": "@datetime",
        "status|1": ['created', 'completed', 'canceled'],
        "shippingFee": "@float(0,8,0,2)",
        "total": "@float(8,100,0,2)"
    }]
}

Mock.mock('/api/orders', 'post', dataList)
    //假数据生产


export default Mock;