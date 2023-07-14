import "./App.css";
import Header from "./components/Header";
import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";
import { AddTodo } from "./components/AddTodo";
import { About } from "./components/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    // console.log("deleted", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    // console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    // console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

/*
  Documentation 
  This is main app/file which is used to develop our react application.
  App.js is the main component, i.e. it is the main component of our react application

  Q. Why is Todos and Footer import using the curly brackets?
  import {Todos} from "./components/Todos";
  import {Footer} from "./components/Footer";
  Ans: This is because Todos and Footer components are created using React functional arrow components (rafc) and 
  they (components) are exported using export const 
  When we use react functional components (rfc) to create our functional component then these components are exported using 
  export default 
  If components are exported using export default we don't need to import them using {}
  But if components are exported using export const and default is missing then we need to import them using {}
  To summarize, 
  rafc -> no deafult keyword present -> import component in App.js using {}
  rfc -> default keyword present -> import conponent in App.js without using {}

  UseState Hook explained
  UseState hook takes two functions as the arguments-> todos and setTodos
  What is setTodos?
  Ans. setTodos is a function which will update the todos
*/
