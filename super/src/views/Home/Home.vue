<template>
 <el-card class="box-card">
     <div slot="header" class="clearfix">
        <span>系统信息</span>
       
    </div>
    <!--内容 -->
      <!-- 警告信息 -->
        <el-alert
            title="商品总数: 500, 已销售总金额: 998.00, 库存商品总价: 9800.00"
            type="info"
            show-icon>
        </el-alert>
        <el-alert
            title="导入数据"
            type="success"
            show-icon>
        </el-alert>
       <!-- 表格内容 -->
       <el-row :gutter="20">
         <!-- 左侧表格 -->
        <el-col :span="12">
           <el-card class="box-card">
                            <div slot="header" class="clearfix">
                            <span>销售排行</span>
                        </div>
         <el-table
            :data="goodsDate"
            style="width: 100%">
            <el-table-column
                prop="goods"
                label="商品名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="num"
                label="销量"
                width="180">
            </el-table-column>
       
         </el-table>
         </el-card>
        </el-col>
        <!-- 右侧表格 -->
         <el-col :span="12">
           <el-card class="box-card">
                            <div slot="header" class="clearfix">
                            <span>缺货商品</span>
                        </div>
         <el-table
            :data="stockoutData"
            style="width: 100%">
            <el-table-column
                prop="goodsName"
                label="商品名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="inventory"
                label="库存"
                width="180">
            </el-table-column>
            <el-table-column
                prop="saleCount"
                label="操作"
                width="180">
                 <template slot-scope="scope">
                  <el-button type="text" size="small">入库</el-button>
                 </template>
            </el-table-column>
       
         </el-table>
         </el-card>
        </el-col>
      </el-row>
 </el-card>
</template>
<script>
export default {
     
      data() {
        return {
          goodsDate: [
         {
            goods: '海飞丝',
            num: '15',
           
          },
         {
            goods: '海飞丝',
            num: '15',
           
          },
         {
            goods: '海飞丝',
            num: '15',
           
          },
         {
            goods: '海飞丝',
            num: '15',
           
          }
          ],stockoutData:[
         {
          goodsName: "棒棒糖",
          inventory: 1
         },
         {
          goodsName: "棒棒糖",
          inventory: 1
         },
         {
          goodsName: "棒棒糖",
          inventory: 1
         }
          ]
          
        }
      }
    
};
</script>
<style lang="less">

 
    .el-main{
        .el-card{
            width: 101%;
            height: 100%;
            .el-card__header{
                background-color: #f1f1f1;
                text-align: left;
                font-weight: bold;
                line-height: 20px;
            }
            .el-card__body{
                .el-alert{
                    margin-bottom: 10px;
                }
                
            }
        }
  

    // 左右表格布局
    
    .el-row {
        margin-bottom: 20px;
        &:last-child {
        margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    
    
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .el-table__body-wrapper{
        width: 111%;
    }
      
    }
</style>
 