
const { mysql } = require('../qcloud')


module.exports = async ctx => 
{
  // 查
  var res = await mysql("block").insert(ctx.request.body);

  ctx.response.type = 'json';

  let postData = ctx.request.body.name;

  var bo = postData;

  //ctx.body = bo.name;

  ctx.state.data =
    {
      msg: "save job status",
      name: bo,
      resp: res
    }
}
