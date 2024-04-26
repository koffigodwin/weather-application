import axios from 'axios';
import React ,{ createContext , useContext, useState} from 'react'
const Approvider = createContext();

const Content = ({children}) => {
    const [inputvalue , setinputvalue] = useState('')
    const [checked , setchecked] = useState(true)
    const [isdarkmod , setisdarkmood] = useState(false)
     
    const toogletheme = () =>{
      const newisdarkmood = !isdarkmod
      setisdarkmood(newisdarkmood);
      const toogles = document.querySelector('body');
      toogles.classList.toggle('dark-mood',newisdarkmood);
    
    }

    
    const location  = () =>{
      navigator.geolocation.getCurrentPosition((position) =>{
        
       const latitude = position.coords.latitude 
       const longitude = position.coords.longitude
       const BigUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
       fetch(BigUrl).then(response => response.json()).then((data) =>{
        const newvalue  = data.city
        setinputvalue(newvalue)
       })

      })
    }
  return (
    <Approvider.Provider value={{inputvalue , setinputvalue , checked , setchecked , location ,toogletheme , isdarkmod }}>
        { children }
    </Approvider.Provider>
  )
}

export default Content

export const UseGlobalContent = () => useContext(Approvider)
