import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.homologation.cliqdrive.com.br',
    headers: {
        'Accept': 'application/json;version=v1_web',
        'Content-Type': 'application/json'
    },
});


