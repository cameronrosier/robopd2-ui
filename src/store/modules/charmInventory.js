import { inventoryHeight, inventoryWidth } from "../../misc/planner"
import { findCharmSlot } from "../../util"

function generateCells() {
    var cells = []
    var idNum = 0
    for (var i = 0; i < inventoryHeight; i++) {
        for (var j = 0; j < inventoryWidth; j++) {
            cells.push({
                id: idNum,
                cellImage: "",
                posX: j,
                posY: i,
                inUse: false,
                charmSize: "1",
                charmUUID: "",
                charmName: ""
            })
            idNum += 1
        }
    }
    return cells
}

const state = () => ({
    cells: generateCells()
})

const getters = {
    getAllInventoryCells(state) {
        return state.cells
    },
    getCharmImage: (state) => (uuid) => {
        state.cells.forEach(cell => {
            if (cell.charmUUID == uuid) {
                return cell.cellImage
            }
        })
    }
}

const actions = {

}

const mutations = {
    ADD_CHARM(state, payload) {
        var availableCells = findCharmSlot(state.cells, inventoryWidth, inventoryHeight, payload.charmSize)
        availableCells.forEach(availableCell => {
            state.cells.forEach(cell => {
                if (cell.id == availableCell.id) {
                    cell.inUse = true
                    cell.charmUUID = payload.charmUUID
                }
            })
        })
        availableCells[0].cellImage = payload.charmImage
        availableCells[0].charmSize = payload.charmSize
        availableCells[0].charmName = payload.charmName
        availableCells[0].charmStats = payload.charmStats
    },
    REMOVE_CHARM(state, payload) {
        console.log(payload)
        state.cells.forEach(cell => {
            if (cell.charmUUID == payload.charmUUID) {
                cell.inUse = false
                cell.cellImage = ""
                cell.charmUUID = ""
            }
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}