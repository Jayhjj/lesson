const nodemailer = require ('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'qq',//腾讯
    port: 465,//端口
    secureConnection: true,
    auth: {
        user:'2762319789@qq.com',
        pass:'xolnownxacvhdghb'
    }
})

let mainOPtions = {
    from: "光棍节前的呐喊<2762319789@qq.com>",
    to: "2412152726@qq.com",
    subject: "双十一买什么",
    html: '<b>淘宝京东拼多多</b>'
}

transporter.sendMail(mainOPtions,(error,info)=>{
    if(error){
        return console.log(error);
    }
    console.log('Message send:%s',info.messageId);
}
)