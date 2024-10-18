<template>
    <v-container>
        <v-row justify="center" no-gutters class="ma-0">
            <v-spacer></v-spacer>
            <v-col
              v-for="(cellGroup, idx) in mutatedCells()"
              :key="idx"
              align="center"
            >
                <InventoryCell
                    v-for="cell in cellGroup"
                    :key="cell.id"
                    height="50"
                    width="50"
                    :posX="cell.posX"
                    :posY="cell.posY"
                    :reserved="cell.inUse"
                    :color="getCellColor(cell.inUse)"
                    :charmSize="cell.charmSize"
                    :charmUUID="cell.charmUUID"
                    :charmStats="cell.charmStats"
                    :image="cell.cellImage"
                    :charmName="cell.charmName"
                />
            </v-col>
            <v-spacer></v-spacer>
        </v-row>

    </v-container>
</template>

<script>
import InventoryCell from './InventoryCell.vue'
import { mutateCellsArray } from '../../util'

export default {
    name: "CharmInventory",
    components: {
        InventoryCell,
    },
    data() {
        return {

        }
    },
    props: {
        height: {
            type: Number,
            default: 4
        },
        inventoryCells: {
            type: Array,
            default: () => []
        },
        width: {
            type: Number,
            default: 10
        }
    },
    methods: {
        getCellColor(inUse) {
            if (inUse) {
                return "white"
            } else {
                return "grey darken-3"
            }
        },
        mutatedCells() {
            var arr = mutateCellsArray(this.inventoryCells, this.width, this.height)
            return arr
        }
    },
        
}
</script>

<style>

</style>