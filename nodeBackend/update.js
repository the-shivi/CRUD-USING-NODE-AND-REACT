var con = require('./db_connection');
var connection = con.getConnection();
connection.connect();
var express = require('express');

var router = express.Router();

router.put('/',(req,res)=>{
    var e_id = req.body.e_id;
    var e_name = req.body.e_name;
    var e_sal = req.body.e_sal;

    const params = [e_name,e_sal,e_id]
    var query = 'update employees set e_name=?, e_sal=? where e_id=?';

    connection.query(query,params,(error,result)=>{
        if(error){
            console.log(query);
            res.send({"update":"failed"});
        }
        else{
            console.log(query);
            res.send({"update":"success"})
        }
    });
});

module.exports = router;