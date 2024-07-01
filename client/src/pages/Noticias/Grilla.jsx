import { gql, useQuery } from '@apollo/client'
import { gsap } from 'gsap'
import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Component() {

  const obtenerNoticias = gql`
  query{
    obtenerTodasLasNoticias{
      id
      titulo
      thumbnail
    }
  }
`
  useLayoutEffect(() => {
    let tl = gsap.timeline();
    tl.to('.noticias', {
      x: '-2000px',
    })
    tl.to('.noticias',{
      x:0,
      ease:'power4.inOut',
      duration:2.1
    })
  })

  const { loading, error, data } = useQuery(obtenerNoticias)
  if (loading) return <p>loading</p>
  if (error) return <p>error</p>

  return (
    <div className='grid grid-cols-3 gap-6 noticias'>
      {data.obtenerTodasLasNoticias?.map((noticias) => (
        <div key={noticias.id}>
          <img src={noticias.thumbnail} alt={noticias.titulo} />
          <h1 className='text-white text-xl uppercase pb-12'>{noticias.titulo}</h1>
          <Link to={`/noticia/${noticias.id}`}>
            <button>Leer</button>
          </Link>
        </div>
      ))}
    </div>
  )

}
