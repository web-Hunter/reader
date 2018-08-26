<template>
    <div class="swiper">
        <swiper :options="swiperOption">
            <swiper-slide >
                <img src="http://book.img.ireader.com/idc_1/group6/M00/C0/73/CmQUNlo3gWmEDJQrAAAAAMqkmtk823838077.jpg?v=d7mUgUm9&t=CmQUNlo3gWk." class="swiper-img">
            </swiper-slide>
            <swiper-slide >
                <img src="http://book.img.ireader.com/idc_1/group6/M00/CE/2C/CmQUN1pcgFWEJ-LnAAAAANCp4os723905008.jpg?v=iVbJoXD-&t=CmQUN1pcgFU." class="swiper-img">
            </swiper-slide>
            <swiper-slide >
                <img src="http://book.img.ireader.com/idc_1/group6/M00/BF/77/CmQUNlovjtyEC6EkAAAAANHDUGI904069633.jpg?v=4k6nj-Hc&t=CmQUNlovjtw." class="swiper-img">
            </swiper-slide>
            <swiper-slide >
                <img src="http://book.img.ireader.com/idc_1/group6/M00/77/59/CmQUOVpcgv2EF3G1AAAAAFnuLmY979186405.jpg?v=RqOoH1wW&t=CmQUOVpcgv8." class="swiper-img">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
                autoplay: 1000
            }
        }
    },
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