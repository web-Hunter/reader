<template>
    <div class="articles">
        <div class="article">
            <div class="article-header">
                <div class="header-left">
                    <img class="header-left-img" src="http://book.img.ireader.com/idc_1/m_1,w_200,h_266/a05af2c0/group6/M00/D2/BC/CmQUNljdFsyEBo_2AAAAADlB63w317473732.jpg?v=9c7D2NOW">
                    <span class="header-left-author">言无笙</span>
                </div>
                <div class="header-right">
                    <span class="header-right-icon iconfont">&#xe652;关注</span>
                </div>
            </div>
            <div class="article-content">
                <div class="content-contents">
                    <span class="contents-title">天灯愿</span>
                    <span class="contents-desc">他说“菩提树下许天灯，言归天处夙愿成。”她许了半生愿怎么还没实现？</span>
                </div>
                <div class="content-imgs">
                    <img class="content-img" src="http://book.img.ireader.com/idc_1/m_1,w_200,h_266/a05af2c0/group6/M00/D2/BC/CmQUNljdFsyEBo_2AAAAADlB63w317473732.jpg?v=9c7D2NOW">
                </div>
            </div>
            <div class="article-bottom">
                <div class="bottom-kind border">诗歌</div>
                <div class="bottom-kind">阅读</div>
                <div class="bottom-kind">点赞</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HotArticle'
}
</script>

<style lang="stylus" scoped>
    .article
        width 100%
        border-bottom .2rem solid #eee
        .article-header
            width 100%
            height 1.5rem
            padding-top .5rem
            .header-left
                float left
                .header-left-img
                    width 1rem
                    height 1rem
                    margin-left .5rem
                    border-radius 50%
                .header-left-author
                    margin-left .5rem
                    line-height 1rem
                    font-size .4rem
                    color #666
            .header-right
                float right
            .header-right-icon
                line-height 1rem
                margin-right 1rem
                font-size .4rem
                color #666
        .article-content
            width 100%
            display flex
            .content-contents
                display inline-block
                flex 1
                height 4rem
                .contents-title
                    display block
                    margin-top .5rem
                    margin-left .8rem
                    font-size .7rem
                    font-weight bold
                .contents-desc
                    display block
                    margin-top .5rem
                    margin-left .8rem
                    font-size .5rem
            .content-imgs
                display inline-block
                float right
                width 30%
                .content-img
                    margin .5rem 0
                    margin-left 1rem
                    width 55%
                    height 3rem
        .article-bottom
            padding-left .8rem
            padding-bottom 1rem
            color #999
            font-size .4rem
            .bottom-kind
                padding .1rem .1rem
                float left
                margin-right .5rem
</style>
