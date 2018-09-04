<template>
    <div>
        <slide-show :slidelist="slideList"></slide-show>
        <header-icon :iconlist="iconList"></header-icon>
        <recommend :recommendlist="recommendList"></recommend>
        <cover :coverlist="coverList"></cover>
        <matter :matterlist="matterList"></matter>
        <div>
            <br>
            <br>
            <br>
            <br>
        </div>
    </div>
</template>

<script>
import SlideShow from './components/SlideShow'
import HeaderIcon from './components/HeaderIcon'
import Recommend from './components/Recommend'
import Cover from './components/Cover'
import Matter from './components/Matter'
import axios from 'axios'
export default {
    name: 'Sift',
    data () {
        return {
            slideList: [],
            recommendList: [],
            coverList: [],
            matterList: [],
            iconList: [],
        }
    },
    components:{
        SlideShow,
        HeaderIcon,
        Recommend,
        Cover,
        Matter
    },
    methods: {
        getSiftInfo () {
            axios.get('/api/Sift.json')
            .then(this.getSiftInfoSucc)
        },
        getSiftInfoSucc (res) {
            res = res.data
            if(res.ret) {
                this.slideList = res.slideList
                this.recommendList = res.recommendList
                this.coverList = res.coverList
                this.matterList = res.matterList
                this.iconList = res.iconList
            }            
        }
    },
    mounted () {
        this.getSiftInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>
