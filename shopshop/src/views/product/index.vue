<template>
  <div class="app-container">
    <!-- 路由跳转到新增商品页面 -->
    <router-link to="/product/new"><el-button type="primary" round>新增商品</el-button></router-link>
    <br><br>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="商品名" width="300">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="添加时间" width="210" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.add_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="摘要" width="180" align="center">
        <template slot-scope="scope">
          {{ scope.row.zhaiyao }}
        </template>
      </el-table-column>
      <el-table-column
        class-name="status-col"
        label="图片"
        width="200"
        align="center"
      >
        <template slot-scope="scope">
           {{ scope.row.img_url }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="售价" width="80">
        <template slot-scope="scope">{{ scope.row.sell_price }}</template>
      </el-table-column>
      <el-table-column align="center" label="市场价" width="80">
        <template slot-scope="scope">{{ scope.row.market_price }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getProductList } from "@/api/product";
export default {
  data() {
    return {
      list: [],
      listLoading: true,
    };
  },
  created() {
    this.getProList();
  },
  methods: {
    async getProList() {
      this.listLoading = true;
      let result = await getProductList();
      this.list = result.data.items;
      this.listLoading = false;
      // console.log(result);
    },
  },
};
</script>
