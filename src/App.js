import React from 'react';
import './App.css';
import UserListScreen from "./screens/userListScreen";

// la fonction de demarrage
// on lui donne le screen UserListScreen et la musique commence
function App() {
    return (
        <div className="App">
            <UserListScreen/>
        </div>
    );
}

export default App;
