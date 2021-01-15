<template>
  <div class="dashboard-container">
    <div class="top-img">
      <img src="../../assets/avatar.gif" class="userimg" />
      <button class="imgup">修改上传</button>
    </div>
    <div class="both">
      <el-tag v-permission="['admin']">
        <p class="self">昵称:{{ name }}</p>
        <p class="self">用户名:{{ roles.toString() }}</p>
        <p class="self">个性签名:{{ introduction }}</p>
      </el-tag>
      <el-tag v-permission="['editor']" class="tage">
        <p class="self">昵称:{{ name }}</p>
        <p class="self">用户名:{{ roles.toString() }}</p>
        <p class="self">个性签名:{{ introduction }}</p>
      </el-tag>
      <router-link to="/permission/directive">
        <button class="selfbt">权限切换</button>
      </router-link>
      <!-- <el-tag v-permission="['admin', 'editor']">公共显示</el-tag> -->
    </div>
    <div class="roukey">
      <p class="rotop"><b>页面快捷跳转</b></p>
      <router-link to="/ums/list">
        <el-button class="roky">权限管理</el-button>
      </router-link>
      <router-link to="/example/table">
        <el-button class="roky">用户列表</el-button>
      </router-link>
      <router-link to="/product/list">
        <el-button class="roky">商品管理</el-button>
      </router-link>
      <router-link to="/order/orderlist">
        <el-button class="roky">订单管理</el-button>
      </router-link>
      <router-link to="/data/mainwatch">
        <el-button class="roky">数据分析</el-button>
      </router-link>
      <router-link to="/comment/indext">
        <el-button class="roky">留言评论</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
// 当然你也可以为了方便使用，将它注册到全局
import permission from "@/directive/permission/index.js"; // 权限判断指令
import { mapGetters } from "vuex";

export default {
  directives: { permission },
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"]),
  },
  methods: {},
  computed: {
    roles() {
      return this.$store.getters.roles;
    },
    name() {
      return this.$store.getters.name;
    },
    introduction() {
      return this.$store.getters.introduction;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
}

.tage {
  border: 0;
  font-size: 15px;
  padding: 0;
  margin-bottom: 10px;
  background-color: rgb(255, 255, 255);
}
.dashboard {
  &-container {
    margin: 10px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.top-img {
  flex: 1;
  width: 100px;
  height: 120px;
  padding: 0;
  text-align: center;
  border: 1px solid rgb(172, 171, 171);
  border-radius: 10px;
  display: inline-block;
}
.userimg {
  display: block;
  width: 100px;
  height: 90px;
  padding-left: 20px;
}
.imgup {
  color: #000;
  padding: 4px 10px;
  font-size: 13px;
  background-color: rgba(118, 228, 255, 0.795);
  border-radius: 5px;
  border: 0 solid rgb(172, 171, 171);
}
.self {
  margin: 0;
  font-size: 14px;
}
.selfbt {
  margin-top: 15px;
  padding: 3px 15px;
  color: rgb(13, 110, 110);
  background-color: rgb(179, 250, 216);
  border-radius: 2px;
  border: 0;
  font-size: 14px;
}
.both {
  margin-left: 5px;
  display: inline-block;
  flex: 2;
  width: 150px;
  height: 130px;
}
.rotop {
  padding: 6px 8px;
  background-color: rgba(188, 188, 189, 0.788);
}
.roky {
  padding: 10px 8px;
  color: azure;
  margin: 5px;
  font-size: 15px;
  font-weight: 500px;
  background-color: rgb(108, 133, 245);
  border-radius: 10px;
}
</style>
