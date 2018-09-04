<template>
    <div class="bookrackslist">
        <div class="bookracks">
            <div class="bookrack">
                <div class="rack">
                    <img class="rackimg" src="">
                </div>
            </div>
            <div class="shadow"></div>
        </div>

        <div class="bookracks">
            <div class="bookrack">
                <div class="rack">
                    <img class="rackimg" src="">
                </div>
            </div>
            <div class="shadow"></div>
        </div>

        <div class="bookracks">
            <div class="bookrack">
                <div class="rack">
                    <img class="rackimg" src="">
                </div>
            </div>
            <div class="shadow"></div>
        </div>
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
        .bookracks
            position relative
            width 100%
            height 0
            padding-bottom 6.5rem
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
                top 3.9rem
                width 100%
                height 1.8rem
                background linear-gradient(to bottom, rgba(255,255,255,0),rgba(0,0,0,0.1))
</style>
