import React from 'react'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import { useNavigate } from 'react-router-dom';
import '../Styles/HomePage.css'
import '../Styles/home.css'
export const productList = [
    {
        id: 1,
        image: p1,
        cardTitle:"oil",
    },
    {
        id: 2,
        image: p2,
        cardTitle:"sugar",
    },
    {
        id: 3,
        image: p3,
        cardTitle:"oil",
    }
]
const HomePage = () => {
    const navigation =useNavigate();

    const handleNavigate=(id) =>{
        navigation(`/sinlgePage/${id}`)
    }
    return (
        <div className='Navcontainer'>
            {productList.map((item) =>(
                <div className='cont' key={item.id}>
                <div ><img src={item.image} alt="" /></div> 
                <div>{item.cardTitle}</div>  
                <button type='button' className='button'
                onClick={()=>handleNavigate(item.id)}>view</button>
                </div>
            ))}
        </div>
    )
}

export default HomePage