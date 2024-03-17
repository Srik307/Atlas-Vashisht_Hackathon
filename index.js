const express = require('express');
const translator=require('./NL2SQl/translate.js');


const app = express();

app.use(express.static('src'));

app.get('/home', async (req, res) => {
  console.log("hello");
  const s= await translator.converttosql('Student whose mark is greater than 20',"students,marks,regno");
  console.log(s);
  res.send(s);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


