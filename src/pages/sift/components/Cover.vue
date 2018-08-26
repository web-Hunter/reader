<template>
    <div class="cover">
        <div class="cover-left">
            <div class="left-info">
                <span class="left-info-title">封面推荐</span>
                <span class="left-info-desc">穿越了！咦？小太监...</span>
            </div>
            <img class="cover-left-img" src="http://book.img.ireader.com/idc_1/m_1,w_200,h_266/279e7f1d/group6/M00/DE/75/CmQUN1kQB-qERmkwAAAAADvXCu4176467908.jpg?v=MxHv3Od_&t=CmQUN1kQB-o.">
        </div>
        <div class="cover-right">
            <div class="right-top">
                <div class="right-info">
                    <span class="right-info-title">神级风水师</span>
                    <span class="right-info-desc">风水养人，亦可杀人</span>
                </div>
                <img class="cover-right-img" src="../../../assets/images/1.png">
            </div>
            <div class="right-bottom">
                <div class="right-info">
                    <span class="right-info-title">悬疑灵异</span>
                    <span class="right-info-desc">怪事奇谈，鬼话连篇</span>
                </div>
                <img class="cover-right-img" src="../../../assets/images/2.jpg">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cover'    
}
</script>

<style lang="stylus" scoped>
    .cover
        border-top .5rem solid #eee
        overflow hidden
        height 0
        padding-bottom 73%
        .cover-left
            width 50%
            box-sizing border-box
            padding-left .9rem
            padding-right .9rem
            padding-bottom 73%
            float left 
            .left-info
                width 100%
                height 2rem
                .left-info-title
                    display block
                    height 1.5rem
                    line-height 1.5rem
                    font-size .6rem
                    font-weight bold
                .left-info-desc
                    display block
                    font-size .5rem
                    color #777
            .cover-left-img
                margin-top .5rem
                width 100%

        .cover-right
            width 50%
            float left
            padding-bottom 73%
            .right-top
                width 100%
                padding-bottom 73%
                height 0
                overflow hidden
                .right-info
                    width 100%
                    height 2rem
                    .right-info-title
                        display block
                        height 1.5rem
                        line-height 1.5rem
                        font-size .6rem
                        font-weight bold
                    .right-info-desc
                        display block
                        font-size .5rem
                        color #777
                .cover-right-img
                    margin-top .2rem
                    width 100%
            .right-bottom
                .right-info
                    width 100%
                    height 2rem
                    .right-info-title
                        display block
                        height 1.5rem
                        line-height 1.5rem
                        font-size .6rem
                        font-weight bold
                    .right-info-desc
                        display block
                        font-size .5rem
                        color #777
                .cover-right-img
                    margin-top .2rem
                    width 100%

</style>
