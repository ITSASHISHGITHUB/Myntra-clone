import { useState } from 'react'
import './Sidebar.css'

const Sidebar = ({setFilteredProducts,products}) => {
    const [selectedCategory,setSelectedCategory]=useState(null)

    const handleCheckbox=(value)=>{
        setSelectedCategory(value)
        const newProducts=products.filter(({category})=>category===value)
        console.log(newProducts)
        setFilteredProducts(newProducts)
    }

    return (
  

            <div className="sidebar-container">


                <div className='items-container'>

                    <label >
                        <input type="checkbox" name="category" checked={selectedCategory==='men'} onChange={()=>handleCheckbox('men')}/>Men</label>
                    <label >
                        <input type="checkbox" name="category" checked={selectedCategory==='women'} onChange={()=>handleCheckbox('women')}/>Women</label>
                    <label >
                        <input type="checkbox" name="category" checked={selectedCategory==='boys'} onChange={()=>handleCheckbox('boys')}/>Boys</label>
                    <label >
                        <input type="checkbox" name="category" checked={selectedCategory==='girls'} onChange={()=>handleCheckbox('girls')}/>Girls</label>
                </div>
                
                <div className="category-container">
                    <hr/>
                    <h3>CATEGORIES</h3>
                    <div className='items-container'>

                        <label >
                            <input type="checkbox" name="" />Shirts(95621)</label>
                        <label >
                            <input type="checkbox" name="" />Sleep Shirts(379)</label>
                        <label >
                            <input type="checkbox" name="" />Dog Shirts(9)</label>
                    </div>
                    
                    <hr/>
                </div>
                <div className='items-container'>
                    <h3>BRAND</h3>
                    <label >
                        <input type="checkbox" name="" />Parc(95621)</label>
                    <label >
                        <input type="checkbox" name="" />blackberry's(379)</label>
                    <label >
                        <input type="checkbox" name="" />Park Avenue(9)</label>
                    <label >
                        <input type="checkbox" name="" />Roadster(9)</label>
                    <label >
                        <input type="checkbox" name="" />Louis Philippe(9)</label>
                    <label >
                        <input type="checkbox" name="" />Peter England(9)</label>
                    <label >
                        <input type="checkbox" name="" />Color plus(9)</label>
                    <label >
                        <input type="checkbox" name="" />United color of Benetton(9)</label>
                   
            
                
            </div>
        </div>


    )
}

export default Sidebar