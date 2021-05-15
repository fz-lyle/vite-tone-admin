import http from '@utils/request'

export const getRouterList = (data) => {
    return http({
        url: '/api/router/getList',
        method: 'get',
        data
    })
}