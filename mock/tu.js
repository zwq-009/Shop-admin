import Mock from 'mockjs'

const data = Mock.mock({
  'items': [{
      'name|1': [
        [120, 132, 101, 134, 90, 230, 210],[220, 182, 191, 234, 290, 330, 310],
        [120, 142, 145, 134, 90, 230, 210],[220, 132, 191, 234, 290, 330, 310],
        [120, 152, 101, 144, 90, 230, 210],[220, 182, 131, 234, 290, 330, 310],
        [120, 162, 131, 134, 90, 230, 210],[220, 182, 191, 256, 290, 330, 310],
        [120, 124, 101, 134, 90, 230, 210],[220, 182, 191, 234, 280, 330, 310]
      ]
    }

  ]

})
console.log(data);
export default [{
    url: '/vue-admin-template/tu/mainwatch',
    type: 'get',
    response: config => {
      //   const items = data.items
      //   console.log(items);
      return {
        code: 20000,
        data: {
          //   total: items.length,
          items: data
        }
      }
    }
  },
  //   {
  //     url: '/vue-admin-template/product/new',
  //     type: 'post',
  //     response: config => {
  //       var product = config.body;
  //       // console.log(product, "99999999999999999999999999")
  //       data.items.push(product);
  //       return {
  //         code: 20000,
  //         data: {
  //           message: "添加商品成功"
  //         }
  //       }
  //     }
  //   }

]
