import React from 'react'
import { UseGlobalContent } from '../Content'
import '../index.css'
const InputForm = () => {

  const { inputvalue , setinputvalue , setchecked , location ,checked } = UseGlobalContent();
  

  const handleChange = (event) =>{
    event.preventDefault()
    const newvalue = event.target.elements.search.value
    if (!newvalue) return
    setinputvalue(newvalue)
    setchecked(false);
   if (inputvalue === '') {
    setchecked(true)
   }   
   
  } 
const locationgenerate = () =>{
  setchecked(false);
  location();
  
}

  return (
    <div className={checked?'container':'subcontainer'}>
      
                 <p className='paragraph'>Enter the city name</p>
                  <form className='input-form' onSubmit={handleChange}>
                 <input type="text" name='search' placeholder='ex : chennai or lome' className='inputage '/>
                <button type='submit' className='btn-submit'>submit</button>
              </form>
              <p className='or-container'>or</p>
            <button className='btn-location' type='submit' onClick={locationgenerate}>current location</button>
           
    </div>
  )
}

export default InputForm