<template>
  <div class="app-container">
    <br /><br />
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="75">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="日期" width="210" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.add_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户" width="70">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="内容" width="180" align="center">
        <template slot-scope="scope">
          {{ scope.row.zhaiyao }}
        </template>
      </el-table-column>
      <!-- <el-table-column
        class-name="status-col"
        label="图片"
        width="200"
        align="center"
      >
        <template slot-scope="scope">
           {{ scope.row.img_url }}
        </template>
      </el-table-column> -->
      <el-table-column align="center" label="阅读量" width="80">
        <template slot-scope="scope">{{ scope.row.sell_price }}</template>
      </el-table-column>
      <el-table-column align="center" label="点赞量" width="80">
        <template slot-scope="scope">{{ scope.row.market_price }}</template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-dialog
            title="回复内容"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <textarea
              name="repl"
              id="repl"
              cols="50"
              rows="7"
              border="0"
            ></textarea>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取消</el-button>
              <el-button type="primary" @click="dialogVisible = false"
                >确定</el-button
              >
            </span>
          </el-dialog>
          <el-button size="mini" type="danger" @click="dialogVisible = true"
            >回复</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getProductList, deleteProduct } from "@/api/comment";
export default {
  data() {
    return {
      list: [],
      listLoading: true,
      dialogVisible: false,
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
    async handleDelete(index, row) {
      //调用deleteProduct来向服务器发送请求删除商品
      const result = await deleteProduct({ id: row.id });
      //商品删除成功重新调用getProList来获取商品列表数据
      this.getProList();
    },
  },
};
</script>
<style lang="scss" scoped>
#req {
  border: 1px solid rgb(3, 90, 86);
  display: block;
}
.repl {
  background-color: rgb(203, 248, 248);
  float: right;
}
</style>
