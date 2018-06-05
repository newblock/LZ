
const { mysql } = require('../qcloud')
//const uuid = require('node-uuid')

module.exports = async ctx => 
{
  var id = 2
  // 增
  var book = 
  {
    id: id,
    name: "冰与火之歌",
    price: 88
  }
  //await mysql("Book").insert(book)
  // 查
  var res = await mysql("keypoint").select('text', 'title', 'imgurl').orderBy('id', 'desc')
  // 改
  //await mysql("Book").update({ price: 66 }).where({ id })
  // 删
 // await mysql("Book").del().where({ id })

  console.log("ctx",ctx);
  ctx.state.data = 
  {
    msg:"mySQL",
    list:res,
    id: ctx.query
  }
}


/*
module.exports = ctx =>{

  ctx.state.data = {
    msg: '我的Deme, haha!'
  }

}
*/