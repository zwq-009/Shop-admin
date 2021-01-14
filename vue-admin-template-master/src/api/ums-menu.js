import request from '@/utils/request'

export function getUmsmenuList(params) {
    return request({
        url: '/vue-admin-template/ums-menu/list',
        method: 'get',
        params
    })
}

export function deleteMenu(params) {
    return request({
        url: '/vue-admin-template/ums-menu/delete',
        method: 'get',
        params
    })
}

export function createMenu(data) {
    return request({
        url: '/vue-admin-template/ums-menu/new',
        method: 'post',
        data: data
    })
}

export function fetchTreeList() {
    return request({
        url: '/vue-admin-template/ums-menu/list',
        method: 'get'
    })
}