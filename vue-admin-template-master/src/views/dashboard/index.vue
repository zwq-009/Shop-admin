<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>

    <!--不同用户登录之后看到不同页面：
        1.我们可以使用utils/permission中封装的checkPermission方法
        2.我们可以使用自定义指令来完成  ：参照src/directive/permission-->
    <div v-if="checkPermission(['editor'])">当前用户身份是editor</div>

    <div v-permission="['editor']">用v-permission来控制显示页面 editor</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import checkPermission from '@/utils/permission'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    checkPermission
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
