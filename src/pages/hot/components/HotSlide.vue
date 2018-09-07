<template>
    <div class="swiper">
            <swiper :options="swiperOption">
                <swiper-slide>
                    <img src="https://github.com/web-Hunter/reader/blob/master/src/assets/images/hotimg1.jpg?raw=true" class="swiper-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="https://github.com/web-Hunter/reader/blob/master/src/assets/images/hotimg2.jpg?raw=true" class="swiper-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="https://github.com/web-Hunter/reader/blob/master/src/assets/images/hotimg3.jpg?raw=true" class="swiper-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="https://github.com/web-Hunter/reader/blob/master/src/assets/images/hotimg4.jpg?raw=true" class="swiper-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="https://github.com/web-Hunter/reader/blob/master/src/assets/images/hotimg5.jpg?raw=true" class="swiper-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="https://github.com/web-Hunter/reader/blob/master/src/assets/images/hotimg6.jpg?raw=true" class="swiper-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="https://github.com/web-Hunter/reader/blob/master/src/assets/images/hotimg7.jpg?raw=true" class="swiper-img">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
</template>

<script>
export default {
    name: 'HotSlide',
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
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

