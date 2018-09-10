<template>
    <div class="hot">
        <hot-slide :slidelist="slideList"></hot-slide>
        <hot-article-img :articleimglist="articleImgList"></hot-article-img>
        <hot-topic :topiclist="topicList"></hot-topic>
        <hot-article :articlelist="articleList"></hot-article>
        
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
import HotArticleImg from './components/HotArticleImg'
import HotTopic from './components/HotTopic'
import axios from 'axios'
export default {
    name:'Hot',
    data () {
        return {
            slideList: [],
            articleImgList: [],
            articleList: [],
            topicList: []
        }
    },
    components: {
        HotSlide,
        HotArticle,
        HotArticleImg,
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
                this.articleImgList = res.articleImgList
                this.topicList = res.topicList                
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

