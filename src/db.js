const mongoose = require('mongoose');

const URI_DB = 'mongodb+srv://crmb:<12345>@cluster0.vizrm.mongodb.net/db_tienda?retryWrites=true&w=majority';

mongoose
  .connect(URI_DB, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(db => console.log("Conexión establecida con la base de datos!"))
  .catch(err => console.log(err));

  module.exports = mongoose;
 