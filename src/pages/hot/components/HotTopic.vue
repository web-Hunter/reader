<template>
    <div class="swiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in topiclist" :key="item.id">
                <img :src="item.imgUrl" class="swiper-img">
            </swiper-slide>
                
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HotTopic',
    props: {
        topiclist: Array
    },
    data () {
        return {
            swiperOption: {
                slidesPerView: 2.5,
                pagination: '.swiper-pagination',
                spaceBetween: 10,
                freeMode: true
            }
        }
    },
}
</script>

<style lang="stylus" scoped>
    .swiper
        overflow : hidden
        width : 100%
        height : 0
        padding-bottom : 24%
        background-color : #ccc
        .swiper-img
            width 100%
</style>
