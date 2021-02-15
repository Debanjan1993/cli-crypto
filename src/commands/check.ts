import CryptoAPI from '../lib/CryptoAPI';
import KeyManager from '../lib/KeyManager';
import colors from 'colors';
import { CurrencyResponse } from '../utils/AllInterfaces'

export const check = {
    async price(coinOption: string, currencyOption: string) {
        try {
            const keyManager = new KeyManager();
            const key = await keyManager.getKey();
            const crypto = new CryptoAPI(key);
            const response = await crypto.getPrice(coinOption, currencyOption);
            if (response.status !== 200) {
                console.log(`Unable to fetch prices response : ${response.status}`)
                return;
            }

            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: currencyOption
            })

            let currRes: CurrencyResponse[] = response.data;
            const res: string[] = [];
            currRes.map(item => {
                res.push(`Coin : ${colors.yellow(item.symbol)} | Coin Name : ${item.name} | Price : ${colors.green(formatter.format((item.price as any) as number))} | Rank : ${item.rank}`)
            })

            console.log(res.join('\n'));
        } catch (e) {
            console.log(e.message);
        }

    }
}





