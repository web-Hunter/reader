<template>
    <div class="detailsnav">
        <div class="bookrack iconfont">
            <span class="icon">&#xe637;</span>
            <span class="desc">加入书架</span>
        </div>
        <div class="read iconfont">
            <span class="icon">&#xe657;</span>
            <span class="desc">免费试读</span>
        </div>
        <div class="buy iconfont">
            <span class="icon">&#xe63c;</span>
            <span class="desc">优惠购买</span>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'DetailsNav'
}
</script>

<style lang="stylus" scoped>
    .detailsnav
        width 100%
        height 2.2rem
        position fixed
        bottom 0
        background #fff
        .bookrack
            float left 
            width 33.3%
            height 2.2rem
            text-align center
            .icon
                font-size 1rem
                display block
                margin-top .2rem
            .desc
                font-size .5rem
                display block
                margin-top .1rem
        .read
            float left 
            width 33.3%
            height 2.2rem
            background red
            text-align center
            color #fff
            .icon
                font-size 1rem
                display block
                margin 0 auto
                margin-top .2rem
            .desc
                font-size .5rem
                display block
                margin-top .1rem
        .buy
            float left 
            width 33.3%
            height 2.2rem
            text-align center
            .icon
                font-size 1rem
                display block
                margin 0 auto
                margin-top .2rem
            .desc
                font-size .5rem
                display block
                margin-top .1rem
</style>
