<template>
    <div class="tn-scroll">
        <div class="tn-scroll-container">
            <div class="tn-scroll-content">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
    
</script>

<style lang="scss">
    .tn-scroll {
        overflow: hidden;
        width: 100%;
        height: 100%;

        .tn-scroll-container {
            display: flex;
            flex-direction: column;
            height: 100%;

            ::-webkit-scrollbar {
                width: 6px;
                height: 6px;
            }

            ::-webkit-scrollbar-thumb {
                opacity: 0;
            }

            ::-webkit-scrollbar-track {
                opacity: 0;
            }

            &:hover {
                ::-webkit-scrollbar-thumb {
                    background: hsla(0, 0%, 100%, 0.2);
                    border-radius: 3px;
                    -webkit-box-shadow: inset 0 0 5px hsl(0deg 0% 100% / 5%);
                }

                ::-webkit-scrollbar-track {
                    background: hsla(0, 0%, 100%, 0.15);
                    border-radius: 3px;
                    -webkit-box-shadow: inset 0 0 5px rgb(37 37 37 / 5%);
                }
            }

            .tn-scroll-content {
                flex: 1 1 0%;
                overflow: hidden auto;
            }
        }
    }
</style>