import request from '@/utils/request'

export function getUmsroleList(params) {
    return request({
        url: '/vue-admin-template/ums-role/list',
        method: 'get',
        params
    })
}

export function createRole(data) {
    return request({
        url: '/vue-admin-template/ums-role/new',
        method: 'post',
        data: data
    })
}

export function deleteRole(params) {
    return request({
        url: '/vue-admin-template/ums-role/delete/',
        method: 'get',
        params
    })
}