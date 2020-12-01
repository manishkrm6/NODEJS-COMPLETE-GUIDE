var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  
  function runQuery(sql){ 
      con.query(sql, function (err,result){
          if (err) throw err;
          
          console.log(result);

      });
  }

  let sql = "use testuser1";
  runQuery(sql);

   sql = "Select count(*) as total_record from agr_users";
   //console.log("Result "+runQuery(sql));
   runQuery(sql);

