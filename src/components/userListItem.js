import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

//UserListItem represente chaque ligne affichée
//il recoit user comme props et affiche les données

const UserListItem = (props) => {
   const user = props.data
    return (
        <tr key = {user.id}>
            <td><Image src={user.avatar} rounded /></td>
            <td className="align-middle">{user.first_name}</td>
            <td className="align-middle">{user.last_name}</td>
            <td className="align-middle"><Button variant="secondary">Detail</Button></td>
            <td className="align-middle"><Button variant="warning">Modifier</Button></td>
            <td className="align-middle"><Button variant="danger">Supprimer</Button></td>
        </tr>
    );
}

export default UserListItem
