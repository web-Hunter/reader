<template>
    <div class="introduce">
        <div class="introduce-header border-bottom">
            <router-link tag="span" to="/find" class="iconfont top-icon">&#xe601;</router-link>
            <span class="top-desc">推荐</span>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'FindIntroduce'
}
</script>

<style lang="stylus" scoped>
    .introduce
        .introduce-header
            position fixed
            z-index 6
            background #fff
            width 100%
            height 2rem
            border-bottom .05rem solid #eee
            .top-icon
                line-height 2rem
                margin-left .8rem
            .top-desc
                line-height 2rem
                margin-left .5rem
                font-size .7rem
</style>

