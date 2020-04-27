const TULING = require('tuling');

const aiTuling =new TULING({
    key: '318394e6f5b148d78270f72d2ccf34b9'
});

// 立即执行函数，加个括号执行  async函数修饰符
(async () => {
    // 机器人
    // console.log('arrow function')  await 等一下
    const result = await aiTuling.send({
        userid: 1,
        info: '今天的天气？',
        loc: '南昌市'
    });
    console.log(result);
})()
//console.log(func);
// func();