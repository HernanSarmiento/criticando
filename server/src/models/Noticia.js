const { mongoose } = require ('mongoose');

const Noticia = mongoose.model('Noticia', {
    titulo: {
        type: String,
        required: true
    },
    contenido: {
        type: String,
        required: true
    },
    thumbnail:String,
    fechaCreado:String    
}
)
module.exports = Noticia;