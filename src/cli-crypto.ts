#!/usr/bin/env node

import program from 'commander';

//Not using import beacuse the 
const pkg = require('../package.json')

//set the version and parse the arguments so that it has access to any arguments that we pass in
program
    .version(pkg.version)
    .command('key','Manage API key --https://nomics.com ')
    .command('check','Check coin price info')
    .parse(process.argv);
