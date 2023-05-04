
import React, {FC} from "react";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage"
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

const App = () => {
  
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to="/users">Пользователи</Link>
          <Link to="/todos">Список дел</Link>
        </div>
          <Routes>
            <Route path="/users" element={<UsersPage/>}/>
            <Route path="/todos" element={<TodosPage/>}/>
            <Route path="/user/:id" element={<UserItemPage/>}/>
            <Route path="/todos/:id" element={<TodoItemPage/>}/>
            
          </Routes>
        
      </div>
    </BrowserRouter>
  )
}

export default App;