
import './App.css'

function App() {
  const person = [
    {
      "name": "Alice",
      "age": 25,
      "hobbies": ["Reading", "Gardening", "Cooking"],
      "bio": "Alice is a passionate learner who enjoys exploring new technologies."
    },
    {
      "name": "Bob",
      "age": 27,
      "hobbies": ["Playing guitar", "Hiking", "Photography"],
      "bio": "Bob is a creative individual who loves expressing himself through music and capturing moments with his camera."
    },
    {
      "name": "Charlie",
      "age": 23,
      "hobbies": ["Painting", "Writing", "Soccer"],
      "bio": "Charlie is an artist at heart, always seeking inspiration from various forms of art."
    },
    {
      "name": "David",
      "age": 29,
      "hobbies": ["Swimming", "Traveling", "Programming"],
      "bio": "David is an adventurer who is passionate about coding and exploring the world at the same time."
    }
  ] 

  const person_array = person.map(function (arr){
    return (<>
    <div className = "person">
    <h1>{arr.name}</h1>
    <h2>{arr.age}</h2>
    {arr.hobbies.map(function(hobby){return (<><li>{hobby}</li> </>)})}
    <p>{arr.bio}</p>
    </div>
    </>)
  })



  return (
    <>
    <div className="main">
      <header>Know Our Experts</header>
      <div className="array">
        {person_array}
      </div>
    </div>
    </>
  )
}

export default App
