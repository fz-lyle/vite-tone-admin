<template>
    <div>
        <!-- <div></div> -->
        <sidebar class="sidebar-container" />
        <div class="main-container">
            <div>
                <navbar class="navbar-container" />
                <tags-view class="tags-view-container" />
            </div>
            <app-main class="main-content" />
            <!-- <right-panel>
                <settings />
            </right-panel> -->
        </div>
    </div>
</template>

<script setup>
    import { getCurrentInstance } from 'vue'
    import { mapState } from 'vuex'
    import { AppMain, Navbar, Settings, Sidebar, TagsView } from '@/layout/components'
    import RightPanel from '@/components/RightPanel/index.vue'
</script>

<style lang="scss">
    @import "@/styles/variables.scss";
    .main-container {
        height: 100vh;
        padding-left: $side-bar-width;
        background-color: $base-background;

        .main-content {
            &.tn-scroll {
                height: calc(100% - #{$base-top-bar-height} - #{$tag-views-height});

                .tn-scroll-container {
                    &:hover {
                        ::-webkit-scrollbar-thumb {
                            background: hsla(0, 0%, 1%, 0.2);
                        }

                        ::-webkit-scrollbar-track {
                            background: hsla(0, 0%, 1%, 0.15);
                        }
                    }
                }
            }
        }
    }

    .tags-view-container {
        height: $tag-views-height;
        line-height: $tag-views-height;
        padding: 0 $base-padding;
    }
</style>