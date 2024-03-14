 export const getGift = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=HDHHKEUT9YrBInpL3EoqCvxP159eILuq&q=${category}&limit=10` //siempre que la funcion sea await la constante tiene que ser async
    const resp = await fetch (url)
    const {data} = await resp.json()
    
    const gift = data.map( img => ({
    
    id:img.id,
    title:img.title,
    url:img.images.downsized_medium.url
    
    }))
    
    //console.log(resp)
    //console.log(data)
    console.log(gift);
    return gift
        } 