<template>
    <div class="accoun-manage">
         <el-card class="box-card">
     <div slot="header" class="clearfix">
        <span>系统信息</span>
       
    </div>
    <!-- 内容 -->
      <div class="text item">
       <!--账号列表-->
         <el-table
            ref="multipleTable"
            :data="accountmanageData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                label="账号"
                width="120"
                prop="username">
                </el-table-column>
                <el-table-column
                prop="activearea"
                label="用户组"
                width="120">
                </el-table-column>
                <el-table-column
               
                label="创建时间"
                >
                <template slot-scope="scope">{{ scope.row.putaway_time | filterCtime }}</template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        type="primary"
                        size="mini"
                        @click="handleEdit(scope.row.id)">
                         <i class="el-icon-edit"></i> 编辑
                        </el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.row.id)">
                        <i class="el-icon-delete"></i> 删除</el-button>
                    </template>
                </el-table-column>


        </el-table> 
                <!-- 修改的弹出模态框 -->
                <el-dialog title="账号修改" width="400px" :visible.sync="flag">
                  <!-- 回填表单 -->
                  <el-form :model="editForm"  label-width="60px">
                      <!-- 账号 -->
                    <el-form-item label="账号" prop="username">
                        <el-input style="width: 217px;" type="text" v-model="editForm.username" autocomplete="off"></el-input>
                    </el-form-item>

                     <!-- 选中用户组 -->
                    <el-form-item label="用户组" prop="activearea">
                        <el-select v-model="editForm.activearea" placeholder="请选择用户组">
                          <el-option label="普通用户" value="普通用户"></el-option>
                          <el-option label="高级管理员" value="高级管理员"></el-option>
                        </el-select>
                    </el-form-item>

                  </el-form>
                  <!-- 表单的尾部 -->
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="flag = false">取 消</el-button>
                    <el-button type="primary" @click="saveEdit">确 定</el-button>
                  </div>
                </el-dialog>  
               
      </div>
     
  </el-card>
    </div>
</template>
<script>
import moment from "moment";
import qs from "qs"
export default {
  // 数据
      data() {
      return {
        accountmanageData: [],
        flag: false,
        editForm:{
          username:"",
          activearea:""
        },
        editId:""
        
      }
    },
created() {
  this.getAccountList();
},
  
  //方法 
  methods: {

    // 页面刷新
      getAccountList(){
         this.axios.get("http://127.0.0.1:666/account/accountlist")
         .then (response =>{
           this.accountmanageData=response.data;
          //  console.log(response);
           
         })
         .catch(err =>{
           console.log(err);
           
         })
      },
      // 全选单选
      handleSelectionChange(val) {
       
        this.multipleSelection = val;
      },

      // 删除函数
      handleDelete(id) {
        
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'})
        .then(() => {
          console.log(id);
          
              this.axios.get(`http://127.0.0.1:666/account/accountdele?id=${id}`)
              
              .then(response =>{
                let {err_code,msg}=response.data
                console.log(err_code,msg);
                
                    if(err_code===0){
                      this.$message({
                        type: 'success',
                                message: msg
                              });
                        this.getAccountList();
                    }else{
                      this.$message.error(msg);
                    }
                    
              })
              .catch(err =>{
                console.log(err);
                
              })
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },

     // 修改函数
         handleEdit(id) {
          this.editId=id;
          this.flag = true;
          this.axios.get(`http://127.0.0.1:666/account/accountedit?id=${id}`)
            .then(response =>{
                let result=response.data[0];
                this.editForm.username=result.username;
                this.editForm.activearea=result.activearea;
                
                
            })
            .catch(err =>{
              console.log(err);
              
            })
        },
      // 保存修改
      saveEdit(){
         
          let params={
            username:this.editForm.username,
            activearea:this.editForm.activearea,
            editId:this.editId
          }

          this.axios.post(`http://127.0.0.1:666/account/accounteditsave`,qs.stringify(params))
            .then(response =>{
              // console.log(response.data);
              let {err_code,reason} =response.data;
              if(err_code===0){
                // 弹出成功的提示
                  this.$message({
                    type: 'success',
                    message: reason
            })

              this.getAccountList();
              }else{
                this.$message.error(reason);
              }
                 this.flag = false;
              
            })
            .catch(err =>{
              console.log(err);
              
            })

      }

      },
      filters: {
    // 过滤时间的函数
    filterCtime(ctime) {
      return moment(ctime).format("YYYY/MM/DD HH:mm:ss");
    }
  }
    
    }
  

</script>
<style lang="less">
 .accoun-manage {
   .el-card{
            width: 100%;
            height: 100%;
            .el-card__header{
                background-color: #f1f1f1;
                text-align: left;
                font-weight: bold;
                line-height: 20px;
            }
            
}
}
</style>
