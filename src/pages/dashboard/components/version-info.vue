<template>
    <el-card shadow="hover">
        <template #header>
            <span>版本信息</span>
        </template>
        <div class="version-container">
            <div class="version-info" v-for="(val, key) in versionInfo" :key="key">
                <div class="version-key">{{key}}</div>
                <div class="version-value">{{val}}</div>
            </div>
        </div>
    </el-card>
</template>

<script setup>
    import { getCurrentInstance, reactive } from 'vue'
    import { dependencies, devDependencies, version } from '~/package.json'

    const { ctx } = getCurrentInstance()

    const versionInfo = reactive({ ...dependencies, ...devDependencies, 'build-version': version })
</script>

<style lang="scss" scoped>
    .version-container {
        display: flex;
        flex-wrap: wrap;
        font-size: 14px;
        border-top: 1px solid #e6e6e6;
        border-left: 1px solid #e6e6e6;

        .version-info {
            display: flex;
            width: 50%;

            .version-key,
            .version-value {
                flex: 1;
                padding: 9px 15px;
                border-right: 1px solid #e6e6e6;
                border-bottom: 1px solid #e6e6e6;
            }

            .version-key {
                text-align: right;
                background-color: #f7f7f7;
            }

            .version-value {
                text-align: left;
            }
        }
    }
</style>