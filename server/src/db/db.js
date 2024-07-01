const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1:27017/criticando';

async function mongoConnect() {
    await mongoose.connect(URI)
        .then(console.log('Base de datos conectado correctamente!🚀'))
        .catch((err) => console.log(`Error: ${err}`))
}
mongoConnect();

module.exports = mongoConnect;