import React from 'react'
import { Link } from "react-router-dom"
import {slide as Menu } from 'react-burger-menu'


const Nav = (props) => {
return (
 
    
<Menu>    
<div className="nav">
    <Link to ="/">
        <div>Home</div>
        
    </Link>
<Link to ="/Beers">
    <div>Beers</div>
</Link>
<Link to="/TypeOf">
    <div>Type Of</div>
</Link>
</div>
</Menu>

)


}
export default Nav