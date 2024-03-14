import {React, useState} from 'react'
import { AddCategory,GifGrid } from './components';


export const GiftExpertApp = () => {
    const [categories, setcategories] = useState(['one puch']);// todo esto sale solo con usestatesniped

    const onAddCategory = (newCategory) =>{
        console.log(newCategory)
        if (categories.includes(newCategory)){
            return;
        }
 setcategories([newCategory,...categories])
//setcategories(cat => [...cat, 'valorant']);
    }
   
  return (
    <>
    <h1>GiftExpertApp</h1>

<AddCategory
onNewCategory={(event) => onAddCategory(event)}
/>

{
    categories.map(category =>(
    <GifGrid 
    key={category}
    category={category}  />
))
}
 </>
  )
}      

