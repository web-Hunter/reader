<template>
    <div class="hot">
        <hot-slide></hot-slide>
        <hot-article></hot-article>
    </div>
</template>

<script>
import HotSlide from './components/HotSlide'
import HotArticle from './components/HotArticle'
export default {
    name:'Hot',
    components: {
        HotSlide,
        HotArticle
    }
}
</script>

<style lang="stylus" scoped>
    .hot
        padding-top 2rem
</style>

