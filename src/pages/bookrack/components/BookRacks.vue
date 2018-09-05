<template>
    <div class="bookrackslist">
        <div class="bookracks">
            <div class="bookrack">
                <div class="rack">
                    <img class="rackimg" :src="this.$store.state.bookList[0].imgUrl">
                </div>
            </div>
        </div>
        <div class="shadow"></div>
        <div class="shadow1"></div>
        <div class="shadow2"></div>
    </div>
</template>

<script>
export default {
    name: 'BookRacks'
}
</script>

<style lang="stylus" scoped>
    .bookrackslist
        width 100%
        position relative
        .bookracks
            width 100%
            height 0
            padding-bottom 5.7rem
            overflow hidden
            .bookrack
                width 100%
                height 0
                padding-bottom 5.7rem
                overflow hidden
                .rack
                    margin-top .5rem
                    margin-left .7rem
                    margin-right .83rem
                    width 24%
                    height 5.2rem
                    float left
                    background #fff
                    .rackimg
                        width 100%
        .shadow
            position absolute
            top 4.1rem
            width 100%
            height 1.8rem
            background linear-gradient(to bottom, rgba(255,255,255,0),rgba(0,0,0,0.1))
        .shadow1
            position absolute
            top 9.8rem
            width 100%
            height 1.8rem
            background linear-gradient(to bottom, rgba(255,255,255,0),rgba(0,0,0,0.1))
        .shadow2
            position absolute
            top 15.5rem
            width 100%
            height 1.8rem
            background linear-gradient(to bottom, rgba(255,255,255,0),rgba(0,0,0,0.1))
</style>
