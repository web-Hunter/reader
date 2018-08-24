<template>
    <div class="header">
        <div class="header-input">
            <span class="header-input-search iconfont">&#xe644;</span>
            搜索本地或书城
            <span class="header-input-scan iconfont">&#xe661;</span>
        </div>
        <div class="header-right">
            分类
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    .header
        display flex
        height 1.6rem
        width 100%
        margin-top .4rem
        .header-input
            flex 1
            margin-left .56rem
            font-size .6rem
            color #999
            height 1.6rem
            line-height 1.6rem
            background rgb(238,238,238)
            border-radius .3rem 
            .header-input-search
                float left
                margin-left .45rem
                font-size 1rem
                margin-right .3rem
            .header-input-scan
                float right
                margin-right .45rem
        .header-right
            font-size .6rem
            width 2.4rem
            line-height 1.6rem
            text-align center
            float right 
</style>
