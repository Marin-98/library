<template>
  <div class="search_page">
    <el-input v-model="search"></el-input>
    <el-button type="primary" @click="searchHandle">搜索</el-button>
    <!-- <el-button @click="resetHandle">重置</el-button> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  methods: {
    searchHandle() {
      this.$emit('searchHandle', this.search) 
    },
    resetHandle() {
      this.search = ''
      this.$emit('searchHandle', this.search)  
    }
  }
}
</script>
<style scoped>
.search_page {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

