import Mock from 'mockjs'

const data = {
    items: [
        {
            "id": 1,
            "name": "商品管理",
            "level": 0
        },
        {
            "id": 2,
            "name": "订单管理",
            "level": 0
        },
        {
            "id": 3,
            "name": "权限管理",
            "level": 0
        },
        {
            "id": 4,
            "name": "商品列表",
            "level": 1
        },
        {
            "id": 5,
            "name": "添加商品",
            "level": 2
        },
        {
            "id": 6,
            "name": "订单列表",
            "level": 1
        },
        {
            "id": 7,
            "name": "添加订单",
            "level": 2
        },
        {
            "id": 8,
            "name": "用户列表",
            "level": 1
        },
        {
            "id": 9,
            "name": "角色列表",
            "level": 1
        },
        {
            "id": 10,
            "name": "权限列表",
            "level": 1
        },
        {
            "id": 11,
            "name": "分类参数",
            "level": 1
        },
        {
            "id": 13,
            "name": "商品修改",
            "level": 2
        },
        {
            "id": 14,
            "name": "商品删除",
            "level": 2
        },
        {
            "id": 15,
            "name": "商品分类",
            "level": 1
        },
        {
            "id": 16,
            "name": "添加分类",
            "level": 2
        },
        {
            "id": 17,
            "name": "商品分类",
            "level": 2
        },
        {
            "id": 18,
            "name": "用户管理",
            "level": 0
        },
        {
            "id": 19,
            "name": "添加角色",
            "level": 2
        },
        {
            "id": 20,
            "name": "删除角色",
            "level": 2
        },
        {
            "id": 21,
            "name": "更新角色",
            "level": 2
        },
        {
            "id": 22,
            "name": "角色授权",
            "level": 2
        },
        {
            "id": 23,
            "name": "取消角色授权",
            "level": 2
        },
        {
            "id": 24,
            "name": "获取用户详情",
            "level": 2
        },
        {
            "id": 25,
            "name": "分配用户角色",
            "level": 2
        },
        {
            "id": 26,
            "name": "获取角色列表",
            "level": 2
        },
        {
            "id": 27,
            "name": "获取角色详情",
            "level": 2
        },
        {
            "id": 28,
            "name": "更新角色信息",
            "level": 2
        },
        {
            "id": 29,
            "name": "获取参数列表",
            "level": 2
        },
        {
            "id": 30,
            "name": "创建商品参数",
            "level": 2
        }
        ,
        {
            "id": 31,
            "name": "删除商品参数",
            "level": 2
        },
        {
            "id": 32,
            "name": "数据统计",
            "level": 0
        },
        {
            "id": 33,
            "name": "数据报表",
            "level": 1
        },
        {
            "id": 34,
            "name": "查看权限",
            "level": 2
        },
        {
            "id": 35,
            "name": "查看数据",
            "level": 2
        },
        {
            "id": 36,
            "name": "获取分类详情",
            "level": 2
        },
        {
            "id": 37,
            "name": "更新商品图片",
            "level": 2
        },
        {
            "id": 38,
            "name": "更新商品属性",
            "level": 2
        },
        {
            "id": 39,
            "name": "更新商品状态",
            "level": 2
        },
        {
            "id": 40,
            "name": "获取商品详情",
            "level": 2
        },
        {
            "id": 41,
            "name": "订单更新",
            "level": 2
        },
        {
            "id": 42,
            "name": "获取订单详情",
            "level": 2
        },
        {
            "id": 43,
            "name": "分类参数添加",
            "level": 2
        },
        {
            "id": 44,
            "name": "分类参数删除",
            "level": 2
        },
        {
            "id": 45,
            "name": "设置管理状态",
            "level": 2
        }
    ]
}
exports.data=data;

export default [
    {
        url: '/vue-admin-template/ums-menu/list',
        type: 'get',
        response: config => {
            const { page = 1, limit = 5 } = config.query
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
        url: '/vue-admin-template/ums-menu/delete',
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
              message: "删除权限成功"
            }
          }
        }
      },
      {
        url: '/vue-admin-template/ums-menu/new',
        type: 'post',
        response: config => {
          var product = config.body;
          data.items.push(product);
          return {
            code: 20000,
            data: {
              message: "添加权限成功"
            }
          }
        }
      },
]