const axios = require('axios');
const { RAUTHKEY } = require('../config/raughtkey_config')

class RauthKey {
    constructor(key, secret) {

        this.api = axios.create({
            baseURL: RAUTHKEY.URL
        });
    }
}