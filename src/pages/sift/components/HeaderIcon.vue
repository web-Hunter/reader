<template>
    <div class="icons">
        <div class="icon" v-for="item in iconlist" :key="item.id" v-if="item.id == 1">
            <router-link tag="div" to="/classify" class="uu">
                <img :src="item.iconfonts">
                <p class="text-small">{{item.title}}</p>
            </router-link>
        </div>
        <div class="icon" v-for="item in iconlist" :key="item.id" v-if="item.id != 1">
            <router-link tag="div" to="/" class="uu">
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
                .text-small
                    line-height 1.3rem
                    font-size .5rem
                
</style>
