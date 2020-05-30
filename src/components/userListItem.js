import React from "react";
import Image from "react-bootstrap/Image";

//UserListItem represente chaque ligne affichée
//il recoit user comme props et affiche les données

const UserListItem = (props) => {
   const user = props.data
    return (
        <tr key = {user.id}>
            <td><Image src={user.avatar} rounded /></td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
        </tr>
    );
}

export default UserListItem
