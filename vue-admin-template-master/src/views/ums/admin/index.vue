<template>
  <div class="app-container">
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        <el-button style="float:right" type="primary" @click="handleSearchList()" size="small">查询搜索</el-button>
        <el-button
          style="float:right;margin-right: 15px"
          @click="handleResetSearch()"
          size="small">
          重置
        </el-button>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
          <el-form-item label="输入搜索：">
            <el-input v-model="listQuery.keyword" placeholder="帐号/姓名" clearable></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
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
        <el-table-column label="是否启用" width="100" align="center">
          <template slot-scope="scope">
            <el-switch :active-value="1" :inactive-value="0" v-model="scope.row.status"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="220" align="center">
          <template slot-scope="scope">
            <el-button size="small" type="info" round @click="dialogFormVisible = true">分配角色</el-button>
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              @click="handleUpdate(scope.$index, scope.row)"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="handleDelete(scope.$index, scope.row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-container">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          layout="total, sizes,prev, pager, next,jumper"
          :current-page.sync="listQuery.page"
          :page-size="listQuery.limit"
          :page-sizes="[3,5,10]"
          :total="total"
        ></el-pagination>
      </div>
      <el-dialog :title="isEdit?'编辑用户':'添加用户'" :visible.sync="dialogVisible" width="40%">
        <el-form :model="admin" ref="adminForm" label-width="150px" size="small">
          <el-form-item label="编号：">
            <el-input v-model="admin.id" style="width: 250px" placeholder="请按照顺序输入相应编号"></el-input>
          </el-form-item>
          <el-form-item label="帐号：">
            <el-input v-model="admin.username" style="width: 250px" placeholder="请输入帐号"></el-input>
          </el-form-item>
          <el-form-item label="姓名：">
            <el-input v-model="admin.nickName" style="width: 250px" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="邮箱：">
            <el-input v-model="admin.email" style="width: 250px" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input
              v-model="admin.password"
              type="password"
              style="width: 250px"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="添加时间：">
            <el-input
              type="date"
              v-model="admin.createTime"
              style="width: 250px"
              placeholder="请输入时间"
            ></el-input>
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
      <el-dialog title="分配角色" :visible.sync="dialogFormVisible" width="30%">
        <el-form :model="admin">
          <el-form-item label="角色名称">
            <el-select multiple placeholder="请选择" v-model="value" size="small" style="width: 80%">
              <el-option label="商品管理员" value="商品管理员"></el-option>
              <el-option label="订单管理员" value="订单管理员"></el-option>
              <el-option label="超级管理员" value="超级管理员"></el-option>
              <el-option label="经理" value="经理"></el-option>
              <el-option label="Boss" value="Boss"></el-option>
              <el-option label="普通用户" value="普通用户"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
// import Pagination from "@/components/Pagination";
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
        keyword: "",
      },
      admin: Object.assign({}, defaultAdmin),
      dialogVisible: false,
      isEdit: false,
      dialogFormVisible: false,
      value: "",
    };
  },
  created() {
    this.getUmsList();
  },
  methods: {
    handleResetSearch() {
        this.listQuery.page = 1;
      },
    handleSearchList() {
      this.listQuery.page = 3;
      this.getUmsList();
    },
    handleSizeChange(val) {
      this.listQuery.page = 1;
      this.listQuery.limit = val;
      this.getUmsList();
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getUmsList();
    },
    async getUmsList() {
      this.listLoading = true;
      const result = await getUmsadminList(this.listQuery);
      this.list = result.data.items;
      this.total = result.data.total;
      this.listLoading = false;
    },
    async handleDelete(index, row) {
      const result = await deleteUmsadmin({ id: row.id });
      //商品删除成功重新调getUmsList用来获取商品列表数据
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
    handleAllocDialogConfirm() {
      this.$confirm("是否要确认?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        let params = new URLSearchParams();
        params.append("adminId", this.allocAdminId);
        params.append("roleIds", this.allocRoleIds);
        allocRole(params).then((response) => {
          this.$message({
            message: "分配成功！",
            type: "success",
          });
          this.allocDialogVisible = false;
        });
      });
    },
  },
};
</script>