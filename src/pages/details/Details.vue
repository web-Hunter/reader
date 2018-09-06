<template>
    <div>
        <details-header :detailslist="detailsList" :di="di"></details-header>
        <details-content :detailslist="detailsList" :di="di"></details-content>
        <evaluate :commentlist="commentList" :di="di"></evaluate>
        <details-nav :detailsnavlist="detailsnavList" :di="di"></details-nav>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
import DetailsHeader from './components/DetailsHeader'
import DetailsContent from './components/DetailsContent'
import Evaluate from './components/Evaluate'
import DetailsNav from './components/DetailsNav'
import axios from 'axios'
export default {
    name: 'Details',
    data () {
        return {
            di:0,
            detailsList: [],
            commentList: [],
            detailsnavList: []

        }
    },
    components: {
        DetailsHeader,
        DetailsContent,
        Evaluate,
        DetailsNav
    },
    methods: {
        getDetailInfo () {
            axios.get('/api/details.json')
            .then(this.getDetailInfoSucc)
        },
        getDetailInfoSucc (res) {
            res = res.data
            if(res.ret){
                this.detailsList = res.detailsList
                this.commentList = res.commentList
                this.detailsnavList = res.detailsnavList
            }            
        }
    },
    created () {
        this.di = this.$route.query.id
    },
    mounted () {
        this.getDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>

</style>
