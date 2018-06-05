
const { mysql } = require('../qcloud')
//const uuid = require('node-uuid')

module.exports = async ctx => 
{

  var start = ctx.query.start
  var end = ctx.query.end

  var res = 
    await mysql("keypoint").select('id', 'text', 'title', 'imgurl').where('id', '>', start).andWhere('id', '<=', end).orderBy('id', 'desc')

  // 改
  //await mysql("Book").update({ price: 66 }).where({ id })
  // 删
  // await mysql("Book").del().where({ id })

  ctx.state.data =
    {
      msg: "mySQL",
      list: res,
      id: ctx.query
    }
}
