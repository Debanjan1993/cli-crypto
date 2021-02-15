import axios from 'axios';
import colors from 'colors';

export default class CryptoAPI {
    apiKey: string;
    baseURL: string;
    constructor(apiKey: string) {
        this.apiKey = apiKey
        this.baseURL = 'https://api.nomics.com/v1/currencies/ticker'
    }

    async getPrice(coinOption: string, currencyOption: string) {

        const response = await axios.get(this.baseURL, {
            params: {
                'key': 'faeef28099697f1b2c58cc56f94669a3',
                'ids': coinOption,
                'convert': currencyOption
            }
        });

        return response;

    }
}

