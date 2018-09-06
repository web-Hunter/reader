<template>
    <div class="base-nav">
        <div class="base">
            <router-link tag="div" to="/bookrack" class="items">
                <div class="item">
                    <span class="iconfont item-icon">&#xe618;</span>
                    <span class="item-desc">书架</span>
                </div>
            </router-link>
            <router-link tag="div" to="/home" class="items">
                <div class="item">
                    <span class="iconfont item-icon">&#xe60d;</span>
                    <span class="item-desc">书城</span>
                </div>
            </router-link>
            <router-link tag="div" to="/find" class="items">
                <div class="item">
                    <span class="iconfont item-icon">&#xe60e;</span>
                    <span class="item-desc">发现</span>
                </div>
            </router-link>
            <router-link tag="div" to="/my" class="items">
                <div class="item">
                    <span class="iconfont item-icon">&#xe643;</span>
                    <span class="item-desc">我的</span>
                </div>
            </router-link>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'BaseNav'
}
</script>

<style lang="stylus" scoped>
    .base-nav
        border-top .01rem solid #eee
        position fixed
        bottom 0
        z-index 5
        background #fff
        width 100%
        height 2.2rem
        .base
            margin-top .1rem
            width 95%
            height 0
            margin 0 auto
            padding-bottom 2.2rem
            overflow hidden
            .router-link-active
                color red
            .items
                float left
                width 25%
                height 2.2rem
                .item
                    width 1.2rem
                    height 2.2rem
                    margin 0 auto
                    .item-icon
                        margin-top .2rem
                        display block
                        width 1.2rem
                        font-size 1.2rem
                    .item-desc
                        display block
                        margin-top .3rem
                        width 1.2rem
                        font-size .5rem
                        text-align center
</style>
