# Project Overview

## Project Links

- [GitHub](https://github.com/blueLotus3/project-2-react)
- [Deploy](beerbible.netlify.appsites/beerbible/deploys)
- [Mockup](https://www.behance.net/gallery/111068931/Oro-del-sur-UI-UX-Beer-web-app?tracking_source=search_projects_recommended%7Cbeer)

## Project Description

I would like to implement a app that has a library of different beers listed, you can see the description of the beer, You can even see a food pairing suggestion upon clicking on a selected beer.
## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 


```
{data: {http://api.brewerydb.com/v2//beers/?key=APIKEY }

const [beer, setBeer] = React.useState(null)
const apiKey = "API KEY"
const url = `http://api.brewerydb.com/v2//beer/?key=APIKEY`
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

- [Desktop](https://res.cloudinary.com/ds7w3ysag/image/upload/v1610741838/IMG_2546_w8db6z.jpg)
- [Tablet](https://res.cloudinary.com/ds7w3ysag/image/upload/v1610735180/IMG_2544_kbnm5h.jpg)
- [Mobile](https://res.cloudinary.com/ds7w3ysag/image/upload/v1610735185/IMG_2545_plsezl.jpg)
-[React Arch](https://res.cloudinary.com/ds7w3ysag/image/upload/v1610741843/IMG_2547_ytt0i4.jpg) 


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Render Beers
- Render FoodPairings 
- Render Description

#### PostMVP EXAMPLE

- Filtering Beers by Types

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| Render Beers |This will render on the page the list of beers.| 
| Render Images | This will render on the page images/icons of the beer | 
| Render Types | This will render the different types of beer | 
|     Nav      |This will be where you can click on the components to switch to|
|    Buttons   | These will be important for clicking on the components |
|    Filter    | This will render a type of beer when the filter is chosen |
                                                     


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Render Beers | H | 4hrs|     |     |
| Render Images | H | 4hrs|     |     |
| Render Types | H | 4hrs |     |    |
|  Buttons | H |  6hrs  |     |    |
| Nav | M | 4 hrs |     |      |      |
|CSS Styling | M | 8hrs |    |     |      |
| Filter Beers by Type | M |  8hrs |    |     |      |
| Finishing Touches | M | 2hrs  |       |     |      |
| Total | H | 40hrs|  |     |

## Additional Libraries
-Sass
-Router
-Hamburger

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 


...
...