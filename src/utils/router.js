const modules = import.meta.glob('../pages/**/**.vue')
const components = {}
Object.keys(modules).forEach(key => {
    const nameMatch = key.match(/^\.\.\/(.+)\.vue/)
    if (!nameMatch) return
    // 如果页面以Index命名，则使用父文件夹作为name
    // const indexMatch = nameMatch[1].match(/(.*)\/Index$/i)

    let name = nameMatch[1]
    components[name] = modules[key]
})

const assemblyRouter = (asyncRouters) => {
    return asyncRouters.map(route => {
        if (route.component === 'Layout') {
            route.component = () => import('@/layout/index.vue')
        } else {
            route.component = components[route.component]
        }

        if (route.children && route.children.length) route.children = assemblyRouter(route.children)

        if (route.children && route.children.length === 0) delete route.children

        return route
    })
}

export { assemblyRouter }