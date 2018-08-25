<template>
<div>
    <home-header></home-header>
    <home-nav></home-nav>
</div>
    
</template>

<script>
import HomeHeader from './components/Header'
import HomeNav from './components/Nav'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeNav
    }
}
</script>

<style>

</style>
