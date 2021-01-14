<template>
  <div class="app-container">
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="input" clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <!-- 路由跳转到新增商品页面 -->
        <router-link to="/product/new">
          <el-button type="primary">新增商品</el-button>
        </router-link>
        <br /><br />
      </el-row>

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
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column
          class-name="status-col"
          label="图片"
          width="105"
          align="center"
        >
          <template slot-scope="scope">
            <img :src="scope.row.img_url" alt="" />
          </template>
        </el-table-column>
        <el-table-column label="商品名" width="350" align="center">
          <template slot-scope="scope">
            {{ scope.row.title }}
          </template>
        </el-table-column>
        <el-table-column label="添加时间" width="210" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.add_time }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="售价(元)" width="150">
          <template slot-scope="scope">{{ scope.row.sell_price }}</template>
        </el-table-column>
        <el-table-column label="操作" width="190px" align="center">
          <template v-slot="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
            ></el-button>
            <el-button
              size="mini"
              type="warning"
              icon="el-icon-delete"
              @click="removeById(scope.row.id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <pagination
        v-show="total > 0"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="getList"
      />
    </el-card>
  </div>
</template>

<script>
import { getProductList } from "@/api/product";
import Pagination from "@/components/Pagination";
export default {
  data() {
    return {
      list: [],
      listLoading: true,
      input: "",
      total: 0,
    };
  },
  created() {
    this.getProList();
  },
  components: {
    Pagination,
  },
  methods: {
    async getProList() {
      this.listLoading = true;
      let result = await getProductList();
      this.list = result.data.items;
      this.total = result.data.total;
      this.listLoading = false;
      // console.log(result);
    },
    // 处理分页
    handleSizeChange(newSize) {
      this.queryInfo.pagesize = newSize;
      this.getProList();
    },
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage;
      this.getProList();
    },
    // 删除商品操作
    removeById(id) {
      this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          const { data } = await this.$http.delete(`goods/${id}`);
          if (data.meta.status !== 200) {
            return this.$message.error(data.meta.msg);
          }
          this.getGoodsList();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  background-color: #ddd;
  img {
    width: 80px;
    height: 80px;
  }
  .pagination-container {
    margin-top: 2px;
    padding-left: 0;
    padding-top: 15px;
    padding-bottom: 4px;
  }
}
</style>
