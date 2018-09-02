<template>
    <div class="detail">
        <div class="header">
            <router-link tag="span" to="/sift" class="header-left iconfont">&#xe601;</router-link>
            <span class="header-right iconfont">&#xe602;</span>
            <span class="header-right iconfont">&#xe60c;</span>
        </div>
        <div class="content" v-for="item in detailslist" :key="item.id" v-if="item.id == di">
            <div class="content-left">
                <div class="left-title">{{item.title}}</div>
                <div class="left-desc">
                    <span>{{item.author}}</span>|
                    <span>{{item.comefrom}}</span>
                </div>
                <div class="left-desc">
                    <span>{{item.status}}</span>
                    <span>{{item.Words}}万字</span>
                </div>
                <div class="left-desc">{{item.price}}阅饼/千字</div>
            </div>
            <div class="content-right">
                <img class="right-img" :src="item.imgUrl">
            </div>
        </div>
        <div class="bottom">
                <div class="bottom-left">
                    <div>开通超级会员，全场好书免费畅读</div>
                    <div>开通VIP，免费阅读此书</div>
                </div>
                <div class="bottom-right iconfont">&#xe63a;</div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'DetailsHeader',
    props: {
        detailslist: Array,
        di: String
    }
}
</script>

<style lang="stylus" scoped>
    .detail
        width 100%
        height 0
        overflow hidden
        padding-bottom 12rem
        background #777
        .header
            width 100%
            height 1.5rem
            position fixed
            z-index 4
            font-size .5rem
            color #fff
            background #777
            .header-left
                float left
                margin-left .6rem
                line-height 1.5rem
                font-size .8rem
            .header-right
                float right
                font-size .8rem
                line-height 1.5rem
                margin-right .6rem
        .content
            margin-top 1.5rem
            width 100%
            height 0
            overflow hidden
            padding-bottom 8.5rem
            .content-left
                float left
                width 60%
                height 8.5rem
                padding-left .8rem
                box-sizing border-box
                .left-title
                    color #fff
                    font-size .7rem
                    line-height 1.8rem
                .left-desc
                    color #ccc
                    font-size .5rem
                    line-height .8rem
            .content-right
                float right
                width 40%
                height 8.5rem
                padding 0 .6rem
                margin-top .8rem
                box-sizing border-box
                .right-img
                    width 100%
        .bottom
            width 100%
            height 2rem
            color #ccc
            background #666
            .bottom-left
                float left
                line-height 1rem
                margin-left 1rem
            .bottom-right
                float right
                line-height 2rem
                margin-right .8rem
                font-size .8rem
</style>


