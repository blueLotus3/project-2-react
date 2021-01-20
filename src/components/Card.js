import React from 'react'
import './Card.scss'



const Card = ({title,imageUrl,body}) => {

return (

    <div className="card-Container">
            <div className='card-title'>
           <h3>{title}</h3>
        </div>
        <div className="image-container">
            <img src={imageUrl}  alt='' />
        </div>
        <div className="card-body">
            <p>{body}</p>
        </div>
    </div>
)


}
export default Card