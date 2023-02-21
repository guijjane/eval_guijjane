const express = require('express')
const app = express()
const port = 3000
let trans = require('./transaction')
let display = require('./view')


app.use(express.json())

app.get('/get-transactions', (req, res) => {
  res.json(trans.get_transactions());
});
app.get('/get-transaction/:id', (req, res) => {
    res.json(trans.get_transaction(req.params.id));
  });

app.post('/post-transaction', (req, res) => {
    let transact = {
    nom_client : req.body.name,
    montant : req.body.mnt
    }
    console.log(transact)
    trans.new_transaction(transact)
    res.send("added avec succee")
  });
  //______________________________________________________________

app.get("/html/tr/:id", (req, res) => {
    let id =req.params.id
    let onet=trans.get_transaction(id)
    res.send(display.displayOneT(onet))
    
  });

app.get("/html/all-transactions", (req, res) => {
    let allTransact = trans.get_transactions()
    res.send(display.DisplayAllTransactions(allTransact))
  });

  
app.post("/html/transaction", (req, res) => {
    transactions.push({
      id: transactions.length,
      nom_client: req.body.name,
      montant: req.body.mnt
    });
    res.redirect("/html/all-transactions");
  });
  
app.post("/html/add-transaction", (req, res) => {
  let ajouter = {
    nom_client : req.body.name,
    montant : req.body.mnt
    }
    console.log(ajouter)
    trans.DisplayTransaction(ajouter)
    res.send("add ajouter par success")
  });

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});