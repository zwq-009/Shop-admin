import request from '@/utils/request'

export function getGoodsList(params) {
    return request({
        url: '/vue-admin-template/product/category',
        method: 'get',
        params
    })
}

export function getDelete(params) {
    return request({
        url: '/vue-admin-template/product/delete',
        method: 'get',
        params
    })
}

// export function createProductCate(data) {
//     return request({
//       url:'/vue-admin-template/product/productCategory/create',
//       method:'post',
//       data:data
//     })
//   }
  
//   export function updateProductCate(id,data) {
//     return request({
//       url:'/vue-admin-template/product/productCategory/update/'+id,
//       method:'post',
//       data:data
//     })
//   }
  
//   export function getProductCate(id) {
//     return request({
//       url:'/vue-admin-template/product/productCategory/'+id,
//       method:'get',
//     })
//   }
  
//   export function updateShowStatus(data) {
//     return request({
//       url:'/vue-admin-template/product/productCategory/update/showStatus',
//       method:'post',
//       data:data
//     })
//   }
  
//   export function updateNavStatus(data) {
//     return request({
//       url:'/vue-admin-template/product/productCategory/update/navStatus',
//       method:'post',
//       data:data
//     })
//   }
  
//   export function fetchListWithChildren() {
//     return request({
//       url:'/vue-admin-template/product/productCategory/list/withChildren',
//       method:'get'
//     })
//   }