import request from '@/utils/request'

export function getGoodsList(params) {
    return request({
        url: '/vue-admin-template/goods/list',
        method: 'get',
        params
    })
}