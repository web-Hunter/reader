<template>
    <div class="hot">
        <hot-slide></hot-slide>
        <hot-article></hot-article>
        <hot-topic></hot-topic>
    </div>
</template>

<script>
import HotSlide from './components/HotSlide'
import HotArticle from './components/HotArticle'
import HotTopic from './components/HotTopic'
export default {
    name:'Hot',
    components: {
        HotSlide,
        HotArticle,
        HotTopic
    }
}
</script>

<style lang="stylus" scoped>
    .hot
        padding-top 2rem
</style>

