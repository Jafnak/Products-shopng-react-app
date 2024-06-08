import React, { useState } from 'react'
import Nav from './Nav'

const Search = () => {
  const [data,changeData]=useState(
    {
    
    "title":""
    
    }
)
const inputHandler =(event)=>{
    changeData({...data,[event.target.name]:event.target.value})
}

const readValue=()=>{
console.log(data)
}
  return (
    <div>
<Nav/>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label" >Title</label>
        <input type="text" className="form-control" name='title' value={data.title}  onChange={inputHandler}/>
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-success" onClick={readValue}>Search</button>
        </div>
    </div>
</div>

    </div>
  )
}

export default Search