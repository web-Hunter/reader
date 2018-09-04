<template>
    <div class="icons">
        <div class="icon" v-for="item in iconlist" :key="item.id">
            <router-link tag="div" to="/classify" class="uu">
                <img :src="item.iconfonts">
                <p class="text-small">{{item.title}}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderIcon',
    props: {
        iconlist: Array
    }
}
</script>

<style lang="stylus" scoped>
    .icons
        overflow hidden
        height 0
        padding-bottom 20%
        .icon
            float left 
            width 20%
            padding-bottom 20%
            .uu
                width 50%
                margin-left 25%
                margin-top 15%
                text-align center
                .icon-small
                    font-size 1.3rem
                .text-small
                    line-height 1.3rem
                    font-size .5rem
                .icon1
                    color green
                .icon2
                    color blue
                .icon3
                    color orange
                .icon4
                    color red
                .icon5
                    color purple
</style>
