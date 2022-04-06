import request from '@/utils/request'

// 获取品牌列表
export const reqTradeMark = (page, limit) => request({
  url: `/admin/product/baseTrademark/${page}/${limit}`,
  method: 'get'
})

// 添加品牌
// export const reqAddTradeMark = () => request({
//   url: '/admin/product/baseTrademark/save',
//   method: 'post'
// })
// 修改品牌
// export const reqUpdateTradeMark = () => request({
//   url: '/admin/product/baseTrademark/update',
//   method: 'put'
// })

// 添加或修改品牌
export const reqAddOrUpdateTradeMark = (tradeMark) => {
  if(tradeMark.id){
    return request({
      url: '/admin/product/baseTrademark/update',
      method: 'put',
      data: tradeMark
    })
  }else{
    return request({
      url: '/admin/product/baseTrademark/save',
      method: 'post',
      data: tradeMark
    })
  }
}

// 删除品牌
export const reqDeleteTradeMark = (id) => request({
  url: `/admin/product/baseTrademark/remove/${id}`,
  method: 'delete'
})
