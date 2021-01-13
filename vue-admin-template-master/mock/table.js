import Mock from 'mockjs'

const data = Mock.mock({
  //生成一个items数组 数组长度是30
  //{}表示items数组里面的每一个元素
  'items|30': [{
    id: '@id',   //随机取一个ID，key为id
    title: '@sentence(10, 20)',   //随机取一段文本，key为title
    'status|1': ['published', 'draft', 'deleted'],   //从['published', 'draft', 'deleted']数组中选择一个元素，key为status
    author: 'name',  //写死author为name
    display_time: '@datetime',   //取一个随机的时间，key为display_time
    pageviews: '@integer(300, 5000)'  //取一个整数，值在300到5000之间，key为pageviews
  }]
})

export default [
  {
    url: '/vue-admin-template/table/list',
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
    url: '/vue-admin-template/table/test2',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          'names|20':[
            {
              'name|+1': 100,
              'count|10-200':20,
              'prop|3':{
                name:"kk",
                age:123,
                gender:'11',
                address:"xxx"
              }
            }
          ],
          'mm|1-10':['aa','bb','cc'],
          'image':'@image'
        }
      }
    }
  }
]
