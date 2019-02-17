const mysql=require("mysql");
// 创建连接对象
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'smms'
});

// 使用连接方法
connection.connect(() =>{
    console.log("连接数据库成功");
    
})

module.exports=connection;