
const { mysql } = require('../qcloud')


module.exports = async ctx => 
{
  //var name = ctx.query.name

  var res = await mysql("block").where('address', '=', ctx.request.body.address)
    .update({
      name: ctx.request.body.name,
      job: ctx.request.body.job,
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
      msg: "upjob status",
      resp: res
    }
}
