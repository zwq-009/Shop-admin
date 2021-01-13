<template>
  <div class="app-container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="200px"
      class="demo-ruleForm"
    >
      <el-form-item label="id" required prop="id">
        <el-col :span="11">
          <el-input v-model="ruleForm.id"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="商品名字" required prop="title">
        <el-col :span="11">
          <el-input v-model="ruleForm.title"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="摘要" required prop="zhaiyao">
        <el-col :span="11">
          <el-input v-model="ruleForm.zhaiyao"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="点击次数" required prop="click">
        <el-col :span="11">
          <el-input v-model="ruleForm.click"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="图片链接" required prop="img_url">
        <el-col :span="11">
          <el-input v-model="ruleForm.img_url"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="销售价" required prop="sell_price">
        <el-col :span="11">
          <el-input v-model="ruleForm.sell_price"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="市场价" required prop="market_price">
        <el-col :span="11">
          <el-input v-model="ruleForm.market_price"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="库存" required prop="stock_quantity">
        <el-col :span="11">
          <el-input v-model="ruleForm.stock_quantity"></el-input>
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
import { addProduct } from "@/api/product";
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
        id: "",
        title: "",
        zhaiyao: "",
        click: "",
        img_url: "",
        sell_price: "",
        market_price: "",
        stock_quantity: ""
      },
      rules: {
        id: [
          { required: true, message: "请输入商品id", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 20 个字符", trigger: "blur" }
        ],
        title: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        zhaiyao: [
          { required: true, message: "请输入商品摘要", trigger: "blur" }
        ],
        click: [{ required: true, validator: checkNumber, trigger: "blur" }],
        sell_price: [
          { required: true, message: "请输入商品售价", trigger: "blur" }
        ],
        market_price: [
          { required: true, message: "请输入商品市场价格", trigger: "blur" }
        ],
        stock_quantity: [
          { validator: checkNumber, trigger: "blur", required: true }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let result = await addProduct(this.ruleForm);
          this.$router.push("/product/index")
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