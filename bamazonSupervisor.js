let mysql = require("mysql");
let inquirer = require("inquirer");

// create the connection information for the sql database
let connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "Andreyroot@#",
  database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(err => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  // run the start function after the connection is made to prompt the user
  runSearch();
});

const runSearch = () => {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View Product Sales by Department",
        "Create New Department"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View Product Sales by Department":
          viewProductsByDep();
          break;

        case "Create New Department":
          // multiSearch();
          break;
      }
    });
}

const viewProductsByDep = () =>{
  let query = "SELECT departments.department_id, departments.department_name, departments.over_head_costs, products.product_sales ";
  query += "FROM departments INNER JOIN products ON (departments.department_name = products.department_name) ";
  query += "ORDER BY products.department_name, products.product_sales DESC";
  connection.query(query, (err, res) =>{
    if(err) throw err;
    console.log(`=====================================================================`)
    console.log(`Department ID || Department Name  || Overhead Costs || Product Sales`);
    res.forEach(r => {
      console.log(`    ${r.department_id}         ||      ${r.department_name}     ||      ${r.over_head_costs}       ||${r.product_sales}`);
    })
    console.log(`=====================================================================`)
    connection.end();
  })
};