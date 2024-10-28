const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const { resolve } = require("dns");
const { type } = require("os");
require('dotenv').config();

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "asset")));
app.use(express.urlencoded({ extended: true }));

const port = process.env.SERVER_PORT || 8080;

main()
  .then(() => {
    console.log("Connection With Server is Successful");
  }).catch((err) => {
    console.log(err)
  });

  async function main() {
    await mongoose.connect(process.env.MONGO_URI || 8080, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
    console.log("Hello Mongo");
  }

app.listen(port, () => {
  console.log(`Example app listening on port 8080`)
});


// Define schemas
const managerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  employeeId: {
    type: Number,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    default: "123@finalliance"
  },
});

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  customerId: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pannumber: {
    type: String,
    required: true
  },
  aadharnumber: {
    type: Number,
    required: true
  },
  accounttype:{
    type: String,
    required: true
  },
  linkedservices:{
    type: String,
    required: true
  },
  noofbank: {
    type: Number,
    required: true
  },
  enquiries:{
    type: Number,
    required: true
  },
  tpm:{
    type: Number,
    required: true
  },
  creditscore: {
    type: Number,
    required: true
  },
  customerphoto:{
    type: String,
    required: true
  }
});

const transactionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  customerId: {
    type: Number,
    required: true
  },
  pannumber: {
    type: String,
    required: true
  },
  transactions: [],
  detailsId: {
    type: String,
    required: true
  }
});

const accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  customerId: {
    type: Number,
    required: true
  },
  detailsId: {
    type: String,
    required: true
  },
  bank: [],
  noofbank: {
    type: Number,
    required: true
  },
  accstatus: [],
  opendate: [],
  accounttype:[],
  branch: [],
  linkservices: {
    type: String,
    required: true
  }
});

const loanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  customerId: {
    type: Number,
    required: true
  },
  detailsId: {
    type: String,
    required: true
  },
  pannumber: {
    type: String,
    required: true
  },
  noofloans: {
    type: Number,
    required: true
  },
  loansfrom: [],
  loansstatus: [],
  loansamount: [],
  duration: [],
  issuedon:[],
  interestrate: [],
  payhistory: [],
  anypenalty: []
});




const manager = mongoose.model("manager", managerSchema);
const customer = mongoose.model("customer", customerSchema);
const toptransaction = mongoose.model("toptransaction", transactionSchema);
const account = mongoose.model("account", accountSchema);
const loan = mongoose.model("loan", loanSchema);

const manageruser = new manager({
  name: "Vishal Sharma",
  employeeId: 101,
  age: 22,
  email: "contact@vishalsharma.site",
  username: "vishal_sharma",
  password: "485697@vishal"
});

const customeruser1 = new customer({
  name: "Narendra Damodardas Modi",
  customerId: 303464139,
  age: 74,
  email: "namo@narendramodi.com",
  pannumber: "123456789A",
  aadharnumber: 965678040400,
  accounttype:"Saving",
  linkedservices:"Yes",
  noofbank: 2,
  enquiries: 0,
  tpm: 251,
  creditscore: 852,
  customerphoto: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKqIg3pZGnGVuDbO7piYwe2EBzDMOcMohDv5sIWQ-tnD7ruRla"
});

const toptransactiondata = new toptransaction({
  name: "Narendra Damodardas Modi",
  customerId: 303464139,
  pannumber: "123456789A",
  transactions: [{
    trans_name: 'UPI/CR/425275620986/VISHAL RA/FDRL/**06180@JUPITERAXIS/SENT VIA//AXIJUP17294740911473842357659605133',
    amount: 511051,
    date: '02/06/2024'
  },{
    trans_name: 'UPI/CR/425275620986/AMIT SHA/FDRL/**06180@AXIS/SENT VIA//AXIJUP172947409142357659605133',
    amount: 26420,
    date: '24/04/2022'
  },{
    trans_name: 'UPI/CR/425275620986/YOGI JI/FDRL/**06180@FAMPAY/SENT VIA//AXIJUP1729151809114738423576596548149',
    amount: 63271,
    date: '11/06/2020'
  },{
    trans_name: 'IMPS/CR/425275620986/HITESH PA/FDRL/**06180@JUPITERAXIS/SENT VIA//AXIJUP17294740911473842357659605133',
    amount: 693192,
    date: '30/08/2020'
  },{
    trans_name: 'UPI/CR/425275620986/VRUSHABH P/FDRL/**06180@GPAYAXIS/SENT VIA//IMPJUP1754988884815517659605133',
    amount: 20004,
    date: '02/06/2019'
  },{
    trans_name: 'NEFT/CR/425275620986/BJP H/FDRL/**06180@CANADAXIS/SENT VIA//NEFTJUP17549888848155176984988118',
    amount: 70200,
    date: '04/5/2019'
  }],
  detailsId: "670777c25dcd9e6cf7c2e7de"
});


const accountdata = new account({
  name: "Narendra Damodardas Modi",
  customerId: 303464139,
  detailsId: "670777c25dcd9e6cf7c2e7de",
  bank: ["State Bank of India", "BOB Bank"],
  noofbank: 2,
  accstatus: ["Active","Active"],
  opendate: ["05/04/2020","24/08/2021","25/07/2019"],
  accounttype: ["Savings","Savings"],
  branch: ["New Delhi", "New Delhi"],
  linkservices: "Yes"
});

const loandata = new loan({
  name: "Narendra Damodardas Modi",
  customerId: 303464139,
  detailsId: "670777c25dcd9e6cf7c2e7de",
  pannumber: '123456789A',
  noofloans: 2,
  loansfrom: ["Punjab National Bank", "State Bank of India"],
  loansstatus: ["Active","Inactive"],
  loansamount: [843500,709612],
  duration: ["1 Years","6 Months"],
  issuedon:["05/12/2023","28/04/2024"],
  interestrate: [6.2, 7.3],
  payhistory: ["On Time","On Time"],
  anypenalty: ["NO","NO"]
});







app.get("/", async (req, res) => {
  res.render("managerlogin.ejs");
});

// app.get("/manager/deshboard", (req,res) =>{
//     res.render("managerDeshboard.ejs");
// })

app.post("/manager", async (req, res) => {
  const { username: inputusername, password: inputpassword } = req.body;
  console.log(inputusername, inputpassword);
  try {
    // Find the manager by username and password
    const managerdata = await manager.findOne({ username: inputusername, password: inputpassword });
    if (managerdata) {
      // If manager is found, redirect to their dashboard
      res.redirect(`/manager/${managerdata._id}/dashboard`);
    } else {
      // If manager is not found, re-render the login page with an error
      res.render("managerlogin", { error: "Invalid username or password" });
    }
  } catch (err) {
    console.log(err);
    res.render("managerlogin", { error: "An error occurred, please try again" });
  }
});

app.get("/manager/:id/dashboard", async (req, res) => {
  const { id } = req.params;

  try {
    // Find the manager by ID
    const managerdata = await manager.findById(id);

    if (managerdata) {
      // Render dashboard with manager data
      res.render("managerDeshboard.ejs", { managerdata });
    } else {
      res.render('managerDeshboard', { error: "Manager not found" });
    }
  } catch (err) {
    console.log(err);
    res.render('managerDeshboard', { error:("Error retrieving manager data")});
  }
});

app.get("/manager/:id/dashboard/profile", async (req, res) => {
  const { id } = req.params;
  try {
    const managerData = await manager.findById(id);
    if (managerData) {
      res.render("managerProfile.ejs", { managerdata: managerData });
    } else {
      res.status(404).send("Manager not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving manager data");
  }
});

app.post("/manager/:id/dashboard/customer", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { pannumber: inputpannumber, aadharnumber: inputaadharnumber } = req.body;

  try {
      // Find the customer by PAN and Aadhar number
      const managerdata = await manager.findById(id);
      const customerdata = await customer.findOne({ pannumber: inputpannumber, aadharnumber: inputaadharnumber });
      console.log(customerdata);
      if (customerdata) {
          // If customer is found, redirect to the customer dashboard
          res.redirect(`/manager/${id}/dashboard/customer/${customerdata._id}`);
      } else {
          // If customer is not found, re-render the manager dashboard with an error
          // res.render("managerDeshboard", { managerdata, error: "Invalid PAN or Aadhar number" });
          res.render("managerDeshboard", { managerdata });
      }
  } catch (err) {
      console.log(err);
      const { id } = req.params;
      console.log(id);
      console.log("HEllo  WROOR ");
      res.render("managerDeshboard", { error: "An error occurred, please try again" });
      // res.render("managerDeshboard", { managerdata });
  }
});



app.get("/manager/:id/dashboard/customer/:customerId", async (req, res) => {
  const { id, customerId } = req.params;
  try {
    const managerdata = await manager.findById(id);
    const customerdata = await customer.findById(customerId);
    if (managerdata && customerdata) {
      res.render("customerDashboard.ejs", { managerdata, customerdata });
    } else {
      res.status(404).send("Customer or Manager not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving customer or manager data");
  }
});

app.get("/manager/:id/dashboard/customer/:customerId/loans", async (req, res) => {
  const { id, customerId } = req.params;
  try {
    const loandata = await loan.findOne({detailsId: customerId});
    const managerdata = await manager.findById(id);
    const customerdata = await customer.findById(customerId);
    if (managerdata && customerdata && loandata) {
      res.render("customerLoan.ejs", { managerdata, customerdata, loandata });
    } else {
      res.status(404).send("Customer or Manager not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving customer or manager data");
  }
});

app.get("/manager/:id/dashboard/customer/:customerId/accounts", async (req, res) => {
  const { id, customerId } = req.params;
  try {
    const accountdata = await account.findOne({detailsId: customerId});
    const managerdata = await manager.findById(id);
    const customerdata = await customer.findById(customerId);
    if (managerdata && customerdata && accountdata) {
      res.render("customerAccounts.ejs", { managerdata, customerdata, accountdata });
    } else {
      res.status(404).send("Customer or Manager not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving customer or manager data");
  }
});

app.get("/manager/:id/dashboard/customer/:customerId/transactions", async (req, res) => {
  const { id, customerId } = req.params;
  try {
    const toptransactiondata = await toptransaction.findOne({ detailsId: customerId});
    const managerdata = await manager.findById(id);
    const customerdata = await customer.findById(customerId);
    if (managerdata && customerdata && toptransactiondata) {
      res.render("customerTopT.ejs", { managerdata, customerdata, toptransactiondata });
    } else {
      res.status(404).send("Customer or Manager not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Error retrieving customer or manager data");
  }
});

// manageruser.save();
// manager.find({ username: "vishal_sharma" })
//   .then((docs) => {
//     console.log("Found document(s):", docs);
//   })
//   .catch((err) => {
//     console.log("Error finding document(s):", err);
//   });

// customeruser1.save();
// customer.find({ pannumber: "123456789A" })
//   .then((docs) => {
//     console.log("Found document(s):", docs);
//   })
//   .catch((err) => {
//     console.log("Error finding document(s):", err);
//   });


// toptransactiondata.save();
// toptransaction.find({ pannumber: "123456789A" })
//   .then((docs) => {
//     console.log("Found document(s):", docs);
//   })
//   .catch((err) => {
//     console.log("Error finding document(s):", err);
//   });

// accountdata.save();
// account.find({ pannumber: "123456789A" })
//   .then((docs) => {
//     console.log("Found document(s):", docs);
//   })
//   .catch((err) => {
//     console.log("Error finding document(s):", err);
//   });

// loandata.save();
// loan.find({ pannumber: "123456789A" })
//   .then((docs) => {
//     console.log("Found document(s):", docs);
//   })
//   .catch((err) => {
//     console.log("Error finding document(s):", err);
//   });