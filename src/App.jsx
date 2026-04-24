import { useState } from "react"
import List from "./components/List"
import Alert from "./components/Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState ([]);
  const [alert, setAlert] = useState({
    show: false,
    msg:"",
    type:"",
  });
  const handleSubmit = (e) => {
    e.preventDefault()
if(!name){
  showAlert(true,"danger", "please enter value");
  return;
}
else {






    const newItem = {id:new Date().getTime().toString(), title: name};
    setList([...list, newItem]);
    setName("");
    showAlert(true,"success", "New  Item Added");
  }}
  
  const showAlert = (show = false,type = '', msg = '') => {
    setAlert({show,type,msg})
  };

function clearItems() {
  setList([]);
  showAlert(true,"danger", "all items cleared");


  }

  function removeItem(id) {
    setList(list.filter((item) => item.id !== id));
    showAlert(true,"danger", "item removed");


  }
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g.eggs"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn" type="submit">submit</button>
        </div>
      </form>
      {
        list.length > 0 && (
          <div className="grocery-container">
           {}
            <List items={list} removeItem={removeItem}/>
            <button onClick={clearItems} className="clear-btn">clear list</button>
          </div>
        )
      }
    </section>
  )
}

export default App