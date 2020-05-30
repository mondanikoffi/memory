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
            <Pagination.Item key={number} active={number === active} onClick={()=>{props.changeHandler(number);}}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div style={pStyle}>
            <Pagination style={pStyle} >{items}</Pagination>
        </div>
    )
}

const pStyle = {
    fontSize: '15px',
    textAlign: 'center'
};
export default Footer
