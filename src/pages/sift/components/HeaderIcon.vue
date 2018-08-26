<template>
    <div class="icons">
        <div class="icon">
            <div class="uu">
                <span class="iconfont icon-small icon1">&#xe603;</span>
                <p class="text-small">分类</p>
            </div>
        </div>
        <div class="icon">
            <div class="uu">
                <span class="iconfont icon-small icon2">&#xe6fe;</span>
                <p class="text-small">排行</p>
            </div>
        </div>
        <div class="icon">
            <div class="uu">
                <span class="iconfont icon-small icon3">&#xe657;</span>
                <p class="text-small">免费</p>
            </div>
        </div>
        <div class="icon">
            <div class="uu">
                <span class="iconfont icon-small icon4">&#xe74d;</span>
                <p class="text-small">包月</p>
            </div>
        </div>
        <div class="icon">
            <div class="uu">
                <span class="iconfont icon-small icon5">&#xe600;</span>
                <p class="text-small">特价</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderIcon'    
}
</script>

<style lang="stylus" scoped>
    .icons
        overflow hidden
        height 0
        padding-bottom 20%
        .icon
            float left 
            width 20%
            padding-bottom 20%
            .uu
                width 50%
                margin-left 25%
                margin-top 15%
                text-align center
                .icon-small
                    font-size 1.3rem
                .text-small
                    line-height 1.3rem
                    font-size .5rem
                .icon1
                    color green
                .icon2
                    color blue
                .icon3
                    color orange
                .icon4
                    color red
                .icon5
                    color purple
</style>
