import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Landing from './pages/landing/Landing';
import Artists from './pages/artists/Artists';
import FemaleArtists from './pages/femaleArtists/FemaleArtists';
import MaleArtists from './pages/maleArtists/MaleArtists';
import Groups from './pages/groups/Groups';
import Albums from './pages/albums/Albums';
import Songs from './pages/songs/Songs';
import Navbar from './components/navbar/Navbar';
import { useStyles } from './Style';
import './style.css';

function App() {
    const classes = useStyles();
    
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route exact path="/artists">
                    <Navbar />
                    <Artists />
                </Route>
                <Route exact path="/female-artists">
                    <Navbar />
                    <FemaleArtists />
                </Route>
                <Route exact path="/male-artists">
                    <Navbar />
                    <MaleArtists />
                </Route>
                <Route exact path="/groups">
                    <Navbar />
                    <Groups />
                </Route>
                <Route exact path="/albums">
                    <Navbar />
                    <Albums />
                </Route>
                <Route exact path="/songs">
                    <Navbar />
                    <Songs />
                </Route>
            </Switch>
        </Router>
    )
}

export default App