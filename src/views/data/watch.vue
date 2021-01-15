<template>
  <div class="con">
    <div class="bt1">今日访问数据统计</div>
    <div class="dv1">
      <p class="p1" v-if="list.length">微信小程序</p>
      <!-- <p class="p2" v-if="list.length">{{list[0].title}}</p> -->
      <div class="dv11">
        <img src="../../assets/01.png" width="40px" />
        <count-to
          class="c1"
          v-if="list.length"
          :startVal="0"
          :endVal="list[0].click"
          :duration="3000"
        ></count-to>
      </div>
    </div>
    <div class="dv1">
      <p class="p1" v-if="list.length">淘宝旗舰店</p>
      <!-- <p class="p2" v-if="list.length">{{list[0].title}}</p> -->
      <div class="dv11" style="background-color: skyblue">
        <!-- <i class="el-icon-goods"></i> -->
        <img src="../../assets/01.png" width="40px" />
        <count-to
          class="c1"
          v-if="list.length"
          :startVal="0"
          :endVal="list[1].click"
          :duration="3000"
        ></count-to>
      </div>
    </div>
    <div class="dv1">
      <p class="p1" v-if="list.length">天猫旗舰店</p>
      <!-- <p class="p2" v-if="list.length">{{list[0].title}}</p> -->
      <div class="dv11" style="background-color: rgb(162,51,162)">
        <img src="../../assets/01.png" width="40px" />
        <count-to
          class="c1"
          v-if="list.length"
          :startVal="0"
          :endVal="list[2].click"
          :duration="3000"
        ></count-to>
      </div>
    </div>
    <div class="dv1">
      <p class="p1" v-if="list.length">公司官网</p>
      <!-- <p class="p2" v-if="list.length">{{list[0].title}}</p> -->
      <div class="dv11" style="background-color: rgb(162,135,51)">
        <img src="../../assets/01.png" width="40px" />
        <count-to
          class="c1"
          v-if="list.length"
          :startVal="0"
          :endVal="list[3].click"
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
    <div class="xb">
      <div class="f" id="myChart3" :style="{width: '600px', height: '600px'}"></div>
      <!-- <div class="r" id="myChart4" :style="{width: '600px', height: '600px'}"></div> -->
      <div class="r rr">
        <p>总注册用户</p>
        <img src="../../assets/03.jpg" />
        <p class="p1" v-if="list.length">{{list[32].click}}人</p>
        <p class="p2">{{ nowDate }}</p>
      </div>
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
      nowDate: "",
    };
  },
  mounted() {
    this.drawLine();
    this.drawLinee();
    this.drawLineee();
    // this.drawLineeee();
    this.fetchData();
    this.currentTime();
  },
  methods: {
    currentTime() {
      setInterval(this.formatDate, 500);
    },
    formatDate() {
      let date = new Date();
      let year = date.getFullYear(); 
      let month = date.getMonth() + 1; 
      let day = date.getDate(); 
      let week = date.getDay(); 
      let weekArr = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      let hour = date.getHours(); 
      hour = hour < 10 ? "0" + hour : hour; 
      let minute = date.getMinutes(); 
      minute = minute < 10 ? "0" + minute : minute; 
      let second = date.getSeconds(); 
      second = second < 10 ? "0" + second : second; 
      this.nowDate = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
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
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表配置
      let option = {
        title: {
          text: "数据汇总",
          //   subtext: "人数",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ["访问用户", "下单用户"],
        },
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
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "人次",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ",
            },
          },
        ],
        series: [
          {
            name: "访问用户",
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
              3.3,
            ],
          },
          {
            name: "下单用户",
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
              18.8,
              6.0,
              2.3,
            ],
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
          text: "订单转化率汇总",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%",
        },
        toolbox: {
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        legend: {
          data: ["产品链接", "点击", "访问", "咨询", "订单"],
        },

        series: [
          {
            name: "",
            type: "funnel",
            left: "10%",
            top: 60,
            //x2: 80,
            bottom: 60,
            width: "80%",
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "inside",
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
            },
            emphasis: {
              label: {
                fontSize: 20,
              },
            },
            data: [
              { value: 60, name: "访问" },
              { value: 40, name: "咨询" },
              { value: 20, name: "订单" },
              { value: 80, name: "点击" },
              { value: 100, name: "产品链接" },
            ],
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
        // backgroundColor: "#2c343c",

        title: {
          text: "本季度销售额度完成率",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc",
          },
        },

        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {},
          },
        },
        series: [
          {
            name: "业务指标",
            type: "gauge",
            detail: { formatter: "{value}%" },
            data: [{ value: 30, name: "完成率" }],
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
<style lang="scss" scoped>
.xb {
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
.rr {
  width: 600px;
  height: 600px;
  p {
    margin-left: 280px;
    font-size: 30px;
    color: red;
  }
  .p1 {
    margin-left: 310px;
    font-size: 30px;
    color: red;
  }
  .p2{
      font-size: 20px;
      color: black;
      margin-left: 250px;
  }
  img {
    margin-left: 300px;
  }
  /* background-color: red; */
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