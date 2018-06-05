
//获取首页数据基础信息

const { mysql } = require('../qcloud')

module.exports = async ctx =>
{
  var tCount = await mysql("keypoint").count()

  ctx.state.data =
  {
      msg: "totalCount",
      count: tCount["0"]["count(*)"]
  }
}