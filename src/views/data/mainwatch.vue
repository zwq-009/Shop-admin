<template>
  <div class="con">
    <div class="bt1">销售数据统计</div>
    <div class="dv1">
      <p class="p1" v-if="list.length">{{list[0].title}}</p>
      <!-- <p class="p2" v-if="list.length">{{list[0].title}}</p> -->
      <div class="dv11">
        <img src="../../assets/01.png" width="40px" />
        <count-to
          class="c1"
          v-if="list.length"
          :startVal="0"
          :endVal="list[0].stock_quantity"
          :duration="3000"
        ></count-to>
      </div>
    </div>
    <div class="dv1">
      <p class="p1" v-if="list.length">{{list[1].title}}</p>
      <!-- <p class="p2" v-if="list.length">{{list[0].title}}</p> -->
      <div class="dv11" style="background-color: skyblue">
        <!-- <i class="el-icon-goods"></i> -->
        <img src="../../assets/01.png" width="40px" />
        <count-to
          class="c1"
          v-if="list.length"
          :startVal="0"
          :endVal="list[1].stock_quantity"
          :duration="3000"
        ></count-to>
      </div>
    </div>
    <div class="dv1">
      <p class="p1" v-if="list.length">{{list[3].title}}</p>
      <!-- <p class="p2" v-if="list.length">{{list[0].title}}</p> -->
      <div class="dv11" style="background-color: rgb(162,51,162)">
        <img src="../../assets/01.png" width="40px" />
        <count-to
          class="c1"
          v-if="list.length"
          :startVal="0"
          :endVal="list[3].stock_quantity"
          :duration="3000"
        ></count-to>
      </div>
    </div>
    <div class="dv1">
      <p class="p1" v-if="list.length">{{list[3].title}}</p>
      <!-- <p class="p2" v-if="list.length">{{list[0].title}}</p> -->
      <div class="dv11" style="background-color: rgb(162,135,51)">
        <img src="../../assets/01.png" width="40px" />
        <count-to
          class="c1"
          v-if="list.length"
          :startVal="0"
          :endVal="list[3].stock_quantity"
          :duration="3000"
        ></count-to>
      </div>
    </div>
    <div class="bt1">销售金额统计</div>
    <div class="dv1">
      <p class="p1" v-if="list.length">{{list[0].title}}</p>
      <!-- <p class="p2" v-if="list.length">{{list[0].title}}</p> -->
      <div class="dv11">
        <img src="../../assets/02.png" width="40px" />
        <count-to
          class="c1"
          v-if="list.length"
          :startVal="0"
          :endVal="(list[0].sell_price)*(list[0].stock_quantity)"
          :duration="3000"
        ></count-to>
      </div>
    </div>
    <div class="dv1">
      <p class="p1" v-if="list.length">{{list[1].title}}</p>
      <!-- <p class="p2" v-if="list.length">{{list[0].title}}</p> -->
      <div class="dv11" style="background-color: skyblue">
        <img src="../../assets/02.png" width="40px" />
        <count-to
          class="c1"
          v-if="list.length"
          :startVal="0"
          :endVal="(list[1].sell_price)*(list[1].stock_quantity)"
          :duration="3000"
        ></count-to>
      </div>
    </div>
    <div class="dv1">
      <p class="p1" v-if="list.length">{{list[3].title}}</p>
      <!-- <p class="p2" v-if="list.length">{{list[0].title}}</p> -->
      <div class="dv11" style="background-color: rgb(162,51,162)">
        <img src="../../assets/02.png" width="40px" />
        <count-to
          class="c1"
          v-if="list.length"
          :startVal="0"
          :endVal="(list[3].sell_price)*(list[3].stock_quantity)"
          :duration="3000"
        ></count-to>
      </div>
    </div>
    <div class="dv1">
      <p class="p1" v-if="list.length">{{list[6].title}}</p>
      <!-- <p class="p2" v-if="list.length">{{list[0].title}}</p> -->
      <div class="dv11" style="background-color: rgb(193,78,78)">
        <img src="../../assets/02.png" width="40px" />
        <count-to
          class="c1"
          v-if="list.length"
          :startVal="0"
          :endVal="(list[6].sell_price)*(list[6].stock_quantity)"
          :duration="3000"
        ></count-to>
      </div>
    </div>
    <router-link :to="{path:'/product'}">
      <button class="bb1">查看详情数据</button>
    </router-link>
    <div class="view-content">
      <div class="f">
        <div id="myChart" :style="{width: '600px', height: '600px'}"></div>
      </div>
      <div class="r">
        <div id="myChart1" :style="{width: '600px', height: '600px'}"></div>
      </div>
    </div>
    <div class="view"></div>
    <div class="xb">
      <div class="f" id="myChart3" :style="{width: '600px', height: '600px'}"></div>
      <div class="r" id="myChart4" :style="{width: '600px', height: '600px'}"></div>
    </div>
  </div>
</template>

<script>
import CountTo from "vue-count-to";
import { getDataList } from "@/api/data";
import { getTuList } from "@/api/tu";
export default {
  components: {
    CountTo,
  },
  name: "Echarts",
  data() {
    return {
      tub:[],
      list: [],
    };
  },
  mounted() {
    this.drawLine();
    this.drawLinee();
    this.drawLineee();
    this.drawLineeee();
    this.fetchData();
    this.getTu()
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
     getTu() {
      this.listLoading = true;
      getTuList().then((response) => {
        console.log(response.data.items.items[0].name, "pppppppppp");
        this.tub = response.data.items.items[0].name
        // console.log(this.tub)
        // console.log(this.list);
        // this.listLoading = false;
      });
    },
    drawLine() {
      // var bl = this.tub
      // console.log(bl)
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表配置
      let option = {
        title: {
          text: "店铺访问量",
        },
        tooltip: {
          trigger: "axis",
          formatter:'{a}的访问量：{c}',
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["淘宝旗舰店", "微信小程序", "公司官网"],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
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
            boundaryGap: false,
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
            name: "淘宝旗舰店",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "微信小程序",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "公司官网",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310],
          },
        ],
      };
      // 窗口大小自适应方案
      myChart.setOption(option);
      setTimeout(function () {
        window.onresize = function () {
          myChart.resize();
        };
      }, 200);
    },
    drawLineeee() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart4"));
      // 绘制图表配置
      let option = {
        title: {
          text: "每月客户注册数量",
          subtext: "百分比",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["退订数量", "新增客户数量"],
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "退订数量",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              333.3,
            ],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }],
            },
          },
          {
            name: "新增客户数量",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              188.8,
              566.0,
              222.3,
            ],
            markPoint: {
              data: [
                { name: "年最高", value: 182.2, xAxis: 7, yAxis: 183 },
                { name: "年最低", value: 2.3, xAxis: 11, yAxis: 3 },
              ],
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }],
            },
          },
        ],
      };
      // 窗口大小自适应方案
      myChart.setOption(option);
      setTimeout(function () {
        window.onresize = function () {
          myChart.resize();
        };
      }, 200);
    },

    drawLineee() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart3"));
      // 绘制图表配置
      let option = {
        title: {
          text: "广告转化率",
          subtext: "纯属虚构",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["电视广告", "头条广告", "抖音引流", "视频广告", "搜索引擎"],
        },
        series: [
          {
            name: "广告转化率",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "电视广告" },
              { value: 310, name: "头条广告" },
              { value: 234, name: "抖音引流" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      // 窗口大小自适应方案
      myChart.setOption(option);
      setTimeout(function () {
        window.onresize = function () {
          myChart.resize();
        };
      }, 200);
    },

    drawLinee() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart1"));
      // 绘制图表配置
      let option = {
        backgroundColor: "#2c343c",

        title: {
          text: "支付方式",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc",
          },
        },

        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1],
          },
        },
        series: [
          {
            name: "支付方式",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "支付宝" },
              { value: 310, name: "微信" },
              { value: 274, name: "银联支付" },
            ].sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              color: "rgba(255, 255, 255, 0.3)",
            },
            labelLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)",
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
            itemStyle: {
              color: "#c23531",
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function (idx) {
              return Math.random() * 200;
            },
          },
        ],
      };
      // 窗口大小自适应方案
      myChart.setOption(option);
      setTimeout(function () {
        window.onresize = function () {
          myChart.resize();
        };
      }, 200);
    },
  },
};
</script>
<style scoped>
.xb{
  margin-left: 50px;
  margin-top: 50px;
}
.bb1 {
  position: absolute;
  top: 400px;
  right: 115px;
  background-color: white;
  border: 0px;
}
.view {
  clear: both;
}
.bt1 {
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 30px;
  font-weight: 900;
}
.view-content {
  margin-top: 100px;
  margin-left: 50px;
}
.f {
  float: left;
}
.r {
  float: left;
  margin-left: 30px;
}
.dv1 {
  width: 300px;
  height: 100px;
  border: 1px solid orange;
  position: relative;
  left: 30px;
  display: inline-block;
  margin-left: 30px;
}
.dv11 {
  width: 300px;
  height: 60px;
  background-color: orange;
  position: absolute;
  top: 40px;
  left: 0px;
  z-index: 2;
}
.dv11 img {
  margin-left: 10px;
  margin-top: 10px;
}
.p1 {
  margin-left: 10px;
  font-size: 12px;
}
.c1 {
  /* margin-left: 260px;
  margin-top: 60px; */
  position: absolute;
  left: 210px;
  top: 20px;
  color: white;
  font-size: 24px;
}
</style>