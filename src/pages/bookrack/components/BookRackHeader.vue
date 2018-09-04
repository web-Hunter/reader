<template>
    <div class="header border-bottom">
        <div class="header-left" v-if="isOk">
            <span>XXX欢迎您</span>
            <span>余额</span>
        </div>
        <div class="header-left" v-else>
            <span>请登录</span>
        </div>
        <div class="header-right">
            <span class="iconfont header-right-search">&#xe644;</span>
            <span class="iconfont header-right-add">&#xe652;</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookrackHeader',
    data () {
        return {
            isOk: false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .header
        width 100%
        height 1.5rem
        color #666
        .header-left
            float left
            line-height 1.5rem
            margin-left 1rem
            font-size .6rem
        .header-right
            float right 
            margin-right .5rem
            line-height 1.5rem
            .header-right-search
                font-size .8rem
                margin-right .5rem
            .header-right-add
                font-size .8rem
</style>
