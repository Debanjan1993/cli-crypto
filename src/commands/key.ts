import KeyManager from '../lib/KeyManager';
import inquirer from 'inquirer';
import colors from 'colors';
import { isRequired } from '../utils/validation'

const key = {

    /**
     * Set a API Key
     */
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: `${colors.green('Enter API key ')}https://nomics.com`,
                validate: isRequired
            }
        ]);

        const key = await keyManager.setKey(input.key);
        if (key) {
            console.log(`API Key Set`.blue);
        }
    },

    /**
     * Get a API key
     */
    async show() {
        try {
            const keyManager = new KeyManager();
            const key = await keyManager.getKey();
            console.log(`Current API key is ${colors.yellow(key)}`);
        } catch (e) {
            console.error(`${e.message}`.red);
        }
    },

    async remove() {
        try {
            const keyManager = new KeyManager();
            await keyManager.deleteKey();
            console.log(`Key Removed`.blue);
        } catch (e) {
            console.error(`${e.message}`.red);
        }
    }
}

export default key;