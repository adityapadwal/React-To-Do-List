import "./App.css";
import Header from "./components/Header";
import {Todos} from "./components/Todos";
import {Footer} from "./components/Footer";

function App() {
  const onDelete = (todo) => {
    console.log("Delete button was clicked for the todo, ", todo);
  }

  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "Go to the market and get some fruits"
    },
    {
      sno: 2,
      title: "Go to the gym",
      desc: "Go to the gym for a Legs workout"
    },
    {
      sno: 3,
      title: "Go to the College",
      desc: "Please go to college and study!"
    },
    {
      sno: 4,
      title: "Go to the Office",
      desc: "Please go to the office and work!"
    }
  ]

  return (
    <>
      <div className="App">
        <Header title="My Todos List" searchBar={false}/>
        <Todos todos={todos} onDelete={onDelete}/>
        <Footer />
      </div>
    </>
  );
}

export default App;

/*
  Documentation 
  This is main app/file which is used to develop our react application.
  App.js is the main component, i.e. it is the main component of our react application
*/
