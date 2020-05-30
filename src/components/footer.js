import React from "react";
import {Pagination} from "react-bootstrap"


const AppFooter = (props) => {
    let active = props.active;
    let items = [];
    for (let number = 1; number <= props.pageNumber; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    )
}

export default AppFooter
