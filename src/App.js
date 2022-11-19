import React from 'react'
import Header from './compnent/header/Header';
import Nav from './compnent/Nav/Nav';
import Post from './compnent/Post/Post';
import AddPost from './compnent/Post/AddPost';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const App = () => {
  return (
    <div>

      <Router>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Post/>} exact />
          <Route path="/add" element={<AddPost />} exact />
        </Routes>

    
      </Router>

    </div>

  )
}

export default App;