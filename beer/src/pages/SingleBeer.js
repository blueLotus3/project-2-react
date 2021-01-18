import React from 'react'
// description
// icon
//name
// type? by id?
const SingleBeer = (props) => {
    const apiKey = "782b02763a57e7621f3a90353ed1e84b"
    const category = props.match.params.category
    const url = `http://api.brewerydb.com/v2//beers/${category}/?key=${apiKey}`
    const [setSingleBeer] = React.useState(null)
    const getSingleBeer = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setSingleBeer(data)
    console.log('this is data', data)    
}

    React.useEffect(() => {
        getSingleBeer()
    },  [])
    
    const loaded = () => {
        return (
         <div>
             <h2> {category}  </h2>
         </div>
         
    )
}
const loading = () => {
    return <h1>Loading</h1>
}
return SingleBeer ? loaded() : loading ()

}
export default SingleBeer