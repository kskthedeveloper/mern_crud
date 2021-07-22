import './App.css';
import React, { useState, useEffect } from 'react';
import Post from "./components/Post";
import {connect} from "react-redux";
import {loadAllPost} from "./action/backend/PostAPI";

function mapDispatchToProps(dispatch) {
    return {
        loadPosts: () => dispatch(loadAllPost())
    }
}

function App({loadPosts}) {
  useEffect(() => {
      console.log("load posts");
      loadPosts();
  }, []);

  return (
      <div className="App">
        <Post/>
      </div>
  );
}

export default connect(null,mapDispatchToProps)(App)
