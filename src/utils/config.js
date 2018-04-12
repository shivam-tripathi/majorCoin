import {readFileSync} from 'fs';

const env = process.env.NODE_ENV || 'development';
let configFileBaseName = (env === 'test') ? 'test' : 'config';

const configContents =
    readFileSync(`config/${configFileBaseName}.json`);
const config = JSON.parse(configContents);

export default config;



