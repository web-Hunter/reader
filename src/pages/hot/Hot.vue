<template>
    <div class="hot">
        <div class="swiper">
            <swiper :options="swiperOption">
                <swiper-slide>
                    <img src="" class="swiper-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="" class="swiper-img">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name:'Hot'
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

