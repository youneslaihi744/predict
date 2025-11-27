const mongoose = require('mongoose');
// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/producto')
    .then(() => {
        console.log('Conexión a la base de datos establecida');
    }).catch(err => {
        console.error('Error de conexión a la base de datos:', err);
    });

const Schema = mongoose.Schema;
const PredictSchema = new Schema({
    result: { type: Number, required: true },
    timestamp: String,
});

module.exports = mongoose.model('Predict', PredictSchema);