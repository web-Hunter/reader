<template>
    <div class="classify">
        <div class="classify-top border-bottom">
            <router-link tag="span" to="/" class="iconfont top-icon">&#xe601;</router-link>
            <span class="top-desc">分类</span>
        </div>
        <div class="classify-bottom">
            <div class="bottom-left">
                <ul>
                    <li class="items" 
                    v-for="(channel, index) in channelList" 
                    :key="index"
                    @click="handleChannelClick(index)"
                    >
                        <span class="item">{{channel.title}}</span>
                    </li>
                </ul>
            </div>
            <div class="bottom-right">
                <classify-component 
                :classifylist="classifyList" 
                :dd="dd"
                ></classify-component>
            </div>
        </div>
    </div>
</template>

<script>
import ClassifyComponent from  './components/ClassifyComponent'
import axios from 'axios'
export default {
    name: 'Classify',
    components: {
        ClassifyComponent
    },
    data () {
        return {
            channelList: [],
            classifyList: [],
            dd: 1
        }
    },
    methods: {
        getClassifyInfo () {
            axios.get('/api/classify.json')
            .then(this.getClassifyInfoSucc)
        },
        getClassifyInfoSucc (res) {
            res = res.data
            if(res.ret) {
                this.channelList = res.channelList
                this.classifyList = res.classifyList
            }            
        },
        handleChannelClick (e) {
            this.dd = e + 1            
        }
    },
    mounted () {
        this.getClassifyInfo()
    }
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
            border-bottom .05rem solid #eee
            .top-icon
                line-height 2rem
                margin-left .8rem
            .top-desc
                line-height 2rem
                margin-left .5rem
                font-size .7rem
        .classify-bottom
            
            width 100%
            height 100%
            position absolute
            .bottom-left
                margin-top 2rem
                position fixed
                float left
                width 20%
                height 100%
                overflow hidden
                background #eee
                .items
                    width 100%
                    height 3rem
                    overflow hidden
                    .item
                        line-height 3rem
                        margin-left 1rem
                        font-size .6rem
                        font-weight bold
            
</style>
