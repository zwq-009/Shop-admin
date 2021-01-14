import Mock from 'mockjs'

const data = {
  items: [{
    "id": 83,
    "title": "服饰",
    "productCount":300,
    "productUnit":"件",
    "level":"一级",
    "hidden":0,
    "navStatus":1,
    "showStatus":1,
    "img_url":"https://img14.360buyimg.com/n5/jfs/t1/116386/11/3006/95541/5ea53998Eeda9e2e7/cad82491f41864b0.jpg"
  },
  {
    "id": 84,
    "title": "运动鞋",
    "productCount":400,
    "productUnit":"双",
    "level":"一级",
    "hidden":0,
    "navStatus":1,
    "showStatus":1,
    "img_url":"https://img12.360buyimg.com/n5/jfs/t1/152390/10/3745/316184/5f992d17Ea0ee7311/eb555f0fe8262ed1.png"
  },
  {
    "id": 85,
    "title": "背包",
    "productCount":260,
    "productUnit":"件",
    "level":"一级",
    "hidden":0,
    "navStatus":1,
    "showStatus":1,
    "img_url":"https://img12.360buyimg.com/n7/jfs/t1/83659/11/6566/244398/5d4be5f8E342fc707/6124b1b559963a22.jpg"
  },
  {
    "id": 86,
    "title": "运动配饰",
    "productCount":300,
    "productUnit":"件",
    "level":"一级",
    "hidden":0,
    "navStatus":1,
    "showStatus":1,
    "img_url":"https://img10.360buyimg.com/n7/jfs/t1/106630/16/9077/74896/5e0b03d2Ea452016d/8201c25e2f633b4d.jpg"
  },
    {
    "id": 87,
    "title": "耐克 大童 NIKE AIR FORCE 1 (GS) AF1 运动童鞋",
    "add_time": "2021-1-11 10:00:00",
    "productCount":400,
    "productUnit":"双",
    "img_url": "https://img14.360buyimg.com/n5/jfs/t1/134647/40/11261/37251/5f741cc4E54e44a10/d4604c48890771ca.jpg",
    "sell_price": 599,
    "stock_quantity": 60,
    "level":"二级",
    "hidden":0,
    "navStatus":1,
    "showStatus":1
  },
  {
    "id": 88,
    "title": "耐克 男子 NIKE AIR FORCE 1'07 PRM 运动鞋",
    "add_time": "2021-1-11 10:00:00",
    "productCount":300,
    "productUnit":"件",
    "img_url": "https://img11.360buyimg.com/n5/jfs/t1/148992/13/14740/229783/5fb47942Eecd044c5/da1034a874877fb2.png",
    "sell_price": 999,
    "stock_quantity": 200,
    "level":"二级",
    "hidden":0,
    "navStatus":1,
    "showStatus":1
  },
  {
    "id": 89,
    "title": "耐克 男子 NIKE AIR MAX 270 REACT 运动鞋",
    "add_time": "2021-1-11 10:00:00",
    "productCount":300,
    "productUnit":"件",
    "img_url": "https://img10.360buyimg.com/n5/jfs/t1/110508/12/10754/51324/5e82b5ebE0f6e8041/58dd765687e4449f.jpg",
    "sell_price": 759,
    "stock_quantity": 60,
    "level":"二级",
    "hidden":0,
    "navStatus":1,
    "showStatus":1
  },
  {
    "id": 90,
    "title": "耐克 女子 NIKE AIR MAX 2090 运动鞋",
    "add_time": "2021-1-11 10:00:00",
    "productCount":300,
    "productUnit":"件",
    "img_url": "https://img10.360buyimg.com/n5/jfs/t1/151773/23/6389/271559/5fb5cb7eE4c1c91e9/ac6ce77f8ed98c37.png",
    "sell_price": 1099,
    "stock_quantity": 103,
    "level":"二级",
    "navStatus":1,
    "showStatus":1
  },
  {
    "id": 91,
    "title": "耐克 女子 NIKE AIR MAX VERONA 运动鞋",
    "add_time": "2021-1-11 10:00:00",
    "productCount":300,
    "productUnit":"件",
    "img_url": "https://img10.360buyimg.com/n5/jfs/t1/129587/17/14136/248654/5f9bd967E68592cd9/b2b9ee6871f014b1.png",
    "sell_price": 649,
    "stock_quantity": 10,
    "level":"二级",
    "navStatus":1,
    "showStatus":1
  },
  {
    "id": 92,
    "title": "耐克 女子 NIKE AF1 SHADOW 运动鞋",
    "add_time": "2021-1-11 10:00:00",
    "productCount":300,
    "productUnit":"件",
    "img_url": "https://img13.360buyimg.com/n5/jfs/t1/135620/37/14039/286148/5f9e3bc0Ebf703e16/4de03e53aea7c163.png",
    "sell_price": 899,
    "stock_quantity": 19,
    "level":"二级",
    "navStatus":1,
    "showStatus":1
  },
  {
    "id": 93,
    "title": "耐克 女子 NIKE AIR MAX 270 REACT 运动鞋",
    "add_time": "2021-1-11 10:00:00",
    "productCount":300,
    "productUnit":"件",
    "img_url": "https://img14.360buyimg.com/n5/jfs/t1/115387/30/12984/226974/5f1641eeE659005bf/655b006d22b9a406.png",
    "sell_price": 779,
    "stock_quantity": 10,
    "level":"二级",
    "navStatus":1,
    "showStatus":1
  },
  {
    "id": 94,
    "title": "耐克 女子 NIKE AF1 SHADOW 运动鞋",
    "add_time": "2021-1-11 10:00:00",
    "productCount":300,
    "productUnit":"件",
    "img_url": "https://img11.360buyimg.com/n5/jfs/t1/146610/39/13203/284575/5fa4bf07Ea501c6b4/1e967b5e52feb3a6.png",
    "sell_price": 899,
    "stock_quantity": 100,
    "level":"二级",
    "navStatus":1,
    "showStatus":1
  },
  {
    "id": 95,
    "title": "AJ1 男子 AIR JORDAN 1 MID 运动鞋 ",
    "add_time": "2021-1-11 10:00:00",
    "productCount":300,
    "productUnit":"件",
    "img_url": "https://img12.360buyimg.com/n5/jfs/t1/121025/11/16891/261110/5f9bf540Ec89c76c2/25b9aa5bb99b5176.png",
    "sell_price": 969,
    "stock_quantity": 100,
    "level":"二级",
    "navStatus":1,
    "showStatus":1
  },
  {
    "id": 96,
    "title": "耐克（NIKE） 男女 双肩包 背包 训练包 学生书包 电脑包 BRASILIA 运动包",
    "productCount":400,
    "productUnit":"件",
    "level":"二级",
    "hidden":0,
    "navStatus":1,
    "showStatus":1,
"img_url":"https://img13.360buyimg.com/n7/jfs/t1/111248/11/11123/237136/5ef996ffE4cbdf964/38572f42b07bcbfc.jpg"
  },
{
    "id": 97,
    "title": "耐克NIKE 男女通款 腰包 胸包 斜挎包 HERITAGE 休闲包 BA5750-452黑曜石色",
    "productCount":400,
    "productUnit":"件",
    "level":"二级",
    "hidden":0,
    "navStatus":1,
    "showStatus":1,
 "img_url":"https://img10.360buyimg.com/n5/jfs/t1/146184/9/8088/54289/5f59dfc3E0bf221c5/a692e82d5297727e.jpg"
  },
{
    "id": 98,
    "title": "Nike耐克王一博同款男女包2020冬季新款单肩包时尚百搭运动休闲反光斜挎包腰包",
    "productCount":400,
    "productUnit":"件",
    "level":"二级",
    "hidden":0,
    "navStatus":1,
    "showStatus":1,
"img_url":"https://img12.360buyimg.com/n5/jfs/t1/151632/4/14605/191079/5ffe60b5Ed4560685/b24810822c9e8230.jpg"
  },
{
    "id": 99,
    "title": "耐克 NIKE SPORTSWEAR HERITAGE 腰包 DB4702 DB4702-010 F",
    "productCount":400,
    "productUnit":"件",
    "level":"二级",
    "hidden":0,
    "navStatus":1,
    "showStatus":1,
"img_url":"https://img12.360buyimg.com/n5/jfs/t1/151093/1/2721/66478/5f814772E68d8e476/15286a1d19d99f2f.jpg"
  },
{
    "id": 100,
    "title": "耐克 NIKE 男子 套头衫 AS M NSW CREW FT GX 运动服 CU4508-910 白色 L码",
    "productCount":400,
    "productUnit":"件",
    "level":"二级",
    "hidden":0,
    "navStatus":1,
    "showStatus":1,
"img_url":"https://img13.360buyimg.com/n5/jfs/t1/149751/10/4386/106144/5f27a4daE0ac383ba/8a4b74ea10b6232b.jpg"
  },
{
    "id": 101,
    "title": "NBA连帽衫 Nike 球队Logo 男子运动卫衣 AA3666-657 XL",
    "productCount":400,
    "productUnit":"件",
    "level":"二级",
    "hidden":0,
    "navStatus":1,
    "showStatus":1,
"img_url":"https://img11.360buyimg.com/n5/jfs/t1/2037/13/4763/65248/5b9d19e0E8d7a09ce/f46c1b3158744cb8.jpg"
  },
{
    "id": 102,
    "title": " NBA-Nike 湖人队詹姆斯 CE城市版城市版运动连帽卫衣CJ9547 图片色 S",
    "productCount":400,
    "productUnit":"件",
    "level":"二级",
    "hidden":0,
    "navStatus":1,
    "showStatus":1,
"img_url":"https://img10.360buyimg.com/n5/jfs/t1/96052/22/9854/80521/5e130547E93e6baec/ce15926aad2c5d32.jpg"
  },
{
    "id": 103,
    "title": " NIKE耐克跑步围脖装备 2021春季新骑行头巾运动面罩脖套户外围脖男女头套围巾头套 CZ1705-011/围脖/面罩 均码",
    "productCount":400,
    "productUnit":"件",
    "level":"二级",
    "hidden":0,
    "navStatus":1,
    "showStatus":1,
"img_url":"https://img14.360buyimg.com/n5/jfs/t1/138769/24/10613/183374/5f857847E06b94fc0/47b690dbf2d4b147.jpg"
  },
{
    "id": 104,
    "title": " NIKE耐克手套男巴黎切尔西球迷手套保暖防寒冬足球训练户外骑行手套 巴萨 GS0379-451 M",
    "productCount":400,
    "productUnit":"件",
    "level":"二级",
    "hidden":0,
    "navStatus":1,
    "showStatus":1,
"img_url":"https://img11.360buyimg.com/n5/jfs/t1/137532/17/17916/108150/5fc4640eE792ba094/d4a61a5e59295cc9.jpg"
  },
  // {
  //   "id": 96,
  //   "title": " 耐克 男子 NIKE AIR FORCE 1HIGH'07LV8 3M 运动鞋",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img14.360buyimg.com/n5/jfs/t1/121720/8/19738/269495/5fbc6b70E0bc3235a/aadc808a8ce7b715.png",
  //   "sell_price": 849,
  //   "stock_quantity": 100
  // }
  //   ,
  // {
  //   "id": 97,
  //   "title": " adidas UltraBOOST 19 m男鞋跑步运动鞋",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img14.360buyimg.com/n5/jfs/t1/135632/40/12201/67709/5f8516aeEa1832629/f927ccdf6bf5b26a.jpg",
  //   "sell_price": 679,
  //   "stock_quantity": 100
  // }
  //   ,
  // {
  //   "id": 98,
  //   "title": " adidas 三叶草 STAN SMITH 男女经典运动鞋",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img10.360buyimg.com/n5/jfs/t1/170092/8/138/45332/5fed3aa9E2d9e040e/d6287d51b86041df.jpg",
  //   "sell_price": 799,
  //   "stock_quantity": 100
  // }
  //   ,
  // {
  //   "id": 99,
  //   "title": " adidas 三叶草 NITE JOGGER",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img12.360buyimg.com/n5/jfs/t1/140167/25/6699/66536/5f476216E1989b8d3/79b55b0c9cdab923.jpg",
  //   "sell_price": 789,
  //   "stock_quantity": 100
  // }
  //   ,
  // {
  //   "id": 100,
  //   "title": " adidas 三叶草 SUPERSTAR W 女鞋经典运动鞋",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img12.360buyimg.com/n5/jfs/t1/136081/29/11151/54686/5f72b5a8E5fd72841/89ed40b50370d8d7.jpg",
  //   "sell_price": 319,
  //   "stock_quantity": 100
  // }
  //   ,
  // {
  //   "id": 101,
  //   "title": "New Balance 2021新款中性款327系列MS327PA",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img13.360buyimg.com/n5/jfs/t1/135625/8/17353/65479/5fbe25bdE4f13598f/6d91642bffb1689c.jpg",
  //   "sell_price": 899,
  //   "stock_quantity": 100
  // }
  //   ,
  // {
  //   "id": 102,
  //   "title": "New Balance秋冬中性款878系列CM878MA1",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img10.360buyimg.com/n5/jfs/t1/148962/39/3703/81053/5f1a9194E0829bfb7/c612b808101b8076.jpg",
  //   "sell_price": 899,
  //   "stock_quantity": 100
  // }
  //   ,
  // {
  //   "id": 103,
  //   "title": " New Balance ML570BNA复古休闲鞋",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img12.360buyimg.com/n5/jfs/t1/111242/14/13906/60980/5f27e113E958af4e5/7fde898da9b0e0d3.jpg",
  //   "sell_price": 759,
  //   "stock_quantity": 100
  // }
  //   ,
  // {
  //   "id": 104,
  //   "title": "New Balance 2021新款中性款997H系列997HCA",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img11.360buyimg.com/n5/jfs/t1/156830/6/4903/44667/5ff7c259E8c78169a/22974bc1241873b8.jpg",
  //   "sell_price": 799,
  //   "stock_quantity": 14
  // }
  //   ,
  // {
  //   "id": 105,
  //   "title": "New Balance 秋冬女款608系列WX608WT",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img11.360buyimg.com/n5/jfs/t1/49705/4/11988/55113/5d8c7bd3E0fd69ddf/b1d8a330e29a4900.jpg",
  //   "sell_price": 599,
  //   "stock_quantity": 88
  // }
  //   ,
  // {
  //   "id": 106,
  //   "title": "New Balance 美产990系列M990BK5",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img11.360buyimg.com/n5/jfs/t27958/199/1094949563/84321/b3f43262/5cd590eaN3c498797.jpg",
  //   "sell_price": 1899,
  //   "stock_quantity": 125
  // }
  //   ,
  // {
  //   "id": 107,
  //   "title": " New Balance美产997系列M997BK",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img10.360buyimg.com/n5/jfs/t1/72237/11/4137/51903/5d24411dE19f6d2a3/6b2f28ffa9a19841.jpg",
  //   "sell_price": 1899,
  //   "stock_quantity": 48
  // }
  //   ,
  // {
  //   "id": 108,
  //   "title": "New Balance 2021新款女款708系列",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img12.360buyimg.com/n5/jfs/t1/153958/30/13843/53417/5ff70da2E80311df2/1540bcb2a29b1d4e.jpg",
  //   "sell_price": 699,
  //   "stock_quantity": 57
  // }
  //   ,
  // {
  //   "id": 109,
  //   "title": "New Balance 秋冬中性款850系列ML850CF",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img10.360buyimg.com/n5/jfs/t1/87581/9/7259/68482/5dfb0eebEdf1457ea/e18ea7d5b886fe20.jpg",
  //   "sell_price": 799,
  //   "stock_quantity": 100
  // }
  //   ,
  // {
  //   "id": 110,
  //   "title": "New Balance 2021新款男款1080系列M1080B11",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img13.360buyimg.com/n5/jfs/t1/157443/20/1598/65827/5ff2ceb3E73c6c918/7d7684bc0250e41f.jpg",
  //   "sell_price": 1199,
  //   "stock_quantity": 34
  // }
  //   ,
  // {
  //   "id": 111,
  //   "title": "CONVERSE 1970s 高帮百搭帆布鞋绿色",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img14.360buyimg.com/n5/jfs/t1/148843/7/17658/66483/5fd06f66E474040d1/04c555ee51cdaccc.jpg",
  //   "sell_price": 569,
  //   "stock_quantity": 156
  // }
  //   ,
  // {
  //   "id": 112,
  //   "title": "CONVERSE Chuck Taylor All Star",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img12.360buyimg.com/n5/jfs/t1/24129/3/6808/49951/5c63f20dEce158d9b/915e22126984e441.jpg",
  //   "sell_price": 539,
  //   "stock_quantity": 210
  // }
  //   ,
  // {
  //   "id": 113,
  //   "title": "CONVERSE One Star低帮复古板鞋",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img10.360buyimg.com/n5/jfs/t1/121951/9/6661/63325/5f0595dcEce85e2a6/26a2f6412124ab91.jpg",
  //   "sell_price": 569,
  //   "stock_quantity": 175
  // }
  //   ,
  // {
  //   "id": 114,
  //   "title": "CONVERSE 1970s经典低帮复古休闲帆布鞋",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img12.360buyimg.com/n5/jfs/t25012/48/475456267/69074/77860279/5b714c29N57744bc0.jpg",
  //   "sell_price": 539,
  //   "stock_quantity": 64
  // }
  //   ,
  // {
  //   "id": 115,
  //   "title": " vans 牛油果绿男鞋女鞋Era低帮板鞋",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img10.360buyimg.com/n5/jfs/t1/169566/25/37/190858/5fec4435Eb993107a/080e2e533e5585bf.jpg",
  //   "sell_price": 539,
  //   "stock_quantity": 88
  // }
  //   ,
  // {
  //   "id": 116,
  //   "title": "vans 经典款黑白男鞋女鞋SK8-Hi高帮",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img11.360buyimg.com/n5/jfs/t1/145675/13/6615/172176/5f4621f6E0c3f93eb/bde4e16b0280231b.jpg",
  //   "sell_price": 569,
  //   "stock_quantity": 165
  // }
  //   ,
  // {
  //   "id": 117,
  //   "title": "vans 蓝白棋盘格安纳海姆SK8-Hi高帮",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img13.360buyimg.com/n5/jfs/t1/136194/2/13845/179089/5f97ef41Eceadc3f7/3b0db21d839e06f0.jpg",
  //   "sell_price": 695,
  //   "stock_quantity": 75
  // }
  //   ,
  // {
  //   "id": 118,
  //   "title": " Vans解构一脚蹬小香风男鞋女鞋Slip-On低帮休闲鞋",
  //   "add_time": "2021-1-11 10:00:00",
  //   "click": 0,
  //   "img_url": "https://img12.360buyimg.com/n5/jfs/t1/130611/37/13093/86948/5f8e4801E59c58cd4/58d4223a98ebf33d.jpg",
  //   "sell_price": 665,
  //   "stock_quantity": 23
  // }
]
}
export default [
    {
      url: '/vue-admin-template/goods/list',
      type: 'get',
      response: config => {
        //获取分页信息
        const {page = 1, limit = 20} = config.query 
        const items = data.items
        return {
          code: 20000,
          data: {
            total: items.length,
            //根据分页信息返回数据
            items: items.slice((page-1)*limit,limit*page)
          }
        }
      }
    }]