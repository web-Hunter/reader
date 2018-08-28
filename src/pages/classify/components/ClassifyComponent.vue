<template>
    <div class="component">
        <div v-for="items in classifylist" :key="items.id" v-if="items.id == dd">
            <div class="item" v-for="item in items.items" :key="item.id">
                <div class="item-img">
                    <img class="img" :src="item.imgUrl">
                </div>
                <div class="item-desc">
                    <span>{{item.title}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ClassifyComponent',
    props: {
        classifylist: Array,
        dd: Number
    },
    watch: {
        dd: function (newValue,oldValue) {
            this.dd = newValue
            console.log(this.dd);
            
        }
        
    }
}
</script>

<style lang="stylus" scoped>
    .component
        margin-top 2.1rem
        position absolute
        right 0
        width 80%
        height 100%
        .item
            margin-top .8rem
            margin-bottom .8rem
            float left
            width 50%
            height 2.5rem
            overflow hidden
            font-size 0
            .item-img
                display inline-block
                float left
                margin-left .7rem
                width 28.5%
                height 2.5rem
                .img
                    width 100%
            .item-desc
                display inline-block
                font-size .6rem
                width 50%
                height 2.5rem
                margin-left .4rem
                line-height 2.5rem
</style>
