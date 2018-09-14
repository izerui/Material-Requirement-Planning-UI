<template>
  <div>
    <el-table :data="roleList">
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column prop="avatar" label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" width="30px" height="30px"/>
        </template>
      </el-table-column>
      <el-table-column prop="account" label="手机号"></el-table-column>
      <el-table-column prop="userCode" label="用户编码"></el-table-column>
      <el-table-column prop="userName" label="用户名"></el-table-column>
      <el-table-column prop="gender" label="性别"></el-table-column>
      <el-table-column prop="admin" label="管理员"></el-table-column>
      <el-table-column prop="recordStatus" label="状态"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        roleList: []
      }
    },
    created() {
      this.listRoles();
    },
    watch: {
      $route() {
        this.listRoles();
      }
    },
    methods: {
      async listRoles() {
        this.roleList = await this.$get("/rbac/list-roles");
      }
    }


  }
</script>

<style scoped>

</style>
