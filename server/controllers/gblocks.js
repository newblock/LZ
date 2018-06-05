
const { mysql } = require('../qcloud')

module.exports = async ctx => 
{
  //var aid = ctx.query.aid

  var res = await mysql("block").select();

  ctx.state.data =
    {
      msg: "blocklist",
      list: res,
    }
}
