import React from 'react'
import { Link } from "react-router-dom"



const Nav = (props) => {
return (
<div className="nav">
<Link to ="/Beers">
    <div>Beers</div>
</Link>
<Link to="/TypeOf">
    <div>Type</div>
</Link>
   
</div>


)


}
export default Nav