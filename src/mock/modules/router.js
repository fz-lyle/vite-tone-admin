const data = [
    {
        path: '/',
        component: 'Layout',
        redirect: '/dashboard',
        name: 'layout',
        meta: {
            title: '控制台'
        },
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: 'pages/dashboard/index',
                meta: {
                    title: '仪表盘'
                }
            },
            {
                path: 'manager',
                name: 'manager',
                component: 'pages/manager/index',
                meta: {
                    title: '管理'
                }
            }
        ]
    }
]

const getMenuList = [
    {
        url: '/api/router/getList',
        type: 'get',
        response() {
            return {
                code: 200,
                msg: 'success',
                data,
            }
        },
    }
]

export default getMenuList