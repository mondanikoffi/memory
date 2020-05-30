import React from "react";
//on importe Pagination de react-bootstrap
import {Pagination} from "react-bootstrap"

//ici nous mettons le footer
//il prends deux propriétés(props) à savoir active et totalPages
//active est la page courante et totalPages est le nmbre de page
//on utilise le composant Pagination de bootstrap
const Footer = (props) => {
    let active = props.active;
    let items = [];
    for (let number = 1; number <= props.totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div className="container">
            <Pagination>{items}</Pagination>
        </div>
    )
}
export default Footer
