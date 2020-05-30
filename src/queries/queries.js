//appel au variable d'environnement REACT_APP_API_HOST
//ceci n'est pas important dans notre cas mais c'est important de le mettre car peut faire la difference
import {default as axios} from 'axios';

const host = process.env.REACT_APP_API_HOST;

//fonction qui communique avec l'API
export function getUserList(page) {
    //une concatenation pour fitter avec l'url de l'api
    return fetch(host + "users?page" + page)
        .then(function (response) {
            //on retourne juste la reponse de l'API en le parsant en json
            return response.json();
        })
        .catch(function (error) {
            //s'il y a erreur on l'affiche
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
        });
}

export function addUser(data) {
    return axios.post(host + "users", data)
        .then(response => {
            return response
        })
        .catch(error => {
            console.log(error);
        })
}

export function updateUser(id, data) {
    console.log(id, data);
    return axios.put(host + "users/" + id, data)
        .then(response => {
            return response
        })
        .catch(error => {
            console.log(error);
        })
}

