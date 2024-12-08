import React from 'react'
import {Stack} from '@mui/material'
import {categories} from '../utils/constants'

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
//  const [selectedCategory,setSelectedCategory]= props
  return (
  <Stack drection="row" sx={{overflowY:"hidden",height:{sx:'auto',md:'95%'},flexDirection:{md:'column'}}}>
    {
        categories.map((category)=>{
        return( 
        <button onClick={()=>setSelectedCategory(category.name)} key={category.name} className="category-btn" style={{
         background:category.name===selectedCategory && "#245d9e",
         color:"white"
        }}>
         <span style={{color:category.name===selectedCategory?"white":'#245d9e', marginRight:"10px"}}>{category.icon}</span>
         <span style={{opacity:category.name===selectedCategory?'1.0':'0.5'}}>{category.name}</span>         
        </button>)
      }

      )
    }
  </Stack>
  )
}
export default Sidebar
