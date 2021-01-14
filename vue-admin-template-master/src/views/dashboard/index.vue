<template>
  <div class="echarts">
    <div class="dashboard-container">
      <div class="dashboard-text">
        <h1
          v-if="grt=(ho<9?'早上好，':
                    ho<12?'上午好':
                    ho<14?'中午好':
                    ho<19?'下午好':
                    '晚上好'
                    )"
        >{{grt}}</h1>
        尊敬的{{ name }} 祝您新的一天工作愉快
        <div class="tq" v-if="listt.length">
          今天是 {{listt[0].date}} {{listt[0].type}} 风向为 {{listt[0].fengxiang}} {{listt[0].high}} 至 {{listt[0].low}}
          <br />天凉，注意加衣，预防感冒
        </div>
      </div>
      <div class="rr">
        <h3>快捷操作:</h3>
        <ul>
          <router-link :to="{path:'/order'}">
            <li>
              <i class="el-icon-s-platform"></i>订单列表
            </li>
          </router-link>
          <router-link :to="{path:'/order'}">
            <li>
              <i class="el-icon-time"></i>待退款
            </li>
          </router-link>
          <router-link :to="{path:'/product'}">
            <li>
              <i class="el-icon-thumb"></i>商品上架
            </li>
          </router-link>
        </ul>
        <ul>
          <router-link :to="{path:'/data/mainwatch'}">
            <li>
              <i class="el-icon-s-platform"></i>数据分析
            </li>
          </router-link>
          <router-link :to="{path:'/permission'}">
            <li>
              <i class="el-icon-time"></i>个人中心
            </li>
          </router-link>
          <router-link :to="{path:'/product'}">
            <li>
              <i class="el-icon-thumb"></i>查询商品分类
            </li>
          </router-link>
        </ul>
      </div>
      <div class="db"></div>
    </div>
    <div class="qc"></div>
    <div class="dp">
      <p class="p1">全国客户上线数量：</p>
      <div class="l" :style="{height:'600px',width:'800px'}" ref="myEchart"></div>
      <div class="r">
        <h3 style="color:red">商品类目每日访问数量</h3>
        <div id="myChart3" :style="{width: '600px', height: '600px'}"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { getDataList } from "@/api/data";
import { mapGetters } from "vuex";
import { getList } from "@/api/table";
import echarts from "echarts";
//   import '../../node_modules/echarts/map/js/world.js'
import "../../../node_modules/echarts/map/js/china.js"; // 引入中国地图数据
export default {
  name: "Echarts",
  props: ["userJson"],
  computed: {
    ...mapGetters(["name"]),
  },

  data() {
    return {
      chart: null,
      ho: new Date().getHours(),
      listt: [],
      list:[]
    };
  },
  created() {
    this.$axios
      .get("http://wthrcdn.etouch.cn/weather_mini?city=无锡")
      .then((response) => {
        console.log(response.data.data.forecast, "99999999999999999");
        // this.listt.push(response.data.data.forecast)
        this.listt = response.data.data.forecast;
        console.log(this.listt, "2222222222222");
      });
  },
  mounted() {
    
    this.chinaConfigure();
    // this.getWeather();
    this.fetchData();
    this.drawLinee();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getDataList().then((response) => {
        console.log(response, "xxxxxxxxxxxxxxx");
        this.list = response.data.items;
        console.log(this.list);
        this.listLoading = false;
      });
    },
    drawLinee() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart3"));
      // 绘制图表配置
      let option = {
        // backgroundColor: "#2c343c",

        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ["服饰", "运动鞋", "背包", "配饰"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "服饰",
            type: "bar",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "运动鞋",
            type: "bar",
            stack: "广告",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "背包",
            type: "bar",
            stack: "广告",
            data: [220, 182, 191, 234, 290, 830, 390],
          },
          {
            name: "配饰",
            type: "bar",
            stack: "广告",
            data: [150, 232, 201, 154, 190, 800, 910],
          },
        ],
      };
      // 窗口大小自适应方案
      myChart.setOption(option);
      setTimeout(function () {
        window.onresize = function () {
          myChart.resize();
        };
      }, 800);
    },

    fetchData() {
      this.listLoading = true;
      getDataList().then((response) => {
        console.log(response, "xxxxxxxxxxxxxxx");
        this.list = response.data.items;
        console.log(this.list);
        this.listLoading = false;
      });
    },
    getlist() {
      getList().then((response) => {
        console.log(response);
      });
    },
    chinaConfigure() {
      console.log(this.userJson);
      let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
      window.onresize = myChart.resize;
      myChart.setOption({
        // 进行相关配置
        // backgroundColor: "blue",
        tooltip: {}, // 鼠标移到图里面的浮动提示框
        dataRange: {
          show: false,
          min: 0,
          max: 10000,
          text: ["High", "Low"],
          realtime: true,
          calculable: true,
          color: ["orangered", "yellow", "lightskyblue"],
        },
        geo: {
          // 这个是重点配置区
          map: "china", // 表示中国地图
          roam: true,
          label: {
            normal: {
              show: true, // 是否显示对应地名
              textStyle: {
                color: "rgba(0,0,0,0.4)",
              },
            },
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
        series: [
          {
            type: "scatter",
            coordinateSystem: "geo", // 对应上方配置
          },
          {
            name: "客户上线数量", // 浮动框的标题
            type: "map",
            geoIndex: 0,
            data: [
              {
                name: "北京",
                value: 599,
              },
              {
                name: "上海",
                value: 8855,
              },
              {
                name: "黑龙江",
                value: 8844,
              },
              {
                name: "深圳",
                value: 92,
              },
              {
                name: "湖北",
                value: 810,
              },
              {
                name: "四川",
                value: 453,
              },
              {
                name: "甘肃",
                value: 1810,
              },
              {
                name: "河南",
                value: 2810,
              },
              {
                name: "内蒙古",
                value: 520,
              },
              {
                name: "山东",
                value: 9810,
              },
              {
                name: "新疆",
                value: 660,
              },
              {
                name: "西藏",
                value: 810,
              },
              {
                name: "云南",
                value: 1810,
              },
              {
                name: "青海",
                value: 7810,
              },
              {
                name: "重庆",
                value: 3810,
              },
              {
                name: "宁夏",
                value: 7810,
              },
              {
                name: "广西",
                value: 7810,
              },
              {
                name: "贵州",
                value: 7810,
              },
              {
                name: "台湾",
                value: 210,
              },
              {
                name: "江苏",
                value: 10010,
              },
              {
                name: "浙江",
                value: 17810,
              },
              {
                name: "陕西",
                value: 7810,
              },
              {
                name: "山西",
                value: 5510,
              },
              {
                name: "河北",
                value: 1810,
              },
              {
                name: "辽宁",
                value: 810,
              },
              {
                name: "吉林",
                value: 710,
              },
              {
                name: "安徽",
                value: 7810,
              },
              {
                name: "广东",
                value: 7810,
              },
              {
                name: "福建",
                value: 810,
              },
              {
                name: "江西",
                value: 910,
              },
              {
                name: "湖南",
                value: 310,
              },
              {
                name: "海南",
                value: 3610,
              },
              {
                name: "香港",
                value: 5510,
              },
              {
                name: "澳门",
                value: 110,
              },
              {
                name: "天津",
                value: 410,
              },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.dp {
  .p1 {
    margin-left: 20px;
    font-weight: 900;
    color: red;
  }
  .l {
    float: left;
  }
  .r {
    float: left;
    // margin-left: -65px;
    ul {
      margin-right: 20px;
      display: inline-block;
      list-style: none;
      li {
        border: 1px solid black;
      }
    }
  }
}
.rr {
  float: left;
  margin-left: 300px;
  ul {
    list-style: none;
    li {
      display: inline-block;
      margin-left: 10px;
      widows: 35px;
      height: 18px;
      // background-color: skyblue;
      cursor: pointer;
    }
    li:hover {
      background-color: skyblue;
      border-radius: 8px;
    }
  }
}
.dashboard-text {
  margin-top: -30px;
  font-size: 44px;
  font-weight: 900;
  float: left;
  h1 {
    color: skyblue;
  }
  .tq {
    font-size: 12px;
    color: gray;
  }
}
.db {
  float: left;
}
.qc {
  clear: both;
}
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 20px;
    line-height: 46px;
  }
}
</style>