import axios from 'axios'

const state={
    cases: [],
    loaded: false
}
const getters={
    cases: state => state.cases,
    loaded: state => state.loaded
}
const mutations={
    setCases(state, payload){
        state.cases = payload
    }
}
const actions={
    getKenyaCases(vuexcontext){
        axios({
            "method":"GET",
            "url": "https://covid-193.p.rapidapi.com/statistics",
            "headers":{
                "x-rapidapi-host":"covid-193.p.rapidapi.com",
                "x-rapidapi-key":"108791afbdmshde20c2a12045146p114b76jsnf965acd10bd9",
                "useQueryString": true
            },"params":{
                "country":"kenya"
            }
        })
        .then(response => {
            vuexcontext.commit('setCases',response.data.latest_stat_by_country[0])
            vuexcontext.state.loaded = true
        })
    }
}
export default{
    namespaced: true,
    state, getters, mutations, actions
}