<template>
    <div>
        <find-header></find-header>
        <router-view></router-view>
        <base-nav></base-nav>
    </div>
</template>

<script>
import FindHeader from './components/FindHeader'
import BaseNav from '../baseNav/BaseNav'
export default {
    name: 'Find',
    components: {
        BaseNav,
        FindHeader
    }
}
</script>

<style lang="stylus" scoped>

</style>
