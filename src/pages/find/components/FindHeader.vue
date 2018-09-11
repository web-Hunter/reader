<template>
    <div class="header border-bottom">
        <router-link tag="div" to="/findIntroduce" class="header-left"><span class="left-icon iconfont">&#xe749;</span></router-link>
        <div class="header-content">
            <router-link tag="span" to="/find/follow" class="content-titles">关注</router-link>
            <router-link tag="span" to="/find/hot" class="content-titles content-title">热门</router-link>
            <router-link tag="span" to="/find/square" class="content-titles">广场</router-link>
        </div>
        <div class="header-right"><span class="right-icon iconfont">&#xe608;</span></div>
    </div>
</template>

<script>
export default {
    name: 'FindHeader'
}
</script>

<style lang="stylus" scoped>
    .header
        width 100%
        height 2rem
        position fixed
        z-index 4
        display flex
        background #fff
        .header-left
            float left
            margin-left .8rem
            line-height 2rem
            .left-icon
                font-size 1rem
                color #666
        .header-content
            float left
            flex 1
            text-align center
            .router-link-active
                color red
                border-bottom .1rem solid red
            .content-titles
                display inline-block
                line-height 2rem
                font-size .8rem
            .content-title
                margin-left .8rem
                margin-right .8rem
        .header-right
            float right
            line-height 2rem
            margin-right .8rem
            .right-icon
                font-size 1rem
                color red
</style>
