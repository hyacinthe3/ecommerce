import React from 'react';
import '../Styles/Blog.css'
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
import b4 from '../assets/b4.jpg'
import b5 from '../assets/b5.jpg'
import b6 from '../assets/b6.jpg'

const Blog = () => {
  
  const people = [
    
    { 
      id: 1, 
      date: 'july 18 2023',
      // name: 'Women Clothes', 
      role: 'Sed magna dui, dignissim id felis vitae, consectetur', 
      image: b1
    },
    { 
      id: 2, 
      date: 'july 18 2023',
      // name: 'Bottle', 
      role: 'Fusce suscipit risus tempor, blandit urna at, laoreet ex', 
      image: b2 
    },
    { 
      id: 3,
      date: 'july 18 2023', 
      // name: 'Headphones', 
      role: 'Pellentesque varius, diam vitae mattis luctus, mi mi cursus', 
      image: b3
   }   
  ];
  const people2 = [
    { 
      id: 4,
      date: 'july 18 2023', 
      // name: 'Headphones', 
      role: 'Pellentesque varius, diam vitae mattis luctus, mi mi cursus', 
      image: b4
    },
    { 
     id: 5,
     date: 'july 18 2023', 
    //  name: 'Headphones', 
     role: 'Pellentesque varius, diam vitae mattis luctus, mi mi cursus', 
     image: b5
   },
   { 
     id: 6,
     date: 'july 18 2023', 
    //  name: 'Headphones', 
     role: 'Pellentesque varius, diam vitae mattis luctus, mi mi cursus', 
     image: b6
   }
  ]

  return (
    <div>
      <center><h1>Blog</h1></center>
      <div className="allofthem">
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
    <div className="blog-container2">
      
      {people2.map((person2) => (
        <div key={person2.id} className="blog-card2">
          <img src={person2.image} alt={`${person2.name}'s Image`} className="blog-image" />
          <h2 classname="blog-date">{person2.date}</h2>
          <h3 className="blog-name">{person2.name}</h3>
          <p className="blog-role">{person2.role}</p>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default Blog;