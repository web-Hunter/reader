<template>
    <div class="details-content">
        <div  v-for="item in detailslist" :key="item.id" v-if="item.id == di">
            <div class="header border-bottom">
                <div class="header-left">
                    <div class="left-star">
                        <span>{{item.grade}}</span>
                    </div>
                    <div class="left-num">{{item.evalute}}人评价</div>
                </div>
                <div class="header-right">
                    <div class="right-descs">
                        <div class="right-desc">{{item.moods}}万</div>
                        <div class="right-des">人气</div>
                        
                    </div>
                    <div class="right-descs">
                        <div class="right-desc">{{item.like}}万</div>
                        <div class="right-des">点赞</div>
                    </div>
                    <div class="right-descs">   
                        <div class="right-desc">{{item.fans}}万</div>
                        <div class="right-des">粉丝</div>
                    </div>
                </div>
            </div>
            <div class="content">
                <span>内容简介：</span>
                {{item.content}}
            </div>
            <div class="bottom border-topbottom">
                <div class="bottom-left">
                    <span class="bottom-left-title">目录</span>
                    <span class="bottom-left-desc">{{item.section}}章</span>
                </div>
                <div class="bottom-right">
                    <span class="bottom-right-desc">查看目录</span>
                    <span class="iconfont">&#xe63a;</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailsContent',
    props: {
        detailslist: Array,
        di: String
    }
}
</script>

<style lang="stylus" scoped>
    .details-content
        width 100%
        .header
            width 90%
            height 2.5rem
            margin 0 auto
            display flex
            .header-left
                width 30%
                float left
                margin-top .5rem
                .left-star
                    font-size .75rem
                    font-weight bold
                .left-num
                    margin-top .2rem
                    font-size .3rem
                    color #ccc
            .header-right
                flex 1
                float right
                margin-top .5rem
                .right-descs
                    display inline-block
                    margin-left .5rem
                    .right-desc
                        font-size .75rem
                        font-weight bold
                    .right-des
                        margin-top .2rem
                        font-size .3rem
                        color #ccc
                        width 100%  
                        text-align center
        .content
            width 90%
            margin .5rem auto
            font-size .6rem
            color #888
            line-height .9rem
        .bottom
            width 90%
            height 1.5rem
            margin 0 auto
            .bottom-left
                float left
                line-height 1.5rem
                .bottom-left-title
                    font-size .7rem
                .bottom-left-desc
                    margin-left .2rem
                    font-size .3rem
                    color #ccc
            .bottom-right
                line-height 1.5rem
                float right
                color red
                // color #0be
                margin-bottom .5rem
                .bottom-right-desc
                    font-size .5rem

</style>
