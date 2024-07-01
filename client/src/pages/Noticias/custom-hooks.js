import { useQuery, gql } from '@apollo/client'

const OBTENER_NOTICIA = gql`
    query ObtenerNoticia($obtenerNoticiaId: ID!) {
        obtenerNoticia(id: $obtenerNoticiaId) {
            id
            titulo
            contenido
            thumbnail
            fechaCreado
        }
    }
`
export const useNoticia = (id) => {
    const { loading, error, data } = useQuery(OBTENER_NOTICIA,
         { 
            variables: { obtenerNoticiaId:id } 
        });
    return {
        loading,
        error,
        data
    }
}