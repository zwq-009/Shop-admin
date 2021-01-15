<template>
  <div class="app-container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="200px"
      class="demo-ruleForm"
    >
      <el-form-item label="发货单流水号" required prop="turnovernumber">
        <el-col :span="11">
          <el-input v-model="ruleForm.turnovernumber"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="订单号" required prop="ordernumber">
        <el-col :span="11">
          <el-input v-model="ruleForm.ordernumber"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="下单时间" required prop="paytime">
        <el-col :span="11">
          <el-input v-model="ruleForm.paytime"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="收货人" required prop="consignee">
        <el-col :span="11">
          <el-input v-model="ruleForm.consignee"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="发货时间" required prop="ordertime">
        <el-col :span="11">
          <el-input v-model="ruleForm.ordertime"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="供货商" required prop="supplier">
        <el-col :span="11">
          <el-input v-model="ruleForm.supplier"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="发货状态" required prop="orderstyle">
        <el-col :span="11">
          <el-input v-model="ruleForm.orderstyle"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="操作人" required prop="operator">
        <el-col :span="11">
          <el-input v-model="ruleForm.operator"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>



<script>
import { addOrder } from "@/api/order";
export default {
  data() {
    function isNumber(val) {
      var regPos = /^\d+(\.\d+)?$/; //非负浮点数
      var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
      if (regPos.test(val) || regNeg.test(val)) {
        return true;
      } else {
        return false;
      }
    }
    //表单校验：检验是否是数字的方法
    var checkNumber = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("信息不能为空"));
      }
      setTimeout(() => {
        if (!isNumber(value)) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 200);
    };
    return {
      ruleForm: {
        turnovernumber: "",
        ordernumber: "",
        paytime: "",
        consignee: "",
        ordertime: "",
        supplier: "",
        orderstyle: "",
        soperator: ""
      },
      rules: {
        turnovernumber: [
          { required: true, message: "请输入正确流水单号", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        ordernumber: [{ required: true, message: "请输入正确订单号", trigger: "blur" }],
        paytime: [
          { required: true, message: "请输入下单时间", trigger: "blur" }
        ],
        ordertime: [
          { required: true, message: "请输入发货时间", trigger: "blur" }
        ],
        supplier: [
          { required: true, message: "请输入供货商", trigger: "blur" }
        ],
        orderstyle: [
          { required: true, message: "请输入发货状态", trigger: "blur" }
        ],
        operator: [
          { required: true, message: "请输入操作人", trigger: "blur" }
        ],
        consignee:[
          {required: true, message: "请输入收货人姓名", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let result = await addOrder(this.ruleForm);
          this.$router.push("/order/goodlist")
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>