<template>
  <div class="dashboard-container">
    <el-form>
      <el-form-item label="name:">
        <el-input v-model="myName" placeholder="请输入名字"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="getAction">GET</el-button>
    <el-button type="primary" @click="putAction">PUT</el-button>
    <el-button type="primary" @click="postAction">POST</el-button>
    <el-button type="primary" @click="deleteAction">DELETE</el-button>
    <el-button type="primary" @click="postBodyAction">POST_BODY</el-button>
    <el-button type="primary" @click="patchAction">PATCH</el-button>
    <el-button type="primary" @click="putBodyAction">PUT_BODY</el-button>
    <div class="dashboard-text">name:{{name}}</div>
    <div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'dashboard',
    data() {
      return {
        myName: null
      }
    },
    methods: {
      async getAction() {
        const resp = await this.$get("/api/context/test-param", this.params);
        this.$message.info(resp.data);
      },
      async postAction() {
        const resp = await this.$post("/api/context/test-param", this.params);
        this.$message.info(resp.data);
      },
      async deleteAction() {
        const resp = await this.$delete("/api/context/test-param", this.params);
        this.$message.info(resp.data);
      },
      async postBodyAction() {
        const resp = await this.$post("/api/context/post-body", this.params , true);
        this.$message.info(resp.data);
      },
      async putAction() {
        const resp = await this.$put("/api/context/test-param", this.params);
        this.$message.info(resp.data);
      },
      async putBodyAction() {
        const resp = await this.$put("/api/context/put-body", this.params, true);
        this.$message.info(resp.data);
      },
      async patchAction() {
        const resp = await this.$patch("/api/context/test-param", this.params);
        this.$message.info(resp.data);
      }
    },
    computed: {
      ...mapGetters([
        'name',
        'roles'
      ]),
      params() {
        return { name: this.myName };
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }
    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }
</style>
