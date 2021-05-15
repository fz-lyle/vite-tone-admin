const tokens = {
    admin: {
        token: 'admin-token'
    }
}

const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    }
}

const apiList = [
    {
        url: '/api/user/login',
        method: 'post',
        response: config => {
            const { username } = config.body
            const token = tokens[username]

            if (!token) {
                return {
                    code: 204,
                    message: '账号或密码不正确'
                }
            }

            return {
                code: 200,
                data: token,
                message: '请求成功'
            }
        }
    },
    {
        url: '/api/user/info\.*',
        method: 'get',
        response: config => {
            const { token } = config.query
            const info = users[token]

            if (!info) {
                return {
                    code: 508,
                    message: 'token过期或用户不存在'
                }
            }

            return {
                code: 200,
                data: info
            }
        }
    },
    {
        url: '/api/user/logout',
        method: 'post',
        response: () => {
            return {
                code: 20000,
                data: 'success'
            }
        }
    }
]

export default apiList