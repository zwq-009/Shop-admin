import Mock from 'mockjs'

const data = {
  items: [{
    "id": 87,
    "title": "耐克 大童 NIKE AIR FORCE 1 (GS) AF1 运动童鞋",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img14.360buyimg.com/n5/jfs/t1/134647/40/11261/37251/5f741cc4E54e44a10/d4604c48890771ca.jpg",
    "sell_price": 599,
    "stock_quantity": 60
  },
  {
    "id": 88,
    "title": "耐克 男子 NIKE AIR FORCE 1'07 PRM 运动鞋",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img11.360buyimg.com/n5/jfs/t1/148992/13/14740/229783/5fb47942Eecd044c5/da1034a874877fb2.png",
    "sell_price": 999,
    "stock_quantity": 200
  },
  {
    "id": 89,
    "title": "耐克 男子 NIKE AIR MAX 270 REACT 运动鞋",
    "add_time": "2021-1-11 10:00:00",
    "click": 4,
    "img_url": "https://img10.360buyimg.com/n5/jfs/t1/110508/12/10754/51324/5e82b5ebE0f6e8041/58dd765687e4449f.jpg",
    "sell_price": 759,
    "stock_quantity": 60
  },
  {
    "id": 90,
    "title": "耐克 女子 NIKE AIR MAX 2090 运动鞋",
    "add_time": "2021-1-11 10:00:00",
    "click": 1,
    "img_url": "https://img10.360buyimg.com/n5/jfs/t1/151773/23/6389/271559/5fb5cb7eE4c1c91e9/ac6ce77f8ed98c37.png",
    "sell_price": 1099,
    "stock_quantity": 103
  },
  {
    "id": 91,
    "title": "耐克 女子 NIKE AIR MAX VERONA 运动鞋",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img10.360buyimg.com/n5/jfs/t1/129587/17/14136/248654/5f9bd967E68592cd9/b2b9ee6871f014b1.png",
    "sell_price": 649,
    "stock_quantity": 10
  },
  {
    "id": 92,
    "title": "耐克 女子 NIKE AF1 SHADOW 运动鞋",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img13.360buyimg.com/n5/jfs/t1/135620/37/14039/286148/5f9e3bc0Ebf703e16/4de03e53aea7c163.png",
    "sell_price": 899,
    "stock_quantity": 19
  },
  {
    "id": 93,
    "title": "耐克 女子 NIKE AIR MAX 270 REACT 运动鞋",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img14.360buyimg.com/n5/jfs/t1/115387/30/12984/226974/5f1641eeE659005bf/655b006d22b9a406.png",
    "sell_price": 779,
    "stock_quantity": 10
  },
  {
    "id": 94,
    "title": "耐克 女子 NIKE AF1 SHADOW 运动鞋",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img11.360buyimg.com/n5/jfs/t1/146610/39/13203/284575/5fa4bf07Ea501c6b4/1e967b5e52feb3a6.png",
    "sell_price": 899,
    "stock_quantity": 100
  },
  {
    "id": 95,
    "title": "AJ1 男子 AIR JORDAN 1 MID 运动鞋 ",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img12.360buyimg.com/n5/jfs/t1/121025/11/16891/261110/5f9bf540Ec89c76c2/25b9aa5bb99b5176.png",
    "sell_price": 969,
    "stock_quantity": 100
  },
  {
    "id": 96,
    "title": " 耐克 男子 NIKE AIR FORCE 1HIGH'07LV8 3M 运动鞋",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img14.360buyimg.com/n5/jfs/t1/121720/8/19738/269495/5fbc6b70E0bc3235a/aadc808a8ce7b715.png",
    "sell_price": 849,
    "stock_quantity": 100
  }
    ,
  {
    "id": 97,
    "title": " adidas UltraBOOST 19 m男鞋跑步运动鞋",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img14.360buyimg.com/n5/jfs/t1/135632/40/12201/67709/5f8516aeEa1832629/f927ccdf6bf5b26a.jpg",
    "sell_price": 679,
    "stock_quantity": 100
  }
    ,
  {
    "id": 98,
    "title": " adidas 三叶草 STAN SMITH 男女经典运动鞋",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img10.360buyimg.com/n5/jfs/t1/170092/8/138/45332/5fed3aa9E2d9e040e/d6287d51b86041df.jpg",
    "sell_price": 799,
    "stock_quantity": 100
  }
    ,
  {
    "id": 99,
    "title": " adidas 三叶草 NITE JOGGER",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img12.360buyimg.com/n5/jfs/t1/140167/25/6699/66536/5f476216E1989b8d3/79b55b0c9cdab923.jpg",
    "sell_price": 789,
    "stock_quantity": 100
  }
    ,
  {
    "id": 100,
    "title": " adidas 三叶草 SUPERSTAR W 女鞋经典运动鞋",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img12.360buyimg.com/n5/jfs/t1/136081/29/11151/54686/5f72b5a8E5fd72841/89ed40b50370d8d7.jpg",
    "sell_price": 319,
    "stock_quantity": 100
  }
    ,
  {
    "id": 101,
    "title": "New Balance 2021新款中性款327系列MS327PA",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img13.360buyimg.com/n5/jfs/t1/135625/8/17353/65479/5fbe25bdE4f13598f/6d91642bffb1689c.jpg",
    "sell_price": 899,
    "stock_quantity": 100
  }
    ,
  {
    "id": 102,
    "title": "New Balance秋冬中性款878系列CM878MA1",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img10.360buyimg.com/n5/jfs/t1/148962/39/3703/81053/5f1a9194E0829bfb7/c612b808101b8076.jpg",
    "sell_price": 899,
    "stock_quantity": 100
  }
    ,
  {
    "id": 103,
    "title": " New Balance ML570BNA复古休闲鞋",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img12.360buyimg.com/n5/jfs/t1/111242/14/13906/60980/5f27e113E958af4e5/7fde898da9b0e0d3.jpg",
    "sell_price": 759,
    "stock_quantity": 100
  }
    ,
  {
    "id": 104,
    "title": "New Balance 2021新款中性款997H系列997HCA",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img11.360buyimg.com/n5/jfs/t1/156830/6/4903/44667/5ff7c259E8c78169a/22974bc1241873b8.jpg",
    "sell_price": 799,
    "stock_quantity": 14
  }
    ,
  {
    "id": 105,
    "title": "New Balance 秋冬女款608系列WX608WT",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img11.360buyimg.com/n5/jfs/t1/49705/4/11988/55113/5d8c7bd3E0fd69ddf/b1d8a330e29a4900.jpg",
    "sell_price": 599,
    "stock_quantity": 88
  }
    ,
  {
    "id": 106,
    "title": "New Balance 美产990系列M990BK5",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img11.360buyimg.com/n5/jfs/t27958/199/1094949563/84321/b3f43262/5cd590eaN3c498797.jpg",
    "sell_price": 1899,
    "stock_quantity": 125
  }
    ,
  {
    "id": 107,
    "title": " New Balance美产997系列M997BK",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img10.360buyimg.com/n5/jfs/t1/72237/11/4137/51903/5d24411dE19f6d2a3/6b2f28ffa9a19841.jpg",
    "sell_price": 1899,
    "stock_quantity": 48
  }
    ,
  {
    "id": 108,
    "title": "New Balance 2021新款女款708系列",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img12.360buyimg.com/n5/jfs/t1/153958/30/13843/53417/5ff70da2E80311df2/1540bcb2a29b1d4e.jpg",
    "sell_price": 699,
    "stock_quantity": 57
  }
    ,
  {
    "id": 109,
    "title": "New Balance 秋冬中性款850系列ML850CF",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img10.360buyimg.com/n5/jfs/t1/87581/9/7259/68482/5dfb0eebEdf1457ea/e18ea7d5b886fe20.jpg",
    "sell_price": 799,
    "stock_quantity": 100
  }
    ,
  {
    "id": 110,
    "title": "New Balance 2021新款男款1080系列M1080B11",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img13.360buyimg.com/n5/jfs/t1/157443/20/1598/65827/5ff2ceb3E73c6c918/7d7684bc0250e41f.jpg",
    "sell_price": 1199,
    "stock_quantity": 34
  }
    ,
  {
    "id": 111,
    "title": "CONVERSE 1970s 高帮百搭帆布鞋绿色",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img14.360buyimg.com/n5/jfs/t1/148843/7/17658/66483/5fd06f66E474040d1/04c555ee51cdaccc.jpg",
    "sell_price": 569,
    "stock_quantity": 156
  }
    ,
  {
    "id": 112,
    "title": "CONVERSE Chuck Taylor All Star",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img12.360buyimg.com/n5/jfs/t1/24129/3/6808/49951/5c63f20dEce158d9b/915e22126984e441.jpg",
    "sell_price": 539,
    "stock_quantity": 210
  }
    ,
  {
    "id": 113,
    "title": "CONVERSE One Star低帮复古板鞋",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img10.360buyimg.com/n5/jfs/t1/121951/9/6661/63325/5f0595dcEce85e2a6/26a2f6412124ab91.jpg",
    "sell_price": 569,
    "stock_quantity": 175
  }
    ,
  {
    "id": 114,
    "title": "CONVERSE 1970s经典低帮复古休闲帆布鞋",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img12.360buyimg.com/n5/jfs/t25012/48/475456267/69074/77860279/5b714c29N57744bc0.jpg",
    "sell_price": 539,
    "stock_quantity": 64
  }
    ,
  {
    "id": 115,
    "title": " vans 牛油果绿男鞋女鞋Era低帮板鞋",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img10.360buyimg.com/n5/jfs/t1/169566/25/37/190858/5fec4435Eb993107a/080e2e533e5585bf.jpg",
    "sell_price": 539,
    "stock_quantity": 88
  }
    ,
  {
    "id": 116,
    "title": "vans 经典款黑白男鞋女鞋SK8-Hi高帮",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img11.360buyimg.com/n5/jfs/t1/145675/13/6615/172176/5f4621f6E0c3f93eb/bde4e16b0280231b.jpg",
    "sell_price": 569,
    "stock_quantity": 165
  }
    ,
  {
    "id": 117,
    "title": "vans 蓝白棋盘格安纳海姆SK8-Hi高帮",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img13.360buyimg.com/n5/jfs/t1/136194/2/13845/179089/5f97ef41Eceadc3f7/3b0db21d839e06f0.jpg",
    "sell_price": 695,
    "stock_quantity": 75
  }
    ,
  {
    "id": 118,
    "title": " Vans解构一脚蹬小香风男鞋女鞋Slip-On低帮休闲鞋",
    "add_time": "2021-1-11 10:00:00",
    "click": 0,
    "img_url": "https://img12.360buyimg.com/n5/jfs/t1/130611/37/13093/86948/5f8e4801E59c58cd4/58d4223a98ebf33d.jpg",
    "sell_price": 665,
    "stock_quantity": 23
  }
  ]
}

export default [
  // 获取商品列表
  {
    url: '/vue-admin-template/product/list',
    type: 'get',
    response: config => {
      // 获取分页信息
      const { page = 1, limit = 4 } = config.query
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
  // 新增商品
  {
    url: '/vue-admin-template/product/new',
    type: 'post',
    response: config => {
      var product = config.body;
      // console.log(product, "99999999999999999999999999")
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
