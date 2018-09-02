<template>
    <div class="matter">
        <div class="matter-top">
            <span class="matter-top-left">热血玄幻</span>
            <span class="matter-top-right iconfont">更多玄幻好书&#xe63a;</span>
        </div>
        <div class="matter-bottom">
            <div class="bottom-templates" v-for="items in matterlist" :key="items.id">
                <router-link tag="div" :to="{path:'/details',query:{id:item.id}}" class="templates" v-for="item in items.item" :key="item.id">
                    <img class="templates-img" :src="item.imgUrl">
                    <p class="templates-desc">{{item.title}}</p>
                </router-link>
            </div>     
        </div>
    </div>
</template>

<script>
export default {
    name: 'Matter',
    props: {
        matterlist: Array
    } 
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
