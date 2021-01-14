<template>
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>角色列表添加</span>
      <el-button size="mini" class="btn-add" @click="handleAdd()" style="margin-left: 100px">添加角色</el-button>
    </el-card>
    <div class="table-container">
      <el-table ref="roleTable" :data="list" style="width: 100%;" v-loading="listLoading" border>
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="角色名称" align="center">
          <template slot-scope="scope">{{scope.row.rolename}}</template>
        </el-table-column>
        <el-table-column label="描述" align="center">
          <template slot-scope="scope">{{scope.row.explain}}</template>
        </el-table-column>
        <el-table-column label="添加时间" width="160" align="center">
          <template slot-scope="scope">{{scope.row.createTime}}</template>
        </el-table-column>
        <el-table-column label="是否启用" width="100" align="center">
          <template slot-scope="scope">
            <el-switch :active-value="1" :inactive-value="0" v-model="scope.row.status"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template slot-scope="scope">
            <el-button
              size="small"
              type="info" round
              @click="handleSelectMenu(scope.$index, scope.row)"
            >分配权限</el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="handleDelete(scope.$index, scope.row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog :visible.sync="dialogVisible" width="40%">
        <el-form :model="role" ref="roleForm" label-width="150px" size="small">
          <el-form-item label="编号：">
            <el-input v-model="role.id" style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item label="角色名称：">
            <el-input v-model="role.rolename" style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item label="描述：">
            <el-input v-model="role.explain" type="textarea" :rows="5" style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item label="添加时间：">
            <el-input type="date" v-model="role.createTime" style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item label="是否启用：">
            <el-radio-group v-model="role.status">
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
import { getUmsroleList, createRole, deleteRole } from "@/api/ums-role";

const defaultRole = {
  id: null,
  rolename: null,
  explain: null,
  createTime: null,
  status: 1,
};
export default {
  data() {
    return {
      list: null,
      total: null,
      listLoading: false,
      listQuery: {},
      role: Object.assign({}, defaultRole),
      dialogVisible: false,
    };
  },
  created() {
    this.getRoleList();
  },
  methods: {
    async getRoleList() {
      this.listLoading = true;
      const result = await getUmsroleList(this.listQuery);
      this.list = result.data.items;
      this.total = result.data.total;
      this.listLoading = false;
    },
    async handleDelete(index, row) {
      const result = await deleteRole({ id: row.id });
      this.getRoleList();
    },
    handleAdd() {
      this.dialogVisible = true;
      this.admin = Object.assign({}, defaultRole);
    },
    handleDialogConfirm() {
      this.$confirm("是否要确认?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        createRole(this.role).then((response) => {
          this.$message({
            message: "添加成功！",
            type: "success",
          });
          this.dialogVisible = false;
          this.getRoleList();
        });
      });
    },
    handleSelectMenu(index,row){
        this.$router.push({path:'/ums/allocMenu',query:{id:row.id}})
    }
  },
};
</script>