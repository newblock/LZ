
const { mysql } = require('../qcloud')

module.exports = async ctx => {
  //var aid = ctx.query.aid

  var res = await mysql("com").select();

  ctx.state.data =
    {
      msg: "comlist",
      list: res,
    }
}
