import React from 'react'
import '../styles/home.css'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import pr from '../assets/pr.jpg'
import p5 from '../assets/p5.jpg'
import p6 from '../assets/p6.jpg'
import p7 from '../assets/p7.jpg'
import p8 from '../assets/p8.jpg'
import p10 from '../assets/p10.jpg'
import v1 from '../assets/v1.jpg'
import v2 from '../assets/v2.jpg'
import v3 from '../assets/v3.jpg'
import v4 from '../assets/v4.jpg'
import v5 from '../assets/v5.jpg'
import v6 from '../assets/v6.jpg'
import f1 from '../assets/f1.jpg'
import f2 from '../assets/f2.jpg'
import f3 from '../assets/f3.jpg'
import f4 from '../assets/f4.jpg'
import f5 from '../assets/f5.jpg'
import f6 from '../assets/f6.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdOutlineHouseSiding } from "react-icons/md";
import { PiFireTruckLight } from "react-icons/pi";
import { TbArrowsRightLeft } from "react-icons/tb";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaCircle } from "react-icons/fa6";

export const people = [

  {
    id: 1,
    date: 'july 18 2023',
    // name: 'Women Clothes', 
    role: 'Sed magna dui, dignissim id felis vitae, consectetur',
    image: v1
  },
  {
    id: 2,
    date: 'july 18 2023',
    // name: 'Bottle', 
    role: 'Fusce suscipit risus tempor, blandit urna at, laoreet ex',
    image: v2
  },
  {
    id: 3,
    date: 'july 18 2023',
    // name: 'Headphones', 
    role: 'Pellentesque varius, diam vitae mattis luctus, mi mi cursus',
    image: v3
  }
];
export const features = [
  {
    icon: <TbArrowsRightLeft />,
    title: "Easy Returns",
    description: "Our return policy is simple and that is why customers love our shop."
  },
  {
    icon: <PiFireTruckLight />,
    title: "Customer Service",
    description: "Our return policy is simple and that is why customers love our shop."
  },
  {
    icon: <MdOutlineHouseSiding />,
    title: "High Quality",
    description: "Our return policy is simple and that is why customers love our shop."
  }
];
export const people2 = [
  {
    id: 4,
    date: 'july 18 2023',
    // name: 'Headphones', 
    role: 'Pellentesque varius, diam vitae mattis luctus, mi mi cursus',
    image: v4
  },
  {
    id: 5,
    date: 'july 18 2023',
    //  name: 'Headphones', 
    role: 'Pellentesque varius, diam vitae mattis luctus, mi mi cursus',
    image: v5
  },
  {
    id: 6,
    date: 'july 18 2023',
    //  name: 'Headphones', 
    role: 'Pellentesque varius, diam vitae mattis luctus, mi mi cursus',
    image: v6
  }
];
export const follow = [
  {
    id: 7,
    date: 'july 18 2023',
    // name: 'Headphones', 
    role: 'Pellentesque varius, diam vitae mattis luctus, mi mi cursus',
    image: f1
  },
  {
    id: 8,
    date: 'july 18 2023',
    //  name: 'Headphones', 
    role: 'Pellentesque varius, diam vitae mattis luctus, mi mi cursus',
    image: f2
  },
  {
    id: 9,
    date: 'july 18 2023',
    //  name: 'Headphones', 
    role: 'Pellentesque varius, diam vitae mattis luctus, mi mi cursus',
    image: f3
  },
  {
    id: 10,
    date: 'july 18 2023',
    // name: 'Headphones', 
    role: 'Pellentesque varius, diam vitae mattis luctus, mi mi cursus',
    image: f4
  }
]

// export const arrivals=[
//   {
//     id:11,
//     name:'all  bottle one',
//     price:'$22.00 – $55.00',
//     image: img8
//   }
  // {
  //   id:12,
  //   name:'amazon alexa',
  //   price:'$49.00 – $69.00' ,
  // },
  // {
  //   id:13,
  //   name: 'Headset Gamer Legion',
  //   price:'$22.00 – $55.00'
  // }
// ]

const Home = () => {
  const [hovered, setHovered] = useState(false);
  const navigation =useNavigate();
  
      const handleNavigate=(id) =>{
          navigation(`/sinlgePage/${id}`)
      }
  
  return (
    <div>
      <div className="container">
        <div>
          <ul>
            <li classname="aa">Electronics</li>
            <li classname="aa">Computer Gadget</li>
            <li classname="aa">Fashion</li>
            <li classname="aa">Body Lotions</li>
            <li classname="aa">Sports</li>
            <li classname="aa">Women clothes</li>
            <li classname="aa">Shoes</li>
            <li classname="aa">Watches</li>
          </ul>
        </div>
        <div classname="explore">
          <font color="gray">
            <p> Explore our latest and <br />greatest electronics</p></font>
          <button>shop now</button>
        </div>
        <div className="unnecessary">

        </div>
      </div>
      <div className="popular">
        <h1>Popular Categories</h1>
        <div className="one">
          <div className="img1">
            <img src={p1} alt="" width={170} height={170} /><br /><p> BodyLotions</p>
          </div>
          <div className="img2">
            <img src={p2} alt="" width={170} height={170} /><br /><p>Sports</p>
          </div>
          <div className="img3">
            <img src={p3} alt="" width={170} height={170} /><br /><p>Computer Gadget</p>
          </div>
          <div className="img4">
            <img src={pr} alt="" width={170} height={170} /><br /><p>Electronics</p>
          </div>
          <div className="img5">
            <img src={p5} alt="" width={170} height={170} /><br /><p>Watches</p>
          </div>
          <div className="img6">
            <img src={p6} alt="" width={170} height={170} /><br /><p>Women clothes</p>
          </div>
        </div>
        <h1>New Arrival Products</h1>
        {/* {arrivals.map((arrive) =>(
          <div key={arrive.id} classname="arrived">
            <img src={arrive.image} alt={`${arrive.image}'s Image`}  />
            <h2>{arrive.name}</h2>
            <h3>{arrive.price}</h3>
          </div>
        ))}
         */}
        <div className="arrivals">

          <div className="img8" id="11">
            <img src={p7} alt="" width={270} height={300} />
            <br /><b> All In One Bottle <br />
              <br /> $22.00 – $55.00</b><br />
            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
            <MdOutlineStarPurple500 style={{ color: "gray", fontSize: "20px" }} />
            <MdOutlineStarPurple500 style={{ color: "gray", fontSize: "20px" }} />
            <br /><FaCircle style={{ color: "gray", fontSize: "20px" }} /> <FaCircle style={{ color: "brown", fontSize: "20px" }} /> <FaCircle style={{ color: "dimgrey", fontSize: "20px" }} />
          </div>
          <div className="img9" id="12" onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
            <img src={p8} alt="" width={270} height={300} /><br />
            {hovered && (
        <button className="absolute bottom-full left-0 w-full mb-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md transition-opacity duration-300">
          Quick view
        </button>
      )}
            <b>
              Amazon Alexa <br />
              $49.00 – $69.00 <br />
            </b>
            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
            <br /><FaCircle style={{ color: "gray", fontSize: "20px" }} />

          </div>
          <div className="img7" id="13">
            <img src={p10} alt="" width={270} height={300} /><br />
            Headset Gamer Legion <br />
            $22.00 – $55.00 <br />
            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
            <MdOutlineStarPurple500 style={{ color: "orange", fontSize: "20px" }} />
            <MdOutlineStarPurple500 style={{ color: "gray", fontSize: "20px" }} /> <br />
            <FaCircle style={{ color: "gray", fontSize: "20px" }} /> <FaCircle style={{ color: "brown", fontSize: "20px" }} />
          </div>
        </div>
        <div className="allofthem">
          <h1>Our Vendor List</h1>
          <div className="blog-container">

            {people.map((person) => (
              <div key={person.id} className="blog-card">
                <img src={person.image} alt={`${person.name}'s Image`} className="blog-image" />
                <h2 classname="blog-date">{person.date}</h2>
                <h3 className="blog-name">{person.name}</h3>
                <p className="blog-role">{person.role}</p>
              </div>
            ))}
          </div>
           {/* <div className='Navcontainer'>
                      {productList.map((item) =>(
                          <div className='cont' key={item.id}>
                          <div ><img src={item.image} alt="" /></div> 
                          <div>{item.cardTitle}</div>  
                          <button type='button' className='button'
                          onClick={()=>handleNavigate(item.id)}>view</button>
                          </div>
                      ))}
                  </div> */}
          <div className="blog-container2">

            {people2.map((person2) => (
              <div key={person2.id} className="blog-card2">
                <img src={person2.image} alt={`${person2.name}'s Image`} className="blog-image" />
                <div>{person2.cardTitle}</div>
                <button type="button" onClick={()=>handleNavigate(person2.id)}>view</button>
                <h2 classname="blog-date">{person2.date}</h2>
                <h3 className="blog-name">{person2.name}</h3>
                <p className="blog-role">{person2.role}</p>
              </div>
            ))}
          </div>
        </div>
        <center><button>See All Vendors</button></center>
      </div><br /> <br />
      <h1>Why People Choose Us</h1><br />
      
      <div className="feature-section">
      {features.map((feature, index) => (
        <div key={index} className="feature-box">
          <div className="icon-circle">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
      
     <br />
      <h1>Follow Us On @ Instagram</h1>
      <div className="blog-container3">

            {follow.map((person3) => (
              <div key={person3.id} className="blog-card3">
                <img src={person3.image} alt={`${person3.name}'s Image`} className="blog-image" />
                <h2 classname="blog-date">{person3.date}</h2>
                <h3 className="blog-name">{person3.name}</h3>
                <p className="blog-role">{person3.role}</p>
              </div>
            ))}
          </div>

    </div>
  )
}

export default Home