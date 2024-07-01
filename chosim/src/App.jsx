// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';
import SignIn from './components/Login';
import Community from './components/Community';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/Community" element={<Community />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
