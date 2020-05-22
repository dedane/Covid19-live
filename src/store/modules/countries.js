import axios from 'axios'

const state={
    countryStat: null,
    loaded: false,
}

const getters={
    countryStat: state => state.countryStat,
    loaded: state => state.loaded,
}
const mutations={
    setCountryStat(state, payload){
        state.countryStat = payload
    },
}
const actions={
    getCountryStat(vuexContext){
        axios({
            "method":"GET",
            "url": "https://covid-193.p.rapidapi.com/statistics",
            "query"({
                "country":"KENYA"
            })
            "headers":{
                "x-rapidapi-host":"covid-193.p.rapidapi.com",
                "x-rapidapi-key":"108791afbdmshde20c2a12045146p114b76jsnf965acd10bd9",
                "useQueryString": true
            },"params":{
                "country": "KENYA"
            }
        })
        .then(response => {
            vuexcontext.commit('setCountryStat',response.data.latest_stat_by_country[0])
        })
    }
    removeStat(vuexContext){
        vuexContext.state.countryStat = null
    }
}

export default{
    namespaced: true,
    state, getters, mutations, actions
}