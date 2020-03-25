<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-table
      :data="list">
      <el-table-column
        label="日期"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.date}}</span>
        </template>
      </el-table-column>
       <el-table-column
        label="姓名"
        width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名：{{ scope.row.name }}</p>
            <p>住址：{{ scope.row.address }}</p>
            <div 
            slot="reference"
            class="name-wrapper">
              <el-tag size="medium">{{scope.row.name}}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { MessageBox } from 'element-ui';
// 将handelDelete没有confirm功能的毛坯房函数装修到有confirm功能
export default {
  name: 'App',
  data() {
    return {
      list:[{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路185弄'
      },{
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路1517弄'
      },{
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路1519弄'
      },{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路1516弄'
      }]
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    // @confirmation
    handleDelete(index, row) {

      // console.log(index, row)
      // 新手
      // 删除前 警告一下
      // this.list.splice(index, 1);
      // MessageBox.confirm('您确定要删除吗', '提示')
      //   .then(() => {
      //     this.list.splice(arguments[0], 1);
      //   })
      //   .catch(() => {

      //   })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>