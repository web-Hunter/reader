<template>
    <div class="swiper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="item in slidelist" :key="item.id">
                    <img :src="item.imgUrl" class="swiper-img">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
</template>

<script>
export default {
    name: 'HotSlide',
    props: {
        slidelist: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
                autoplayDisableOnInteraction : false,
                autoplay: 1000
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .swiper >>> .swiper-pagination-bullet-active
        background : #fff
    .swiper
        overflow : hidden
        width : 100%
        height : 0
        padding-bottom : 42%
        background-color : #ccc
        .swiper-img
            width 100%
</style>

