<template>
  <div class="dashboard-container">
    Welcome!
    <div class="dashboard-text">尊敬的{{ name }} 欢迎登录本系统</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getList } from "@/api/table";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"])
  },
  methods:{
    getlist(){
      getList().then((response)=>{
        console.log(response);
      })
    }
  }
};
</script>

<style lang="scss" scoped>
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
