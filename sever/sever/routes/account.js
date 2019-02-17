var express = require('express');
var router = express.Router();
var connection=require('./connect')

router.all('*', (req, res, next) => {
    // 设置响应头 解决跨域(目前最主流的方式)
    res.header('Access-Control-Allow-Origin', '*');
    next();
  })

// 添加账号路由
router.post('/accountadd', (req, res) => {
    let {username, password, activearea}=req.body;
    console.log('接受前段数据:',username, password, activearea);
    //构造添加账号sql语句
    const sqlStr=`insert into user (username,password,activearea) values ('${username}', '${password}', '${activearea}')`;
    // 执行sql语句
    connection.query(sqlStr,(err,data) =>{
        if (err) throw err
        // console.log(data);
        
        if(data.affectedRows>0){
            res.send({"err_code":0,"msg":"添加数据成功"})
        }else{
            res.send({"err_code":1,"msg":"添加数据失败"})

        }
    })
    
    
}),


// 获取列表所有信息
router.get('/accountlist',(req,res) =>{
    const sqlStr=`select * from user order by putaway_time desc`;
    connection.query(sqlStr,(err,data) =>{
        if (err) throw err;
        res.send(data);
        
    })
    
})
// 删除
router.get('/accountdele',(req,res) =>{
    let { id }=req.query;
    console.log(id);
    
    const sqlStr = `delete from user where id = ${id}`; 
    connection.query(sqlStr,(err,data) =>{
        if (err) throw err;
        console.log(data);
        
        if(data.affectedRows >0){
            res.send({"err_code":0,"msg":"删除用户成功"})
        }else{
            res.send({"err_code":1,"msg":"删除用户失败"})
        }
        
    })
    

})


router.get('/accountedit',(req,res) =>{
    let { id }=req.query
    // console.log(id);
    const sqlStr=`select * from user where id=${id}`;
    connection.query(sqlStr,(err,data) =>{
        if (err) throw err
        // console.log(data);
        res.send(data);
        
    })
    
    
})

router.post('/accounteditsave',(req,res)=>{
      let {username,activearea,editId} =req.body
    //   console.log(username,activearea,editId);
    const sqlStr = `update user set username='${username}', activearea='${activearea}' where id=${editId}`;
    connection.query(sqlStr,(err,data) =>{
        if (err) throw err;
        if(data.affectedRows>0){
            res.send({"err_code":0,"reason":"修改成功"});

        }else{
            
            res.send({"err_code":1,"reason":"修改失败"})
        }
    })
      
})




module.exports = router;