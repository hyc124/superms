<template>
    
<el-container>
  <!-- 左边 -->
    <el-aside width="200px">
      <Nav></Nav>
    </el-aside>
  <!-- 右边 -->
    <el-container>
      <!-- 右侧头部 -->
        <el-header><Top></Top></el-header>
        <!-- 右侧中间 -->
        <el-main>
            <router-view/>
        </el-main>
        <!-- 右侧底部 -->
        <el-footer><Bottom></Bottom></el-footer>
    </el-container>
</el-container>
</template>
<script>
import Nav from '../../components/Nav'
import Top from '../../components/Top'
import Bottom from '../../components/Bottom'
export default {
  components:{
    Nav,
    Top,
    Bottom
  }
};
</script>
<style lang="less">
.el-container {
  height: 100%;

  .el-aside { 
    background-color: #2d3a4b;
    text-align: center;
    .el-menu{
      background-color: #2d3a4b;
    
    .el-submenu {
    .el-submenu__title {
      color: #fff;
    }
  }
  .el-menu-item {
    color: #fff;
  }
      
    }
  }

  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
  }

  .el-header,
  .el-footer {
    background-color: #fff;
    color: #2d3a4b;
    text-align: center;
    line-height: 60px;
  } 
   .el-header {
       border-bottom: 1px solid #ccc;
   }
}
</style>
