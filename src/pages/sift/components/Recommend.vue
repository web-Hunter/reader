<template>
    <div class="recommend">
        <div class="recommend-title">本期主打</div>
        <div class="recommend-items">  
            <div class="item" v-for="item of recommendlist" :key="item.id">
                <img class="item-img" :src="item.imgUrl">
                <p class="item-desc">{{item.title}}</p>
            </div>        
        </div>
    </div>
</template>

<script>
export default {
    name: 'Recommend',
    props: {
        recommendlist: Array
    } 
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
