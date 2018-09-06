import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        bookList:[{
            "id": "0001",
            "imgUrl": "http://book.img.ireader.com/idc_1/m_1,w_200,h_266/b5edefa7/group6/M00/7C/DC/CmQUOFjdHnmESQlRAAAAAHj-nu0697793353.jpg?v=8Bp1KMkj"
        }]
    },
    actions: {
        changeBook (ctx, book) {
            ctx.commit('changeBook',book)
        }
    },
    mutations: {
        changeBook (state,book) {
            state.bookList.push(book)
            console.log(state.bookList)
            
        }
    }
})