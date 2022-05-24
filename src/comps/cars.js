import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";

export default function Cars() {
  const [ar,setAr] = useState([]);
  let inputRef = useRef();

  useEffect(() => {
    doApi("BMW");
  },[])

  const doApi = async(_carSearch) => {
    let url = `https://project-yarin.herokuapp.com/cars/search/?s=${_carSearch}`;
    let resp = await axios.get(url);
    console.log(resp.data);
    setAr(resp.data);
  }

  return (
    <div className='container'>
      <div className="col-md-4 mx-auto p-3 d-flex">
        <input ref={inputRef} type="search" className="form-control" />
        <button onClick={() => {
          doApi(inputRef.current.value)
        }}>Search</button>
      </div>
      <div className="row mt-4">
        {ar.map(item => {
          return(
            <div className='col-8 p-2 shadow mx-auto mb-4'>
              <img src={item.img_url} className="w-25 float-start me-2"/>
              <h2>{item.company} {item.model}</h2>
              <div>Color: {item.color}</div>
              <div>Year: {item.year}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
