<template>
    <div class="classify">
        <div class="classify-top border-bottom">
            <router-link tag="span" to="/" class="iconfont top-icon">&#xe601;</router-link>
            <span class="top-desc">分类</span>
        </div>
        <div class="classify-bottom">
            <div class="bottom-left">
                <ul>
                    <li class="items">
                        <span class="item">男频</span>
                    </li>
                    <li class="items">
                        <span class="item">女频</span>
                    </li>
                    <li class="items">
                        <span class="item">漫画</span>
                    </li>
                    <li class="items">
                        <span class="item">出版</span>
                    </li>
                    <li class="items">
                        <span class="item">听书</span>
                    </li>
                    <li class="items">
                        <span class="item">杂志</span>
                    </li>
                </ul>
            </div>
            <div class="bottom-right">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Classify'
}
</script>

<style lang="stylus" scoped>
    .classify
        .classify-top
            position fixed
            z-index 6
            background #fff
            width 100%
            height 2rem
            .top-icon
                line-height 2rem
                margin-left .8rem
            .top-desc
                line-height 2rem
                margin-left .5rem
                font-size .7rem
        .classify-bottom
            border-top .05rem solid #eee
            width 100%
            height 100%
            position absolute
            background green
            .bottom-left
                margin-top 2rem
                position fixed
                float left
                width 20%
                height 100%
                overflow hidden
                background #ccc
                .items
                    width 100%
                    height 3rem
                    overflow hidden
                    background yellow
                    .item
                        line-height 3rem
                        margin-left 1rem
                        font-size .6rem
                        font-weight bold
</style>
