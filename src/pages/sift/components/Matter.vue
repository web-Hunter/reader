<template>
    <div class="matter">
        <div class="matter-top">
            <span class="matter-top-left">热血玄幻</span>
            <span class="matter-top-right iconfont">更多玄幻好书&#xe63a;</span>
        </div>
        <div class="matter-bottom">
            <div class="bottom-templates">
                <div class="templates">
                    <img class="templates-img" src="http://book.img.ireader.com/idc_1/m_1,w_200,h_266/e8c7a7fc/group6/M00/27/12/CmQUNlX12oyEEvuXAAAAAN4MY9k598531021.jpg?v=of2_V4tA&t=CmQUNlqCScw.">
                    <p class="templates-desc">解忧杂货店</p>
                </div>
                <div class="templates">
                    <img class="templates-img" src="http://book.img.ireader.com/idc_1/m_1,w_200,h_266/b0be0718/group6/M00/2F/01/CmQUN1X2R66EF9DSAAAAAHWn2VI683375724.jpg?v=rEScOsMs">
                    <p class="templates-desc">微微一笑很倾城</p>
                </div>
                <div class="templates">
                    <img class="templates-img" src="http://book.img.ireader.com/idc_1/m_1,w_200,h_266/6b97f765/group6/M00/2B/5E/CmQUNlX2FM6EO8gjAAAAAEd5gEI351093916.jpg?v=aAfPndq6">
                    <p class="templates-desc">何以笙箫默</p>
                </div>
            </div>

            <div class="bottom-templates">
                <div class="templates">
                    <img class="templates-img" src="http://book.img.ireader.com/idc_1/m_1,w_200,h_266/9b8f4636/group6/M00/7E/40/CmQUOFjdKNCEMS_lAAAAAB2dzDM402138497.jpg?v=9XGLbEA4">
                    <p class="templates-desc">明朝那些事儿</p>
                </div>
                <div class="templates">
                    <img class="templates-img" src="http://book.img.ireader.com/idc_1/m_1,w_200,h_266/cbfa7d1f/group6/M00/13/A2/CmQUNlX04NeEarErAAAAAFJQXnk583141635.jpg?v=I38qO2K5">
                    <p class="templates-desc">如懿传</p>
                </div>
                <div class="templates">
                    <img class="templates-img" src="http://book.img.ireader.com/idc_1/m_1,w_200,h_266/55a948a2/group6/M00/D2/69/CmQUN1jdFO-EXpujAAAAAL8tApw659054726.jpg?v=NDKyy5Zm">
                    <p class="templates-desc">最好的我们</p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Matter'    
}
</script>

<style lang="stylus" scoped>
    .matter
        border-top .5rem solid #eee
        .matter-top
            width 100%
            height 2rem
            line-height 2rem 
            .matter-top-left
                float left 
                text-indent 1em
                font-size .7rem
                font-weight bold
            .matter-top-right
                float right
                margin-right .5rem
                font-size .5rem
                color #666666
        .matter-bottom
            .bottom-templates
                overflow hidden
                height 0
                padding-bottom 46%
                .templates
                    padding-left  .5rem
                    float left 
                    width 29%
                    height 0
                    padding-bottom 44%
                    .templates-img
                        width 100%
                    .templates-desc
                        margin-top .1rem
                        font-size .5rem
</style>
