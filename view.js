function displayOneT(transaction) {
  return `
      <div>
        <h2>Nom du client : ${transaction.nom_client}</h2>
        <h2>Montant : ${transaction.montant}</h2>
        <h2>Date d'execution: ${transaction.dateExe}</h2>
        <h2>Emetteur : ${transaction.emetteur}</h2>
        <h2>Destinataire: ${transaction.destinataire}</h2>
      </div>
    `
  }
  
function DisplayAllTransactions(transactions) {
   return `
    <table border=1>
    <tr>
    <td> Nom </td>
    <td> Montant </td>
    <td> Date d'Execution </td>
    <td> Emetteur </td>
    <td> Destinataire </td>
    </tr>
    ${transactions.map(trs => 
      `<tr>
      <td>${trs.nom_client}</td>
      <td>${trs.montant}</td>
      <td>${trs.dateExe}</td>
      <td>${trs.emetteur}</td>
      <td>${trs.destinataire}</td>
      </tr>`
    )}  
    </table>
    `
  }
  
  module.exports.displayOneT=displayOneT
  module.exports.DisplayAllTransactions=DisplayAllTransactions
 // module.exports.DisplayTransaction= DisplayTransaction


 /* function DisplayTransaction(transaction) {
    return 
    `
      <div>
        <p>Nom du client : <a href="/html/transaction/${transaction.id}"> ${transaction.nom_client} </a> </p>
        <p>Montant : ${transaction.montant}</p>
      </div>
    `
  }*/


  
  
    
  