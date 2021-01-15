<template>
  <div class="app-container">
    <router-link to="/order/newnew">
      <el-button type="primary">添加订单</el-button>
    </router-link>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="订单序号" width="80">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="发货单流水号" width="200" align="center">
        <template slot-scope="scope">{{ scope.row.turnovernumber }}</template>
      </el-table-column>
      <el-table-column label="订单号" width="150" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.ordernumber }}</span>
        </template>
      </el-table-column>
      <el-table-column label="下单时间" width="200" align="center">
        <template slot-scope="scope">{{ scope.row.paytime }}</template>
      </el-table-column>
      <el-table-column label="收货人" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.consignee }}</template>
      </el-table-column>
      <el-table-column label="发货时间" width="200" align="center">
        <template slot-scope="scope">{{ scope.row.ordertime }}</template>
      </el-table-column>
      <el-table-column label="供货商" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.supplier }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getProList"
    />
  </div>
</template>

<script>
import { getOrderList, deleteOrder } from "@/api/order/";
import Pagination from "@/components/Pagination";
export default {
  components: { Pagination },
  data() {
    return {
      list:[],
      listLoading: true,
      //分页总数据个数
      total: 0,
      //分页选项
      listQuery: {
        page: 1,
        limit: 3,
      },
    };
  },
  created() {
    this.getProList();
  },
  methods: {
    async getProList() {
      this.listLoading = true;
      const result = await getOrderList(this.listQuery);
      this.list = result.data.items;
      this.total = result.data.total;
      this.listLoading = false;
    },
    async handleDelete(index, row) {
      //调用deleteProduct来向服务器发送请求删除商品
      const result = await deleteOrder({ id: row.id });
      //商品删除成功重新调用getProList来获取商品列表数据
      this.getProList();
    }
  },
  components: {
    Pagination
  }
};
</script>
