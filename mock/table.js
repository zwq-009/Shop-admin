import Mock from 'mockjs'

const data = Mock.mock({
  //造了30条数据,生成一个长度为30的数组
  // {}表示数组中的每一个元素
  'items|30': [{
    id: '@id', //随机取一个id，key为id
    title: '@sentence(10, 20)', // 随机取一段文本，key为title
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
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
    url: '/vue-admin-template/table/test1',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          'name|3': [{name:'小明'},{name:'小红'},{name:'小马  '}]
        }
      }
    }
  }
]
