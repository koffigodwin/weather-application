import React from 'react'
import { BsFillSunFill,BsFillMoonFill} from 'react-icons/bs'

import '../index.css'
import { UseGlobalContent } from '../Content'

const Navbar = () => {
const {toogletheme , isdarkmod} =  UseGlobalContent()

  return (
    <div className='navbar'>
        <div className="logo">
            <h3>Weather Application</h3>
        </div>
        <div className="icons">
            <button className='btn-icon' onClick={toogletheme}> 
            {isdarkmod ?<BsFillSunFill/>:<BsFillMoonFill/>}
            </button>
        </div>
    </div>
  )
}

export default Navbar