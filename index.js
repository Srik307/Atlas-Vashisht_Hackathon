const translator = require('./NL2SQl/translate.js');
const db = require('./DataBridge/getSchema.js');
const dbexec = require('./DataBridge/runQuery.js');
const readline = require('readline');


const config = {
  host: 'localhost',
  user: 'your_database_user',
  password: 'your_database_password',
  database: 'your_database_name'
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const schema = await db(config);

rl.question("Atlas: Ask your Question ? ", async (ques) => {
  const sqlquery = await translator.converttosql(ques, schema);
  console.log("Translated Query: " + sqlquery);
  const res = await dbexec(sqlquery, config);
  console.log(`Results:${res}`);
  rl.close();
});
