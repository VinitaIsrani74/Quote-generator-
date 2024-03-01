import React , {useState} from "react";
import "./App.css";


function App() {

let [quote , setQuote] = useState("You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.");
let [author , setAuthor] = useState("George Lorimer");
  const generateQuote = async () =>{
const res = await fetch("http://api.quotable.io/random");
const data = await res.json();
setQuote(data.content);
setAuthor(data.author);
console.log(data);
  }

  return (
    <div className="App">
      <>
        <div className="overlay">
          <div className="box">
            <h2 className="heading">{quote}</h2>
            <small className="author">-{author}-</small>
          </div>
          <button className="btn" onClick={generateQuote}>Generate New Quote</button>
        </div>  
      </>
    </div>
  );
}

export default App;
