import { useState } from 'react'


function App() {

const [name, setName] = useState("");
const [list, setList] = useState([]);

const handleSubmit = (e) => {
  e.preventDefault()
  const newItem = {id: new Date().getTime().toString(),
title: name
  };
  setList([...list, newItem]);
  setName("");
}




return (
  <section className="section-center">
    <form className="grocery-form" onSubmit={handleSubmit}>
      <h3>Grocery Bud</h3>
      <div className="form-control">
        <input type="text" className="grocery" placeholder="e.g., eggs"
        value={name}
        onChange={(e) => setName(e.target.value)}

        />
        <button type="submit" className="btn">submit</button>
        </div>
    </form>
      
  </section>
  )




}

export default App
