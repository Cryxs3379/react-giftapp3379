import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftItem } from './GiftItem';

export const GifGrid = ({category}) => {

  const { images,isLoading} = useFetchGifs( category)
  console.log({images,isLoading})

    
  return (
    <>
        <h3>{category}</h3>

        {
          isLoading && (<h2>Cargando...</h2>)// cuando esta cargando las imagenes, isloading es true, cuando termina se comvierte en false y ya no muesta el cargando isloading && dice que si es true hace eso 
        }
        
        <div className='card-grid'>
          {
            images.map ((image) => (
             <GiftItem
             key={image.id}
             {...image}
             
             />
            ))
          }
       </div>
    </>
  )
}
