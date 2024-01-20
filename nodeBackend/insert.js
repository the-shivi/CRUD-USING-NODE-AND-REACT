var con = require('./db_connection');
var connection = con.getConnection();
connection.connect();
var express = require('express');

var router = express.Router();

router.post('/',(req,res)=>{
    var e_id = req.body.e_id;
    var e_name = req.body.e_name;
    var e_sal = req.body.e_sal;
    const params = [e_id,e_name,e_sal]
    var query = 'insert into employees values(?,?,?)';

    connection.query(query,params,(error,result)=>{
        if(error){
            console.log(error);
            res.send(error);
        }
        else{
            res.send({"insert":"success"})
        }
    });

});

module.exports = router;