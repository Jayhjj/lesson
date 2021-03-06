const { findSync } = require('../lib');
const Config = require('webpack-chain'); //配置
const config = new Config(); //配置实例 
const path = require('path');
const resolve = src => {
    return path.join(process.cwd(), src)
}
const files = findSync('config')
module.exports = () => {
    // console.log('在这里做基本配置吧');
    // config
    //     .entry('app')
    //     .add(resolve('src/main.js'))
    //     .end()
    //     .set('mode', process.env.NODE_ENV)
    //     .output.path(path.join(process.cwd(), 'dist'))
    //     .filename('[name].bundle.js');
    const map = new Map();
    files.map(file =>{
        const name = file.split('/').pop().replace('.js','');
        return map.set(name,require(file)(config,resolve))
        // console.log(name,'----------');
    })
    map.forEach(v =>v())
    return config;
}