const state = () => ({
    gearData: {
        amulet: { name: "", stats: [], icon: "mdi-necklace", image: "", inUse: false },
        belt: { name: "", stats: [], icon: "mdi-seatbelt", image: "", inUse: false }, 
        boots: { name: "", stats: [], icon: "mdi-shoe-sneaker", image: "", inUse: false },
        chest: { name: "", stats: [], icon: "mdi-cards-heart", image: "", inUse: false },
        gloves: { name: "", stats: [], icon: "mdi-hand-back-left", image: "", inUse: false },
        helmet: { name: "", stats: [], icon: "mdi-diving-helmet", image: "", inUse: false },
        leftRing: { name: "", stats: [], icon: "mdi-ring", image: "", inUse: false },
        rightRing: { name: "", stats: [], icon: "mdi-ring", image: "", inUse: false },
        shield: { name: "", stats: [], icon: "mdi-shield-crown", image: "", inUse: false },
        weapon: { name: "", stats: [], icon: "mdi-sword", image: "", inUse: false }
    }
})

const getters = {
    getGearData: (state) => (slot) => {
        return state.gearData[slot]
    }
}

const actions = {

}

const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}