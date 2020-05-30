import React from "react";
import {Navbar} from "react-bootstrap";
//ici nous affichons l'entete
// on lui donne le nom de la compagnie comme propriété company
//le composant utilisé est NavBar
const AppHeader = (props) => {
    return (
            <Navbar bg="dark">
                <Navbar.Brand href="props.url">{props.company}
                </Navbar.Brand>
            </Navbar>
    )
}
export default AppHeader;
