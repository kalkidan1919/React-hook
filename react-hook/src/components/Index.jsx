import React from 'react'
import "./index.css"
import { useState } from 'react'

function Index() {
    // let [count, setCount]= useState(10);
    // let increment=()=>{
    //     // count=count+10;
    //     // console.log(count)
    //     setCount((count)=> count+10);
    // }
    let [Car, setCar] = useState({
      name: "ford",
      model: "1",
      year: "1996",
      color: "red",
      img: "https://www.istockphoto.com/photo/new-life-in-forest-gm1911602365-554827711?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner_media&utm_term=nature",
    });
    const updateColor = () => {
      setCar((prevState) => ({
        ...prevState, // Spread operator to keep existing properties
        color: "blue",
        img: "https://example.com/new-image.jpg", // Replace with a valid image URL
      }));
    };


  return (
    <div>
      <h1>this is my first react-hook work</h1>
      <hr />
      <h2>my {Car.name}</h2>
      <h2>
        it is a <span className={Car.color}>{Car.color}</span>
        {Car.model} from {Car.year}
      </h2>
      <div>
        <img src={Car.img} alt="" width="50%" />
      </div>
      <button type="button" onClick={updateColor}>
        change image
      </button>

      {/* <h1>use state example</h1>
        <h1>{count}</h1>
        <button onClick={increment}>increment by 10</button>
       */}
    </div>
  );
}

export default Index

