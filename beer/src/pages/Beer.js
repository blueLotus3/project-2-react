import React from 'react'

// description
// icon
//name
// type? by id?
     const Beer = (props) => {
     const {REACT_APP_APIKEY}= process.env
    const id = props.match.params.id
    const url = `http://api.brewerydb.com/v2//beers/:${id}/?key=${REACT_APP_APIKEY}`  
    const [setBeer] = React.useState(null)
    const getBeer = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setBeer(data)
    console.log('this is data', data)    
}

    React.useEffect(() => {
        getBeer()
    },  [])
    
    const loaded = () => {
        return (
         <div>
             <h2>{id}</h2>
       
         </div>
         
    )
}
const loading = () => {
    return <h1>Loading...</h1>
}
return Beer ? loaded() : loading()

}
export default Beer