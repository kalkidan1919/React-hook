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
      img: "C:UsershpPicturesSaved Pictures96338fa84c373e3db4121205f745438c.jpg",
    });
    const updateColor=()=>{
      setCar({
        color: "blue",
        img: "C:UsershpPictureskal.jpg",
      });

    }

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

