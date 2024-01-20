var con = require('./db_connection');
var connection = con.getConnection();
connection.connect();
var express = require('express');

var router = express.Router();

router.delete('/',(req,res)=>{
    var e_id = req.body.e_id;
    const param = [e_id]
    var query = 'delete from employees where e_id=?';
    console.log(e_id)

    connection.query(query,param,(error,results)=>{
        if(error){
            console.log(error);
            res.send({"delete":"failed"});
        }
        else{
            console.log(query);
            res.send({"delete":"success"});
        }
    });
});

module.exports = router;