import { constantRouterMap, asyncRouterMap } from '@router'
import { getRouterList } from '@api/router'
import { assemblyRouter } from '@utils/router'

const state = () => ({
    menu: {},
    routes: [],
    cachedRoutes: []
})

const getters = {
    menu: (state) => state.menu,
    routes: (state) => state.routes,
    cachedRoutes: (state) => state.cachedRoutes
}

const mutations = {
    setRoutes: (state, routes) => {
        state.routes = routes
    }
}

const actions = {
    setRoutes: async ({ commit }) => {
        const { data } = await getRouterList()
        const menu = assemblyRouter(data)
        commit('setRoutes', menu)
        return [...menu]
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}