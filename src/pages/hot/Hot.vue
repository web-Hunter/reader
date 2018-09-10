<template>
    <div class="hot">
        <hot-slide :slidelist="slideList"></hot-slide>
        <hot-article :articlelist="articleList"></hot-article>
        <hot-topic></hot-topic>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
import HotSlide from './components/HotSlide'
import HotArticle from './components/HotArticle'
import HotTopic from './components/HotTopic'
import axios from 'axios'
export default {
    name:'Hot',
    data () {
        return {
            slideList: [],
            articleList: []
        }
    },
    components: {
        HotSlide,
        HotArticle,
        HotTopic
    },
    methods: {
        getHotInfo () {
            axios.get('/api/hot.json')
            .then(this.getHotInfoSucc)
        },
        getHotInfoSucc (res) {
            res = res.data
            if (res.ret) {
                this.slideList = res.slideList
                this.articleList = res.articleList
                console.log(res);
                
            }
        }
    },
    mounted () {
        this.getHotInfo()
    }
}
</script>

<style lang="stylus" scoped>
    .hot
        padding-top 2rem
</style>

