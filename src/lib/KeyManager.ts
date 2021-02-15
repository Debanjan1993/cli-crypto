import ConfigStore from 'configstore';
const pkg = require('../../package.json')

export default class KeyManager {
    conf: ConfigStore;
    constructor() {
        this.conf = new ConfigStore(pkg.name);
    }

    async setKey(key: string): Promise<string> {
        this.conf.set('apiKey', key);
        return key;
    }

    async getKey(): Promise<string> {
        const key = this.conf.get('apiKey');
        if (!key) {
            throw new Error('No API key found Get a key at https://nomics.com');
        }
        return key;
    }

    async deleteKey(): Promise<void> {
        const key = this.conf.get('apiKey');
        if (!key) {
            throw new Error('No API key found Get a key at https://nomics.com');
        }
        this.conf.delete('apiKey');
    }

}