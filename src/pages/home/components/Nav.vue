<template>
    <div class="wrapper border-bottom">
        <swiper :options="swiperOption" >
            <!-- slides -->
            <swiper-slide><router-link tag="span" to="/sift" class="ee">精选</router-link></swiper-slide>
            <swiper-slide><router-link tag="span" to="/man" class="ee">男生</router-link></swiper-slide>
            <swiper-slide><span class="ee">女生</span></swiper-slide>
            <swiper-slide><span class="ee">漫画</span></swiper-slide>
            <swiper-slide><span class="ee">出版</span></swiper-slide>
            <swiper-slide><span class="ee">听书</span></swiper-slide>
            <swiper-slide><span class="ee">积木</span></swiper-slide>
            
            <swiper-slide><span class="ee">免费</span></swiper-slide>
            <swiper-slide><span class="ee">VIP</span></swiper-slide>
            <swiper-slide><span class="ee">板栗</span></swiper-slide>
            <swiper-slide><span class="ee">书店</span></swiper-slide>
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
            }
        }  
    }
    
}
</script>

<style lang="stylus" scoped>
    .wrapper
        margin-top .2rem
        height 1rem
        
        .ee
            margin-left .5rem
            line-height 1rem
            z-index 1
            font-size .6rem
        .qq
            float right
            .con
                position relative 
                top -1rem
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
