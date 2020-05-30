import React, {useEffect, useState} from "react";
import {Button, Container, Form, Modal} from "react-bootstrap";


const UserModal = (props) => {
    //on prepare la recuperation des saisies
    //console.log(props.user)
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: '',
        email: '',
        id: ''
    });
    // a chque saisie on change la valeur de champs
    // l'element changé est envoyé ainsi que la nouvelle valeur
    //la nouvelle valeur remplace alors l'ancienne

    const onPropertyValueChange = (property, value) => {
        setInputs(inputs => ({...inputs, [property]: value}));
    }

    const send = () => {
        if (props.user !== null) {
            inputs.id = props.user.id;
        }
        props.onSend(inputs);
    }
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Ajouter un nouvel utilisateur
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Form>
                        <Form.Group controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name"
                                          defaultValue={props.user !== null ? props.user.first_name : ""}
                                          onChange={(event) => {
                                              onPropertyValueChange("firstName", event.target.value)
                                          }}/>
                        </Form.Group>

                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name"
                                          defaultValue={props.user !== null ? props.user.last_name : ""}
                                          onChange={(event) => {
                                              onPropertyValueChange("lastName", event.target.value)
                                          }}/>
                        </Form.Group>

                        <Form.Group controlId="email" >
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" placeholder="E-Mail"
                                          defaultValue={props.user !== null ? props.user.email : ""}
                                          onChange={(event) => {
                                              onPropertyValueChange("email", event.target.value)
                                          }}
                            />
                        </Form.Group>

                    </Form>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={send}>Enregistrer</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UserModal;
