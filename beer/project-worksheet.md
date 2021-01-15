# Project Overview

## Project Links

- [https://github.com/blueLotus3/project-2-react]()
- [https://cra.link/deployment]()

## Project Description

I would like to implement a app that has a library of different beers listed, you can search it by type, or name or even randomize to see what beer comes up. I would like to also have a nice effect to a beer when it comes up as it is presented.

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 


```
{data: {http://api.brewerydb.com/v2//beers/?key=782b02763a57e7621f3a90353ed1e84b} }

const [beer, setBeer] = React.useState(null)
const apiKey = "782b02763a57e7621f3a90353ed1e84b"
const url = `http://api.brewerydb.com/v2//beers/?key=782b02763a57e7621f3a90353ed1e84b`
const getBeer = async () => {
  const response = await fetch(url)
  const data = await response.json()
  setBeer(data)
}
console.log('this is data', data)
```
This API has a library of various beers that will be implemented into my APP they have their type included as well thats associated with their id and has a picture thats also within the data.


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [https://res.cloudinary.com/ds7w3ysag/image/upload/v1610672706/IMG_2537_o2xhui.jpg]
- [https://res.cloudinary.com/ds7w3ysag/image/upload/v1610672700/IMG_2536_hmi0zi.jpg]
- [https://res.cloudinary.com/ds7w3ysag/image/upload/v1610672712/IMG_2538_bwqrsi.jpg]


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 
                                                     


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| API | H | 6hrs|     |     |
| Render Data | H | 7hrs|     |     |
| Allow Interaction | H | 6hrs |     |    |
| Flexbox | M | 4 hrs |     |      |      |
|CSS Styling | M | 6hrs |    |     |      |
| Book Page | M |  8hrs |    |     |      |
| Total | H | 37hrs|  |     |

## Additional Libraries
I'll be using Routes and switches on this App because in order for me to move to each section smoothly and for my data to render properly.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 


...

const WeatherZip = ({weather}) => {
    const loaded = () => {
    return( 
      
           <h1>{weather.name}</h1>
          <h2>{weather.main.temp}&deg;F</h2> <br></br>
    <h2>"{weather.weather[0].description}"</h2>
          <h2>{weather.main.temp_min}&deg;F</h2> - <h2>{weather.main.temp_max}&deg;F</h2> <br></br>
                    
    )    
    }
    ...
// I was proud of this code because this was when I got really comfortable with doing react and It was nice to figure this out and finish my homework early that night cause of this. I used this to find specific data to pull when a zip code was called in the search bar, these props were called inside their object..