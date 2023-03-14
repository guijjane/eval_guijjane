const{Client}=require('pg')
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'banque',
    password: 'root',
    port: 5432,
  })
  //console.log(client)
  client.connect()
  function onQuery(error,result){
    insertdb()
    selecttransaction()


    console.log(result)
    client.end()
  }
  
  client.query('SELECT NOW()',onQuery)