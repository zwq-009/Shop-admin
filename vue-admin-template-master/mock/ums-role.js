import Mock from 'mockjs'

const data = {
    items:[
        {
            "id":1,
            "rolename":"普通用户",
            "explain":"只能查看相关信息，没有任何的操作技能",
            "createTime": "2021-01-12",
            "status":1
        },
        {
            "id":2,
            "rolename":"商品管理员",
            "explain":"可以查看相关信息，可以对商品相关属性进行操作",
            "createTime": "2021-01-12",
            "status":1
        },
        {
            "id":3,
            "rolename":"订单管理员",
            "explain":"可以查看相关信息，可以对订单相关属性进行操作",
            "createTime": "2021-01-12",
            "status":1
        },
        {
            "id":4,
            "rolename":"超级管理员",
            "explain":"可以查看相关信息，可以对订单与商品相关属性进行操作",
            "createTime": "2021-01-12",
            "status":1
        },
        {
            "id":5,
            "rolename":"经理",
            "explain":"可以查看相关信息，可以对订单与商品相关属性进行操作，并且可以决定下级的调度与财务管理",
            "createTime": "2021-01-12",
            "status":1
        },
        {
            "id":6,
            "rolename":"Boss",
            "explain":"可以查看相关信息，可以决定所有人员的调度，财务的决定使用",
            "createTime": "2021-01-12",
            "status":1
        }
    ]
}


export default[
    {
        url: '/vue-admin-template/ums-role/list',
        type: 'get',
        response: config => {
            // const { page = 1, limit = 3 } = config.query
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
        url: '/vue-admin-template/ums-role/new',
        type: 'post',
        response: config => {
          var product = config.body;
          data.items.push(product);
          return {
            code: 20000,
            data: {
              message: "添加角色成功"
            }
          }
        }
      },
      {
        url: '/vue-admin-template/ums-role/delete/',
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
              message: "删除角色成功"
            }
          }
        }
      },
]