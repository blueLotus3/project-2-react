import React from 'react'
import { Link } from "react-router-dom"



const Nav = (props) => {
return (
<div className="nav">
    <Link to ="/">
        <div>Beer Bible</div>
    </Link>
<Link to ="/Beers">
    <div>Beers</div>
</Link>
<Link to ="/SingleBeer">
    
</Link>
</div>


)


}
export default Nav