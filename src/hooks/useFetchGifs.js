import React, { useEffect, useState } from 'react';
import { getGift } from '../helpers/getGift';

export const useFetchGifs = (category) => {

const [images, setImagen] = useState([])
const [isLoading, setIsLoading] = useState(true)


const getImages = async() => {
const newImages = await getGift (category);
setImagen(newImages);
setIsLoading(false);
}
useEffect(() => {
getImages();

}, [])


  return {
    images: images, //puedo poner directamente la variable, quedaria ario images,
    isLoading   //le digo arriba que es false
  }
}
