<template>
    <div class="has-logo">
        <logo />
        <tn-scrollbar>
            <el-menu router :background-color="variablesAttr.menuBackground" text-color="#fff" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <template v-for="(item, index) in routes" :key="index">
                    <el-submenu :index="(index + 1) + ''">
                        <template #title>
                            <i class="el-icon-location"></i>
                            <span>{{item.meta.title || item.name}}</span>
                        </template>
                        <template v-for="(routes, cIndex) in item.children" :key="cIndex">
                            <el-menu-item :route="{name: routes.name}" :index="(index + 1) + '-' + (cIndex + 1)">{{routes.meta.title ||routes.name}}</el-menu-item>
                        </template>
                        <!-- <el-menu-item-group>
                            <template #title>分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template #title>选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu> -->
                    </el-submenu>
                </template>
            </el-menu>
        </tn-scrollbar>
    </div>
</template>

<script setup>
    import Logo from '@/layout/components/Sidebar/logo.vue'
    import TnScrollbar from '@/components/TnScrollbar/index.vue'
    import variables from '@/styles/variables.scss'
    import { reactive, ref, computed, getCurrentInstance } from 'vue'

    const { ctx: { scssToObject, $store: store } } = getCurrentInstance()

    const routes = computed(() => store.getters['router/routes'])
    const variablesAttr = reactive(scssToObject(variables))

    const handleOpen = () => {

    }

    const handleClose = () => {

    }

</script>

<style lang="scss">
    @import "@/styles/variables.scss";
    .el-menu-vertical-demo {
        width: 100%;
        .el-menu-item.is-active {
            color: #fff;
            background-color: $base-menu-background-active !important;
        }
    }
</style>