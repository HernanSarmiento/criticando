import { gql } from '@apollo/client'

export const Noticias = gql`
{
  obtenerTodasLasNoticias{
    id,
    titulo,
    contenido,
    thumbnail
    fechaCreado
  }
}
`
export const Noticia = gql`
{
  obtenerNoticia(id: $obtenerNoticiaId) {
    id
    titulo
    contenido
    thumbnail
    fechaCreado
  }
}

`