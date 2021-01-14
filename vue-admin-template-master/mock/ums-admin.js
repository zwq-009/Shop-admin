import Mock from 'mockjs'

const data = {
    items: [
        {
            "id": 1,
            "username": "test",
            "nickName": "测试使用帐号",
            "password":"123456",
            "email": "test@qq.com",
            "createTime": "2021-01-12",
            "status":1,
        },
        {
            "id": 2,
            "username": "admin",
            "nickName": "系统管理员1",
            "password":"456456",
            "email": "admin@163.com",
            "createTime": "2021-01-13",
            "status":1,
        },
        {
            "id": 3,
            "username": "editor",
            "nickName": "系统管理员2",
            "password":"456456",
            "email": "editor@163.com",
            "createTime": "2021-01-13",
            "status":1
        },
        {
            "id": 4,
            "username": "macro",
            "nickName": "用户体验帐号",
            "password":"macro123",
            "email": "macro@qq.com",
            "createTime": "2021-01-13",
            "status":1
        },
        {
            "id": 5,
            "username": "superAdmin",
            "nickName": "超级管理员",
            "password":"123123",
            "email": "superAdmin@qq.com",
            "createTime": "2021-01-15",
            "status":1
        },
        {
            "id": 6,
            "username": "productAdmin",
            "nickName": "商品管理员",
            "password":"123123",
            "email": "product@qq.com",
            "createTime": "2021-01-15",
            "status":1
        },
        {
            "id": 7,
            "username": "orderAdmin",
            "nickName": "订单管理员",
            "password":"123123",
            "email": "order@qq.com",
            "createTime": "2021-01-15",
            "status":1
        },
        {
            "id": 8,
            "username": "manage",
            "nickName": "经理专用帐号",
            "password":"987654",
            "email": "manage@qq.com",
            "createTime": "2021-01-17",
            "status":1
        },
        {
            "id": 9,
            "username": "boss",
            "nickName": "boss专用帐号",
            "password":"987654",
            "email": "boss@qq.com",
            "createTime": "2021-01-17",
            "status":1
        }
    ]
}

export default [
    {
        url: '/vue-admin-template/ums-admin/list',
        type: 'get',
        response: config => {
            const { page = 1, limit = 3 } = config.query
            const items = data.items
            return {
                code: 20000,
                data: {
                    total: items.length,
                    items: items.slice((page - 1) * limit, limit * page)
                }
            }
        }
    },
    {
        url: '/vue-admin-template/ums-admin/delete',
        type: 'get',
        response: config => {
          const id = config.query.id
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
      {
        url: '/vue-admin-template/ums-admin/new',
        type: 'post',
        response: config => {
          var product = config.body;
          data.items.push(product);
          return {
            code: 20000,
            data: {
              message: "添加商品成功"
            }
          }
        }
      }
]