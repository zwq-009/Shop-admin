<template>
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>用户列表添加</span>
      <el-button size="mini" class="btn-add" @click="handleAdd()" style="margin-left: 100px">添加用户</el-button>
    </el-card>
    <div class="table-container">
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="帐号" align="center">
          <template slot-scope="scope">{{scope.row.username}}</template>
        </el-table-column>
        <el-table-column label="姓名" align="center">
          <template slot-scope="scope">{{scope.row.nickName}}</template>
        </el-table-column>
        <el-table-column label="邮箱" align="center">
          <template slot-scope="scope">{{scope.row.email}}</template>
        </el-table-column>
        <el-table-column label="添加时间" width="160" align="center">
          <template slot-scope="scope">{{scope.row.createTime}}</template>
        </el-table-column>
        <el-table-column label="是否启用" width="140" align="center">
          <template slot-scope="scope">
            <el-switch
              @change="handleStatusChange(scope.$index, scope.row)"
              :active-value="1"
              :inactive-value="0"
              v-model="scope.row.status"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="handleUpdate(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination
        v-show="total>1"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="getUmsList"
      />
      <el-dialog :title="isEdit?'编辑用户':'添加用户'" :visible.sync="dialogVisible" width="40%">
        <el-form :model="admin" ref="adminForm" label-width="150px" size="small">
          <el-form-item label="编号：">
            <el-input v-model="admin.id" style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item label="帐号：">
            <el-input v-model="admin.username" style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item label="姓名：">
            <el-input v-model="admin.nickName" style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item label="邮箱：">
            <el-input v-model="admin.email" style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="admin.password" type="password" style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item label="添加时间：">
            <el-input v-model="admin.createTime" style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item label="是否启用：">
            <el-radio-group v-model="admin.status">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false" size="small">取 消</el-button>
          <el-button type="primary" @click="handleDialogConfirm()" size="small">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import {
  getUmsadminList,
  deleteUmsadmin,
  updateAdmin,
  createAdmin,
} from "@/api/ums-admin";
import Pagination from "@/components/Pagination";
const defaultAdmin = {
  id: null,
  username: null,
  password: null,
  nickName: null,
  email: null,
  createTime: null,
  status: 1,
};
export default {
  name: "adminList",
  data() {
    return {
      list: [],
      listLoading: true,
      total: 1,
      listQuery: {
        page: 1,
        limit: 3,
      },
      admin: Object.assign({}, defaultAdmin),
      dialogVisible: false,
      isEdit: false,
    };
  },
  created() {
    this.getUmsList();
  },
  methods: {
    async getUmsList() {
      this.listLoading = true;
      const result = await getUmsadminList(this.listQuery);
      this.list = result.data.items;
      this.total = result.data.total;
      this.listLoading = false;
    },
    async handleDelete(index, row) {
      //调用deleteProduct来向服务器发送请求删除商品
      const result = await deleteUmsadmin({ id: row.id });
      //商品删除成功重新调用getProList来获取商品列表数据
      this.getUmsList();
    },
    handleAdd() {
      this.dialogVisible = true;
      this.isEdit = false;
      this.admin = Object.assign({}, defaultAdmin);
    },
    handleUpdate(index, row) {
      this.dialogVisible = true;
      this.isEdit = true;
      this.admin = Object.assign({}, row);
    },
    handleDialogConfirm() {
      this.$confirm("是否要确认?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        if (this.isEdit) {
          updateAdmin(this.admin.id, this.admin).then((response) => {
            this.$message({
              message: "修改成功！",
              type: "success",
            });
            this.dialogVisible = false;
            this.getUmsList();
          });
        } else {
          createAdmin(this.admin).then((response) => {
            this.$message({
              message: "添加成功！",
              type: "success",
            });
            this.dialogVisible = false;
            this.getUmsList();
          });
        }
      });
    },
  },
  components: {
    Pagination,
  },
};
</script>