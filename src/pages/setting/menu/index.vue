<template>
    <el-card>
        <el-table :data="state.routes" style="width: 100%" row-key="id" border :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column prop="meta.title" label="标题" width="250"></el-table-column>
            <el-table-column label="类型">
                <template #default="scope">
                    {{ useRouteType(scope.row) }}
                </template>
            </el-table-column>
            <el-table-column prop="name" label="页面编码" width="250"></el-table-column>
            <el-table-column prop="path" label="路由地址" width="300"></el-table-column>
            <el-table-column prop="component" label="文件路径" width="300"></el-table-column>
            <el-table-column label="是否隐藏">
                <template #default="scope">
                    {{ useBoolenText(scope.row.hidden) }}
                </template>
            </el-table-column>
            <el-table-column label="是否常驻">
                <template #default="scope">
                    {{ useBoolenText(scope.row.meta.affix) }}
                </template>
            </el-table-column>
            <el-table-column prop="redict" label="重定向" width="300"></el-table-column>
            <el-table-column prop="meta.icon" label="图标" width="180"></el-table-column>
            <el-table-column prop="meta.affix" label="是否固定">
                <template #default="scope">
                    {{ useBoolenText(scope.row.meta.affix) }}
                </template>
            </el-table-column>
            <el-table-column label="是否不缓存" width="180">
                <template #default="scope">
                    {{ useBoolenText(scope.row.meta.noKeepAlive) }}
                </template>
            </el-table-column>
            <el-table-column label="徽章">
                <template #default="scope">
                    <el-tag v-if="scope.row.meta.badge"  type="danger" effect="dark">
                        {{scope.row.meta.badge}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template #default="scope">
                    <el-button type="primary" icon="el-icon-edit" size="small" @click="handleClickEdit(scope.row)">编辑</el-button>
                    <el-button type="danger" icon="el-icon-delete" size="small" @click="handleClickDel(scope.row)">删除</el-button>
                </template>
            </el-table-column>
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

    const handleClickEdit = (row) => {
        console.log(row)
    }

    const handleClickDel = (row) => {
        console.log(row)
    }

    const useRouteType = (row) => {
        if(row.type === 1) return '菜单'
        if(row.type === 2) return '按钮'
        if(row.type === 3) return '页面'
    }

    const useBoolenText = (value) => {
        return value ? '是' : '否'
    }
</script>

<style>
</style>