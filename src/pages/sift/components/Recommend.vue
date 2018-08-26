<template>
    <div class="recommend">
        <div class="recommend-title">本期主打</div>
        <div class="recommend-items">
            
            <div class="item">
                <img class="item-img" src="http://book.img.ireader.com/idc_1/m_1,w_200,h_266/949bec64/group6/M00/26/82/CmQUNlX10uGEHzyJAAAAAE0LNYw692492407.jpg?v=tCoNHFTe&t=CmQUNlsfX8Q.">
                <p class="item-desc">从你的全世界路过</p>
            </div>
            <div class="item">
                <img class="item-img" src="http://book.img.ireader.com/idc_1/m_1,w_200,h_266/a05af2c0/group6/M00/D2/BC/CmQUNljdFsyEBo_2AAAAADlB63w317473732.jpg?v=9c7D2NOW">
                <p class="item-desc">夏有乔木 雅望天堂</p>
            </div>
            <div class="item">
                <img class="item-img" src="http://book.img.ireader.com/idc_1/m_1,w_200,h_266/9edacc16/group6/M00/13/8F/CmQUN1X04MqEd-iGAAAAALAelRw541495640.jpg?v=oWFgHtDu&t=CmQUN1tqkb0.">
                <p class="item-desc">三生三世 十里桃花</p>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Recommend'    
}
</script>

<style lang="stylus" scoped>
    .recommend
        border-top .5rem solid #eee
        .recommend-title
            width 100%
            height 2rem
            line-height 2rem
            text-indent 1em
            font-size .7rem
            font-weight bold
        .recommend-items
            overflow hidden
            height 0
            padding-bottom 46%
            .item
                padding-left  .5rem
                float left 
                width 29%
                height 0
                padding-bottom 44%
                .item-img
                    width 100%
                .item-desc
                    margin-top .1rem
                    font-size .5rem
</style>
