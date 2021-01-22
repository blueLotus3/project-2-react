import React from 'react'

// description
// icon
//name
// type? by id?
     const Beer = (props) => {
     const {REACT_APP_APIKEY}= process.env
    const id = props.match.params.id
    const url = `https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2//beer/${id}/?key=${REACT_APP_APIKEY}`  
    const [beer,setBeer] = React.useState(null)
    const getBeer = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setBeer(data)
    
   }

    React.useEffect(() => {
        getBeer()
    },  [])
    
    const loaded = () => {
        return (
         <div>
             
            <h4>{beer.data.foodPairings}</h4>
            <img src={beer.data.labels.contentAwareLarge} alt="icon"></img>
         </div>
         
    )
}
const loading = () => {
    return <h1>Loading...</h1>
}
return beer ? loaded() : loading()

}
export default Beer