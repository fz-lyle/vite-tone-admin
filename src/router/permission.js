import router from '@router'
import store from '@store'
import { ElMessage } from 'element-plus'
import { getToken } from '@utils/token.js'
import getPageTitle from '@utils/get-page-title.js'

const whiteList = ['/login'] // 鉴权白名单

router.beforeEach(async (to, from, next) => {

    // 设置页面标题
    document.title = getPageTitle(to.meta.title)

    // 判断用户是否已登录
    const hasToken = getToken()

    if (hasToken) {

        if (to.path === '/login') {

            next({ path: '/' })

        } else {

            const hasGetUserInfo = store.getters['user/name']
            if (hasGetUserInfo) {

                next()

            } else {

                try {

                    // 获取用户信息
                    await store.dispatch('user/getInfo')
                    // 获取路由列表
                    const accessRoutes = await store.dispatch('router/setRoutes')
                    accessRoutes.forEach(item => {
                        router.addRoute(item)
                    })
                    next({ ...to, replace: true })
                } catch (error) {
                    await store.dispatch('user/resetToken')
                    ElMessage.error(error || 'Has Error')
                    next(`/login?redirect=${to.path}`)

                }

            }
        }

    } else {

        if (whiteList.includes(to.path)) {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
        }

    }
})

router.afterEach(() => {

})
