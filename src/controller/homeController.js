import connection from '../configs/connectDB'

let getHomepage = (req,res) => {
    //logic
let data =[];
connection.query(
  'SELECT * FROM `users`',
  function(err, results, fields) {
   results.map((row) =>  data.push(row));
   return res.render('test/index.ejs',{dataUser: JSON.stringify(data)});

  }
);
}

module.exports = {
    getHomepage
}