
const { mysql } = require('../qcloud')
//const uuid = require('node-uuid')

module.exports = async ctx => 
{
  var aid = ctx.query.aid

  // 查
  var res = await mysql("keypoint").select('text', 'title', 'imgurl').where({ id: aid})

  ctx.state.data =
    {
      msg: "artText",
      list: res,
      aid: ctx.query.aid
    }
}

