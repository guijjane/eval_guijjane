var transactions = [
    { nom_client: "Client 1", montant: 1000, dateExe: "11/12/2020", emetteur: "abdelilah", destinataire:"abdelghfar"},
    { nom_client: "Client 2", montant: 2000, dateExe: "11/12/2020", emetteur: "abdelilah", destinataire:"abdelghfar"},
    { nom_client: "Client 3", montant: 1212, dateExe: "11/12/2020", emetteur: "abdelilah", destinataire:"abdelghfar"},
    { nom_client: "Client 4", montant: 2222, dateExe: "11/12/2020", emetteur: "abdelilah", destinataire:"abdelghfar"}
  ];
  
   function get_transactions() {
    return transactions;
  }
  
   function get_transaction(transaction_number) {
    return transactions[transaction_number];
  }
  
   function new_transaction(customer_name, amount) {
    let transaction ={ nom_client: customer_name, montant: amount}
    transactions.push(transaction);
  }

  module.exports.get_transactions= get_transactions
  module.exports.get_transaction= get_transaction
  module.exports.new_transaction= new_transaction