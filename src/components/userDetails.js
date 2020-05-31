import React from "react";
import {Button, Container, Modal} from "react-bootstrap";
import Table from "react-bootstrap/Table";

import Image from "react-bootstrap/Image";


const UserDetails = (props) => {
    const user = props.user
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Detail
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Table striped bordered hover size="sm">
                        <tbody>
                        <tr><td colSpan={2}  className="justify-content-md-center" align="center"><Image src={user !== null ? user.avatar : ""} rounded/></td></tr>
                        <tr><td>First Name</td><td>{user !== null ? user.first_name : ""}</td></tr>
                        <tr><td>Last Name</td><td>{user !== null ? user.last_name : ""}</td></tr>
                        <tr><td>Email Name</td><td>{user !== null ? user.email : ""}</td></tr>
                        </tbody>
                    </Table>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => {props.onHide()}}>Fermer</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UserDetails;
