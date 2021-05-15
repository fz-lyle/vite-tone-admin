<template>
    <div>
        <div>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">
                    <i class="el-icon-s-home"></i>
                    首页
                </el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
            <div @click="setScreenFull">全屏</div>
            <div @click="test">测试</div>
        </div>
    </div>
</template>

<script setup>
    import screenfull from 'screenfull'
    import { toRef, getCurrentInstance } from 'vue'

    const { ctx: { $message: message } } = getCurrentInstance()

    const setScreenFull = () => {
        if (!screenfull.isEnabled) {
            message.success({
                content: 'you browser can not work'
            })
        }

        screenfull.toggle()
    }

    const test = () => {
        message.success({
            message: 'cccdasdas'
        });
    }
</script>

<style>
</style>