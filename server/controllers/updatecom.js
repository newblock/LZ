
const { mysql } = require('../qcloud')


module.exports = async ctx => {

  var res = await mysql("com").where('address', '=', ctx.request.body.address)
    .update({
      name: ctx.request.body.name,
      pos: ctx.request.body.pos,
      skill: ctx.request.body.skill,
      wx: ctx.request.body.wx,
      mail: ctx.request.body.mail
    })

  ctx.response.type = 'json';

  let postData = ctx.request.body;

  var bo = postData;
  //ctx.body = bo.name;

  ctx.state.data =
    {
      msg: "update com status",
      resp: res
    }
}
