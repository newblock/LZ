
const { mysql } = require('../qcloud')

module.exports = async ctx => 
{

  // 查
  var res = await mysql("com").insert(ctx.request.body);

  ctx.response.type = 'json';

  let postData = ctx.request.body.name;

  var bo = postData;

  //ctx.body = bo.name;

  ctx.state.data =
    {
      msg: "save com status",
      name: bo,
      resp: res
    }
}
