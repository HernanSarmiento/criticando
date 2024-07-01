const { gql } = require('graphql-tag');

const typeDefs = gql`
    
    type Noticia{
        id:ID!
        titulo:String!
        contenido:String!
        thumbnail:String
        fechaCreado:String
    }
  
    type crearNoticiaResponse{
        code:Int!
        success:Boolean!
        message:String!
        noticia:Noticia
    }
    input NoticiaInput{
        titulo:String!
        contenido:String!
        thumbnail:String
        fechaCreado:String
    }

    input editarNoticiaInp{
        titulo:String
        contenido:String
        thumbnail:String
    }
    type Usuario{
        username:String!
        email:String!
        token:String!
    }
    input RegistroInput{
        username:String!
        email:String!
        contrasenia:String!
    }   
    input LoginInput{
        email:String
        contrasenia:String!
    }

    type Query{
        obtenerTodasLasNoticias:[Noticia!]!
        obtenerNoticia(id:ID!):Noticia
        obtenerUsuario(id:ID!):Usuario
    }

    type Mutation{
       nuevaNoticia(noticiaInput:NoticiaInput):Noticia
       editarNoticia(id:ID,editarNoticiaInp:editarNoticiaInp):Noticia
       eliminarNoticia(id:ID):Boolean
       registroUs(registroInput:RegistroInput):Usuario
       loginUs(loginInput:LoginInput):Usuario
    }
`

module.exports = typeDefs;