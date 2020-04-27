var cloud = require('wx-server-sdk'); //云服务器

var rp = require('request-promise');  // npm 向API发出请求

cloud.init();

exports.main = async(event,context) => {
  console.log(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=0b537feb7595eb9fda7f74f9782d7f46`);
  var res = rp(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=0b537feb7595eb9fda7f74f9782d7f46`).then(html =>{
    return html;
  })
  return res;
}
