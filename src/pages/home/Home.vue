<template>
<div>
    <home-header></home-header>
    <home-nav></home-nav>
    <base-nav></base-nav>
</div>
    
</template>

<script>
import HomeHeader from './components/Header'
import HomeNav from './components/Nav'
import BaseNav from '../baseNav/BaseNav'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeNav,
        BaseNav
    }
}
</script>

<style>

</style>
