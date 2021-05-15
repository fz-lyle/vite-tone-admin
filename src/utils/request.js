import axios from 'axios'
import store from '@store'
import { getToken } from '@utils/token.js'
import { ElMessage, ElMessageBox } from 'element-plus'

const http = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000 // 请求超时时间
})

http.interceptors.request.use(config => {
    if (store.getters.token) {
        config.headers['x-token'] = getToken()
    }

    return config
}, error => {
    return Promise.reject(error)
})

http.interceptors.response.use(response => {
    const { code, message } = response.data

    if (code !== 200) {
        ElMessage({
            message: message || 'Error',
            type: 'error',
            duration: 5 * 1000
        })

        if (code === 508 || code === 512 || code === 514) {
            ElMessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
                confirmButtonText: '重新登录',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                store.dispatch('user/resetToken').then(() => {
                    location.reload()
                })
            })
        }

        return Promise.reject(new Error(message || 'Error'))
    } else {
        return response.data
    }

}, error => {
    ElMessage({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error)
})

export default http