<template>
    <div class="swiper">
        <swiper :options="swiperOption">
            <swiper-slide>
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2417343192,3502885214&fm=26&gp=0.jpg" class="swiper-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2660647810,3708092210&fm=26&gp=0.jpg" class="swiper-img">
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
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HotTopic',
    data () {
        return {
            swiperOption: {
                slidesPerView: 2,
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
        padding-bottom : 42%
        background-color : #ccc
        .swiper-img
            width 100%
</style>
