import React from 'react'

import { useParams } from 'react-router-dom';
// import { follow } from './Home';
// import { features } from './Home';
// import { people } from './Home';
import { people2 } from './Home';
const SinglePage = () => {
    const{id}=useParams();
    console.log("product list",id)

    const card=people2.find((card)=>card.id==id);
    // const card1=people.find((card)=>card.id==id);
    // const card2=features.find((card)=>card.id==id);
    // const card3=follow.find((card)=>card.id==id);
  return (
    <div>
        <div><img src={card.image}/></div>
        <div>{card.cardTitle}</div>

        {/* <div><img src={card1.image}/></div>
        <div>{card1.cardTitle}</div>

        <div><img src={card2.image}/></div>
        <div>{card2.cardTitle}</div>

        <div><img src={card3.image}/></div>
        <div>{card3.cardTitle}</div> */}
    </div>
  )
}

export default SinglePage