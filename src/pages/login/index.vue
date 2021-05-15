<template>
    <img alt="Vue logo" src="@/assets/logo.png" />
</template>

<script setup>
    import { getCurrentInstance } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import { useStore } from 'vuex'

    // const { ctx: { $store: store } } = getCurrentInstance()
    const router = useRouter(), route = useRoute()
    const store = useStore()

    const { redirect } = route.query

    store.dispatch('user/login', { username: 'admin', password: 'admin' }).then(() => {
        router.push({ path: redirect ?? '/' })
    })
</script>

<style>
</style>