import program from 'commander';
import {check} from './commands/check'

program
    .command('price')
    .description('Check price of coins')
    .option('--coin <type>','add specific coin type in csv format','BTC,ETH,XRP')
    .option('--curr <currency>','change the currency','USD')
    .action((cmd)=> check.price(cmd.coin,cmd.curr));

program.parse(process.argv);