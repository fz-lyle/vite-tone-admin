<template>
    <div class="has-logo">
        <logo />
        <el-scrollbar>
            <el-menu router :background-color="variablesAttr.menuBackground" text-color="#fff" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <template v-for="(item, index) in routes" :key="index">
                    <el-sub-menu :index="(index + 1) + ''">
                        <template #title>
                            <i class="el-icon-location"></i>
                            <span>{{item.meta.title || item.name}}</span>
                        </template>
                        <template v-for="(routes, cIndex) in item.children" :key="cIndex">
                            <el-menu-item :route="{name: routes.name}" :index="(index + 1) + '-' + (cIndex + 1)">{{routes.meta.title ||routes.name}}</el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script setup>
    import Logo from '@/layout/components/Sidebar/logo.vue'
    import variables from '@/styles/variables.scss'
    import { reactive, ref, computed, getCurrentInstance } from 'vue'

    const { appContext: { config: { globalProperties } } } = getCurrentInstance()

    const routes = computed(() => globalProperties.$store.getters['router/routes'])
    const variablesAttr = reactive(globalProperties.scssToObject(variables))

    const handleOpen = () => {

    }

    const handleClose = () => {

    }

</script>

<style lang="scss">
    @import "@/styles/variables.scss";
    .el-menu-vertical-demo {
        width: 100%;
        .el-sub-menu {
            width: calc(100% + 2px);
        }

        .el-menu-item {
            &.is-active {
                color: #fff;
                background-color: $base-menu-background-active !important;
            }
        }
    }
</style>