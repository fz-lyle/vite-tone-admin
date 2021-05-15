import http from '@utils/request'

export const login = (data) => {
    return http({
        url: '/api/user/login',
        method: 'post',
        data
    })
}

export const getInfo = (token) => {
    return http({
        url: '/api/user/info',
        method: 'get',
        params: { token }
    })
}