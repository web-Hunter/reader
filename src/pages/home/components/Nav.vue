<template>
    <div class="wrapper border-bottom">
        <swiper :options="swiperOption" >
            <!-- slides -->
            <swiper-slide><router-link tag="span" to="/sift" class="ee">精选</router-link></swiper-slide>
            <swiper-slide><router-link tag="span" to="/boy" class="ee">男生</router-link></swiper-slide>
            <swiper-slide><router-link tag="span" to="/girl" class="ee">女生</router-link></swiper-slide>
            <swiper-slide><router-link tag="span" to="/comics" class="ee">漫画</router-link></swiper-slide>
            <swiper-slide><router-link tag="span" to="/publish" class="ee">出版</router-link></swiper-slide>
            <swiper-slide><router-link tag="span" to="/listen" class="ee">听书</router-link></swiper-slide>
            <swiper-slide><router-link tag="span" to="/fantasy" class="ee">玄幻</router-link></swiper-slide>
            <swiper-slide><router-link tag="span" to="/writing" class="ee">奇文</router-link></swiper-slide>
            <swiper-slide><router-link tag="span" to="/free" class="ee">免费</router-link></swiper-slide>
            <swiper-slide><router-link tag="span" to="/VIP" class="ee">VIP</router-link></swiper-slide>
            <swiper-slide><router-link tag="span" to="/city" class="ee">都市</router-link></swiper-slide>
            <swiper-slide><router-link tag="span" to="/bookstore" class="ee">书店</router-link></swiper-slide>
            <swiper-slide><router-link tag="span" to="/" class="ee"></router-link></swiper-slide>
        </swiper>
        <div class="qq">
            <div class="con"><span class="iconfont con-icon">&#xe604;</span></div>
        </div>
        <router-view></router-view>
        
    </div>
</template>

<script>
export default {
    name: 'HomeNav',
    data () {
        return {
            swiperOption: {
                slidesPerView : 6,
                freeMode : true,
                freeModeMomentumBounceRatio : 5,
                preventLinksPropagation : false,
                slideToClickedSlide:true,
                autoplayDisableOnInteraction : false,
            }
        }  
    },
    methods: {
        tabClick (res) {

        }
    }
    
}
</script>

<style lang="stylus" scoped>
    .wrapper
        margin-top .2rem
        height 1rem
        .router-link-active
            color red
        .ee
            margin-left .5rem
            line-height 1rem
            z-index 1
            font-size .6rem
        .qq
            position relative
            .con
                position absolute
                top -1rem
                right 0
                height 1rem
                line-height 1rem
                width 2rem
                background #fff
                box-shadow -.05rem 0 .03rem #ccc
                z-index 2
                .con-icon
                    font-size 1.5rem
                    margin-left .3rem
                    
</style>
