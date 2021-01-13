<template>
  <div class="con">
    <div class="bt1">销售数据统计</div>
    <div class="dv1">
      <p class="p1" v-if="list.length">{{list[0].title}}</p>
      <!-- <p class="p2" v-if="list.length">{{list[0].title}}</p> -->
      <div class="dv11">
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
        <i class="el-icon-goods"></i>
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
        <count-to
          class="c1"
          v-if="list.length"
          :startVal="0"
          :endVal="(list[0].stock_quantity)*(list[0].stock_quantity)"
          :duration="3000"
        ></count-to>
      </div>
    </div>
    <div class="dv1">
      <p class="p1" v-if="list.length">{{list[1].title}}</p>
      <!-- <p class="p2" v-if="list.length">{{list[0].title}}</p> -->
      <div class="dv11" style="background-color: skyblue">
        <count-to
          class="c1"
          v-if="list.length"
          :startVal="0"
          :endVal="(list[1].stock_quantity)*(list[1].stock_quantity)"
          :duration="3000"
        ></count-to>
      </div>
    </div>
    <div class="dv1">
      <p class="p1" v-if="list.length">{{list[3].title}}</p>
      <!-- <p class="p2" v-if="list.length">{{list[0].title}}</p> -->
      <div class="dv11" style="background-color: rgb(162,51,162)">
        <count-to
          class="c1"
          v-if="list.length"
          :startVal="0"
          :endVal="(list[3].stock_quantity)*(list[3].stock_quantity)"
          :duration="3000"
        ></count-to>
      </div>
    </div>
    <div class="view-content">
      <div class="f">
        <div id="myChart" :style="{width: '600px', height: '600px'}"></div>
      </div>
      <div class="r">
        <div id="myChart1" :style="{width: '600px', height: '600px'}"></div>
      </div>
    </div>
    <div class="view"></div>
    <div>
      <div id="myChart3" :style="{width: '600px', height: '600px'}"></div>
    </div>
  </div>
</template>

<script>
import CountTo from "vue-count-to";
import { getDataList } from "@/api/data";
export default {
  components: {
    CountTo,
  },
  name: "Echarts",
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.drawLine();
    this.drawLinee();
    this.drawLineee();
    this.fetchData();
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
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表配置
      let option = {
        title: {
          text: "店铺访问量",
        },
        tooltip: {
          trigger: "axis",
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

    drawLineee() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart3"));
      // 绘制图表配置
      let option = {
        title: {
          text: "店铺访问量",
        },
        tooltip: {
          trigger: "axis",
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
.p1 {
  margin-left: 10px;
  font-size: 12px;
}
.c1 {
  /* margin-left: 260px;
  margin-top: 60px; */
  position: absolute;
  left: 220px;
  top: 20px;
  color: white;
  font-size: 24px;
}
</style>