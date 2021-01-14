<template>
  <div class="dashboard-container">
    <div class="top-img">
      <img src="../../assets/avatar.gif" class="userimg" />
      <button class="imgup">上传</button>
    </div>
    <div class="both">
      <el-tag v-permission="['admin']"> admin..... </el-tag>
      <el-tag v-permission="['editor']" class="tage">
        <p>用户名:{{ roles.toString() }}</p>
        <p>性别:男</p>
        <p>邮箱:</p>
        <p>你的权限，你可以查看....</p>
      </el-tag>
      <el-tag v-permission="['admin', 'editor']"> 公共部分 </el-tag>
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
  },
};
</script>

<style lang="scss" scoped>
.tage{
  background: ivory;
  border: 0;
  background-color: ivory;
}
.dashboard {
  margin-top: 1px;
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.top-img {
  flex: 1;
  width: 130px;
  height: 130px;
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
  padding: 2px 15px;
  font-size: 15px;
  background-color: rgba(118, 228, 255, 0.795);
  border-radius: 5px;
  border: 0 solid rgb(172, 171, 171);
}
.both {
  margin-left: 10px;
  display: inline-block;
  flex: 2;
  width: 150px;
  height: 130px;
}
</style>
