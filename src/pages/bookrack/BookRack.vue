<template>
    <div>
        <bookrack-header></bookrack-header>
        <base-nav></base-nav>
    </div>
</template>

<script>
import BaseNav from '../baseNav/BaseNav'
import BookrackHeader from './components/BookRackHeader'
export default {
    name: 'BookRack',
    components: {
        BaseNav,
        BookrackHeader
    }
}
</script>

<style lang="stylus" scoped>
</style>
