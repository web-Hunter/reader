<template>
    <div class="swiper">
        <swiper :options="swiperOption">
            <swiper-slide>
                    <img src="https://github.com/web-Hunter/reader/blob/master/src/assets/images/topic8.jpg?raw=true" class="swiper-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="https://github.com/web-Hunter/reader/blob/master/src/assets/images/topic9.jpg?raw=true" class="swiper-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="https://github.com/web-Hunter/reader/blob/master/src/assets/images/topic3.jpg?raw=true" class="swiper-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="https://github.com/web-Hunter/reader/blob/master/src/assets/images/topic4.jpg?raw=true" class="swiper-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="https://github.com/web-Hunter/reader/blob/master/src/assets/images/topic5.jpg?raw=true" class="swiper-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="https://github.com/web-Hunter/reader/blob/master/src/assets/images/topic6.jpg?raw=true" class="swiper-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="https://github.com/web-Hunter/reader/blob/master/src/assets/images/topic7.jpg?raw=true" class="swiper-img">
                </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HotTopic',
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
