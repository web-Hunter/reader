<template>
    <div>
        <bookrack-header></bookrack-header>
        <book-racks></book-racks>
        <base-nav></base-nav>
    </div>
</template>

<script>
import BaseNav from '../baseNav/BaseNav'
import BookrackHeader from './components/BookRackHeader'
import BookRacks from './components/BookRacks'
export default {
    name: 'BookRack',
    components: {
        BaseNav,
        BookrackHeader,
        BookRacks
    }
}
</script>

<style lang="stylus" scoped>
</style>
