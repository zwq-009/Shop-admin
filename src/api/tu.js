import request from '@/utils/request'

export function getTuList(params) {
    return request({
        url: '/vue-admin-template/tu/mainwatch',
        method: 'get',
        params
    })
}