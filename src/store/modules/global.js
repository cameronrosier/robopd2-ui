const state = () => ({
    navDrawerOpen: false
})

const getters = {
    getDrawerStatus(state) {
        return state.navDrawerOpen
    }
}

const actions = {

}

const mutations = {
    TOGGLE_DRAWER(state) {
        state.navDrawerOpen = !state.navDrawerOpen
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}