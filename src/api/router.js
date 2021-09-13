import http from '@utils/request'

export const getRouterList = (data) => {
    return http({
        url: '/api/menu',
        method: 'get',
        data
    })
}