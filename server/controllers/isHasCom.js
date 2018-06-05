
const { mysql } = require('../qcloud')


module.exports = async ctx => {
  var aid = ctx.query.aid

  // 查
  var res = await mysql("com").select('id').where({ address: aid });

  ctx.body = res;

  ctx.state.data =
    {
      msg: "check com address",
      list: res
    }
}

