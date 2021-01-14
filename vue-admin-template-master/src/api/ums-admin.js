import request from '@/utils/request'

export function getUmsadminList(params) {
    return request({
        url: '/vue-admin-template/ums-admin/list',
        method: 'get',
        params
    })
}

export function deleteUmsadmin(params) {
    return request({
        url: '/vue-admin-template/ums-admin/delete',
        method: 'get',
        params
    })
}

export function createAdmin(data) {
    return request({
        url: '/vue-admin-template/ums-admin/new',
        method: 'post',
        data: data
    })
}

export function updateAdmin(id, data) {
    return request({
        url: '/vue-admin-template/ums-admin/new' + id,
        method: 'post',
        data: data
    })
}
