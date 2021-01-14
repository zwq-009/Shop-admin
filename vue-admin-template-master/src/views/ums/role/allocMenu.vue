<template>
  <el-card class="form-container" shadow="never">
    <div style="margin-top: 20px;" align="center">
      <div>
        <el-checkbox>商品管理</el-checkbox>
      </div>
      <div>
        <el-checkbox>权限管理</el-checkbox>
      </div>
      <div>
        <el-checkbox>商品列表</el-checkbox>
      </div>
      <div>
        <el-checkbox>添加商品</el-checkbox>
      </div>
      <div>
        <el-checkbox>订单列表</el-checkbox>
      </div>
      <div>
        <el-checkbox>添加订单</el-checkbox>
      </div>
      <div>
        <el-checkbox>用户列表</el-checkbox>
      </div>
      <div>
        <el-checkbox>商品修改</el-checkbox>
      </div>
      <div>
        <el-checkbox>商品删除</el-checkbox>
      </div>
      <div>
        <el-checkbox>添加角色</el-checkbox>
      </div>
      <div>
        <el-checkbox>跟新角色</el-checkbox>
      </div>
      <div>
        <el-checkbox>获取用户详情</el-checkbox>
      </div>
      <div>
        <el-checkbox>创建商品参数</el-checkbox>
      </div>
      <div>
        <el-checkbox>订单跟新</el-checkbox>
      </div>
      <div>
        <el-checkbox>更新商品各类属性</el-checkbox>
      </div>
      <div>
        <el-checkbox>分类参数删除</el-checkbox>
      </div>
      <div>
        <el-checkbox>角色授权</el-checkbox>
      </div>
      <div>
        <el-checkbox>查看数据</el-checkbox>
      </div>
      <div>
        <el-checkbox>订单跟新</el-checkbox>
      </div>
    </div>
    <div style="margin-top: 40px" align="center">
      <el-button type="primary" @click="handleSave()">保存</el-button>
    </div>
  </el-card>
</template>

<script>
import { listMenuByRole, allocMenu } from "@/api/ums-role";
import { fetchTreeList } from "@/api/ums-menu";
import { data as dataorigin } from "../../../../mock/ums-menu";

export default {
  name: "allocMenu",
  data() {
    return {
      menuTreeList: [],
      defaultProps: {
        children: "children",
        label: "title",
      },
      roleId: null,
    };
  },
  created() {
    this.treeList();
  },
  methods: {
    treeList() {
      var arr = [];
      arr.push(dataorigin);
      this.menuTreeList = arr;
    },
    handleSave() {
      let checkedNodes = this.treeList;
      let checkedMenuIds = new Set();
      if (checkedNodes != null && checkedNodes.length > 0) {
        for (let i = 0; i < checkedNodes.length; i++) {
          let checkedNode = checkedNodes[i];
          checkedMenuIds.add(checkedNode.id);
          if (checkedNode.parentId !== 0) {
            checkedMenuIds.add(checkedNode.parentId);
          }
        }
      }
      this.$confirm("是否分配菜单？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        let params = new URLSearchParams();
        params.append("roleId", this.roleId);
        params.append("menuIds", Array.from(checkedMenuIds));
        allocMenu(params).then((response) => {
          this.$message({
            message: "分配成功",
            type: "success",
            duration: 1000,
          });
          this.$router.back();
        });
      });
    },
  },
};
</script>
