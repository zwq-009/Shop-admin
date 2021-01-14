<template>
  <div class="app-container">
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-tickets"></i>
      <span>权限列表添加</span>
      <el-button
        size="mini"
        class="btn-add"
        @click="handleAddMenu()"
        style="margin-left: 100px"
      >添加权限</el-button>
    </el-card>
    <div class="table-container">
      <el-table ref="menuTable" style="width: 100%" :data="list" v-loading="listLoading" border>
        <el-table-column label="编号" width="200" align="center">
          <template slot-scope="scope">{{scope.row.id}}</template>
        </el-table-column>
        <el-table-column label="权限名称" align="center">
          <template slot-scope="scope">{{scope.row.name}}</template>
        </el-table-column>
        <el-table-column label="权限等级" align="center">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.level===0">第一等级</el-tag>
            <el-tag v-if="scope.row.level===1" type="success">第二等级</el-tag>
            <el-tag v-if="scope.row.level===2" type="info">第三等级</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
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
        <el-form :model="menu" ref="roleForm" label-width="150px" size="small">
          <el-form-item label="编号：">
            <el-input v-model="menu.id" style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item label="权限名称：">
            <el-input v-model="menu.name" style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item label="权限等级：">
            <el-input v-model="menu.level" style="width: 250px"></el-input>
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
import { getUmsmenuList, deleteMenu, createMenu } from "@/api/ums-menu";
const defaultMenu = {
  id: null,
  name: null,
  level: null,
};
export default {
  data() {
    return {
      list: null,
      total: null,
      listLoading: true,
      listQuery: {},
      menu: Object.assign({}, defaultMenu),
      dialogVisible: false,
      parentId: 0,
    };
  },
  created() {
    this.getMenuList();
  },
  methods: {
    async getMenuList() {
      this.listLoading = true;
      const result = await getUmsmenuList(this.listQuery);
      this.list = result.data.items;
      this.total = result.data.total;
      this.listLoading = false;
    },
    async handleDelete(index, row) {
      const result = await deleteMenu({ id: row.id });
      this.getMenuList();
    },
    handleAddMenu() {
      this.dialogVisible = true;
      this.admin = Object.assign({}, defaultMenu);
    },
    handleDialogConfirm() {
      this.$confirm("是否要确认?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        createMenu(this.role).then((response) => {
          this.$message({
            message: "添加成功！",
            type: "success",
          });
          this.dialogVisible = false;
          this.getMenuList();
        });
      });
    },
  },
};
</script>