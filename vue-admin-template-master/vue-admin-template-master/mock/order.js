import Mock from 'mockjs'

const data = {
  items: [{
      "id": 1,
      "turnovernumber": "2017009171822298053",
      "ordernumber": "6346132436530324",
      "paytime": "2020-7-6 21:25:19",
      "consignee": "admin123",
      "ordertime": "2020-7-6 21:25:30",
      "supplier": "上海供货商",
      "orderstyle": "未发货",
      "operator": "admin"
    },
    {
      "id": 2,
      "turnovernumber": "2017009171822298053",
      "ordernumber": "6346132436530324",
      "paytime": "2020-7-6 21:25:19",
      "consignee": "admin123",
      "ordertime": "2020-7-6 21:25:30",
      "supplier": "上海供货商",
      "orderstyle": "未发货",
      "operator": "admin"
    },
    {
      "id": 3,
      "turnovernumber": "2017009171822298053",
      "ordernumber": "6346132436530324",
      "paytime": "2020-7-6 21:25:19",
      "consignee": "admin123",
      "ordertime": "2020-7-6 21:25:30",
      "supplier": "上海供货商",
      "orderstyle": "未发货",
      "operator": "admin"
    },
    {
      "id": 4,
      "turnovernumber": "2017009171822298053",
      "ordernumber": "6346132436530324",
      "paytime": "2020-7-6 21:25:19",
      "consignee": "admin123",
      "ordertime": "2020-7-6 21:25:30",
      "supplier": "上海供货商",
      "orderstyle": "未发货",
      "operator": "admin"
    },
    {
      "id": 5,
      "turnovernumber": "2017009171822298053",
      "ordernumber": "6346132436530324",
      "paytime": "2020-7-6 21:25:19",
      "consignee": "admin123",
      "ordertime": "2020-7-6 21:25:30",
      "supplier": "上海供货商",
      "orderstyle": "未发货",
      "operator": "admin"
    },
    {
      "id": 6,
      "turnovernumber": "2017009171822298053",
      "ordernumber": "6346132436530324",
      "paytime": "2020-7-6 21:25:19",
      "consignee": "admin123",
      "ordertime": "2020-7-6 21:25:30",
      "supplier": "上海供货商",
      "orderstyle": "未发货",
      "operator": "admin"
    },
    {
      "id": 7,
      "turnovernumber": "2017009171822298053",
      "ordernumber": "6346132436530324",
      "paytime": "2020-7-6 21:25:19",
      "consignee": "admin123",
      "ordertime": "2020-7-6 21:25:30",
      "supplier": "上海供货商",
      "orderstyle": "未发货",
      "operator": "admin"
    },
  ]
}

export default [{
    url: '/vue-admin-template/order/goodlist',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/vue-admin-template/order/new',
    type: 'post',
    response: config => {
      var order = config.body;
      data.items.push(order);
      return {
        code: 20000,
        data: {
          message: "添加商品成功"
        }
      }
    }
  },
  {
    url: '/vue-admin-template/order/goodlist',
    type: 'get',
    response: config => {
      //获取分页信息
      const {
        page = 1, limit = 20
      } = config.query
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          //根据分页信息返回数据
          items: items.slice((page - 1) * limit, limit * page)
        }
      }
    }
  },
  {
    url: '/vue-admin-template/order/delete',
    type: 'get',
    response: config => {
      var id = config.query.id;
      const items = data.items
      var index = items.findIndex(item => {
        if (item.id == id) {
          return true;
        }
      })
      items.splice(index, 1);
      return {
        code: 20000,
        data: {
          message: "删除商品成功"
        }
      }
    }
  },
]
