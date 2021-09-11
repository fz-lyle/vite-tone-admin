<template>
    <el-card>
        <el-table :data="state.routes" style="width: 100%" row-key="id" border :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column prop="meta.title" label="标题" width="250"></el-table-column>
            <el-table-column prop="type" label="类型"></el-table-column>
            <el-table-column prop="name" label="页面编码" width="250"> </el-table-column>
            <el-table-column prop="path" label="路由地址" width="300"> </el-table-column>
            <el-table-column prop="component" label="文件路径" width="300"> </el-table-column>
            <el-table-column prop="meta.tabHidden" label="是否隐藏"> </el-table-column>
            <el-table-column prop="meta.affix" label="是否常驻"> </el-table-column>
            <el-table-column prop="redict" label="重定向" width="300"> </el-table-column>
            <el-table-column prop="meta.icon" label="图标" width="180"> </el-table-column>
            <el-table-column prop="meta.affix" label="是否固定"> </el-table-column>
            <el-table-column prop="meta.noKeepAlive" label="是否不缓存" width="180"> </el-table-column>
            <el-table-column prop="meta.badge" label="徽章"> </el-table-column>
        </el-table>
    </el-card>
</template>

<script setup>
    import { computed, reactive } from 'vue'
    import { getRouterList } from '@api/router'

    const state = reactive({})
    const getRoutes = async () => {
      const res = await getRouterList()
      state.routes = res.data
    }
    getRoutes()
</script>

<style>
</style>