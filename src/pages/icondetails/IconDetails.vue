<template>
    <div class="icondetails">
        <div v-for="lists in matterlist" :key="lists.id" v-if="lists.id == dd">
            <div class="header">
                <router-link tag="span" to="/" class="iconfont header-icon">&#xe601;</router-link>
                <span class="header-desc">{{lists.title}}</span>
            </div>
            <div class="matter">
                <div class="matter-r" v-for="list in lists.lists" :key="list.id">
                    <div class="matter-top">
                        <span class="matter-top-left">{{list.title}}</span>
                        <span class="matter-top-right iconfont">更多&#xe63a;</span>
                    </div>
                    <div class="matter-bottom">
                        <div class="bottom-templates" v-for="items in list.items" :key="items.id">
                            <router-link tag="div" :to="{path:'/details',query:{id:item.id}}" class="templates" v-for="item in items.item" :key="item.id">
                                <img class="templates-img" :src="item.imgUrl">
                                <p class="templates-desc">{{item.title}}</p>
                            </router-link>
                        </div>     
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'IconDetails',
    data () {
        return {
            dd: 0,
            matterlist: []
        }
    },
    methods: {
        getIconDetailsInfo () {
            axios.get('/api/icondetails.json')
            .then(this.getIconDetailsInfoSucc)
        },
        getIconDetailsInfoSucc (res) {
            res = res.data
            if(res.ret){
                this.matterlist = res.icondetailsList                
            }
        }
    },
    created () {
        this.dd = this.$route.query.id        
    },
    mounted () {
        this.getIconDetailsInfo()
    }
}
</script>

<style lang="stylus" scoped>
    .header
        position fixed
        background #fff
        width 100%
        height 1.5rem
        .header-icon
            line-height 1.5rem
            margin-left .8rem
            font-size .8rem
        .header-desc
            margin-left .2rem
            line-height 1.5rem
            font-size .65rem
    .matter
        border-top .2rem solid #eee
        .matter-r
            border-top .2rem solid #eee
            border-bottom .3rem solid #eee
            margin-top 1.5rem
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

