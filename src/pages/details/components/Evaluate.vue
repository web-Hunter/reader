<template>
    <div class="evaluate">
        <div v-for="items in commentlist" :key="items.id" v-if="items.id == di">
            <div class="evaluate-header">
                <div class="header-left">
                    <span class="header-left-title">书圈</span>
                    <span class="header-left-desc">{{items.fans}}万粉丝，{{items.fans}}条发言</span>
                </div>
            </div>
            <div class="evaluate-content border-top" v-for="item in items.item" :key="item.id">
                <div class="content-header">
                    <div class="writer">{{item.writer}}</div>
                    <div class="time">{{item.time}}</div>
                </div>
                <div class="content-content">
                    <div class="desc">{{item.desc}}</div>
                </div>
                <div class="content-bottom">
                    <div class="like iconfont">&#xe607;&nbsp;{{item.like}}</div>
                </div>
            </div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Evaluate',
    props: {
        commentlist: Array,
        di: String
    }
}
</script>

<style lang="stylus" scoped>
    .evaluate
        width 100%
        .evaluate-header
            margin-top .1rem
            width 100%
            height 2rem
            .header-left
                width 50%
                height 2rem
                float left
                .header-left-title
                    line-height 2rem
                    margin-left .8rem
                    text-align center
                    font-size .8rem
                    font-weight bold
                .header-left-desc
                    margin-left .2rem
                    color #ccc
                    font-size .3rem
        .evaluate-content
            width 90%
            margin 0 auto
            margin-bottom 1rem
            .content-header
                width 100%
                height 1.5rem
                font-size .5rem
                .writer
                    float left
                    line-height 1.5rem
                .time
                    float right
                    line-height 1.5rem
            .content-content
                width 100%
                font-size .6rem
                letter-spacing .05rem
            .content-bottom
                float right
</style>
