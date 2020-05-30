import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {getUserList} from "../queries/queries";
import Table from "react-bootstrap/Table";
import AppHeader from "../components/appHeader";
import UserListItem from "../components/userListItem";
import Footer from "../components/footer";
import {Button} from "react-bootstrap";
import UserModal from "../components/userModal";

//UserListScreen est le screen d'affichage de la liste
// au debut il va chercher les info au niveau de l'API
//quand l'API fait le retour il met à jour les informations du state

//ce style de declaration de classe React est le style fonction
//dans ce style on a pas de fonction render. on fait just return
const UserListScreen = () => {
    //ces notations sont des hooks pour la gestion du state
    // en react le state permet d'avoir des parametres globaux
    // a chaque fois qu'un element du state change react reaffiche la page
    // c'est pour ca qu'on ne met que les informations qui ne changent pas souvent mais dont l'impact est grand sur la page
    const [users, setUsers] = useState([]);
    const [companyName, setCompanyName] = useState("");
    const [totalPages, setTotalPages] = useState(1);
    const [active, setActive] = useState(1);
    const [modalShow, setModalShow] = useState(false);

    //cette hook est appelé à chaque fois que le numéro courant (activePage) est changé
    // activePage est changé quand on clique sur la pagination (voir le composant Footer)
    useEffect(() => {
        //appel de la fonction qui fait la demandeà l'API
        getUserList(active).then(result => {
            //met à jour la liste des users
            setUsers(result.data)
            //met à jour le nom de la compagnie
            setCompanyName(result.ad.company)
            //met à jour le nombre de page
            setTotalPages(result.total_pages)
        })
    }, [active]);

    const handlePageChange = (index) => {
        setActive(index);
    }

    const handleUserChange = (inputs) => {
    }

    const deleteUser = () => {

    }
//ici on fait l'affichage
    //on donne le nom de la compagnie au composant AppHeader
    //on affiche la liste dans un tableau
    // les classes utilisées sont dans bootstrap
    //users.map est la fonction d'iteration sur le tableau des users
    //a chaque iteration on donne l'item au composant UserListItem qui s'occupe de l'affichage
    //a la fin on appelle le Footer et on lui donne la page actuelle et le nombre de pages

    return (
        <div>
            <AppHeader company={companyName}/>
            <div className="container">
                <br/>
                <div className="float-right"><Button variant ="success" onClick={() => setModalShow(true)}>Ajouter un utilisateur</Button></div>
                <br/><br/>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th colSpan={3}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>{users.map((user) =>
                        <UserListItem data={user}/>
                    )}</tbody>
                </Table>
                <Footer active={active} totalPages={totalPages} changeHandler = {handlePageChange}/>
            </div>
            <UserModal show={modalShow} onHide={() => setModalShow(false)} onSend={handleUserChange}/>
        </div>
    );
}

export default UserListScreen
