<template>
    <div>
        <slide-show></slide-show>
        <header-icon></header-icon>
        <recommend></recommend>
        <cover></cover>
        <matter></matter>
    </div>
</template>

<script>
import SlideShow from './components/SlideShow'
import HeaderIcon from './components/HeaderIcon'
import Recommend from './components/Recommend'
import Cover from './components/Cover'
import Matter from './components/Matter'
export default {
    name: 'Sift',
    components:{
        SlideShow,
        HeaderIcon,
        Recommend,
        Cover,
        Matter
    }
}
</script>

<style lang="stylus" scoped>

</style>
