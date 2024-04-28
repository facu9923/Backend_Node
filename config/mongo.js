const mongoose = require("mongoose");

const dbConnect = () => {
    const DB_URI= process.env.DB_URI;
    mongoose.connect(
        DB_URI
    ).then(() => {
        console.log('Conexión exitosa a MongoDB');
        // Puedes iniciar tu aplicación aquí
      })
      .catch(err => {
        console.error('Error al conectar a MongoDB:');
      });
};

module.exports = dbConnect;
