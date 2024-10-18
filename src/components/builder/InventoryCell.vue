<template>
    <v-sheet
        :color="white"
        :height="height"
        :width="width"
        outlined
    >   
        <v-menu
            open-on-hover
            top
            offset-y
            tile
            v-if="image != ''"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-img
                    :src="image"
                    :height="height * charmSize"
                    v-bind="attrs"
                    v-on="on"
                ></v-img>
            </template>
            <ItemStatsPopup 
              :stats="charmStats"
              :name="charmName"
              rarity="magic"
            />
        </v-menu>
    </v-sheet>
</template>

<script>
import ItemStatsPopup from './ItemStatsPopup.vue'

import { mapMutations } from 'vuex'

export default {
    name: "InventoryCell",
    components: {
        ItemStatsPopup
    },
    computed: {

    },
    data() {
        return {
            showTooltip: true
        }
    },
    props: {
        color: {
            type: String,
            default: "grey darken-3"
        },
        charmSize: {
            type: String,
            default: "1"
        },
        image: {
            type: String,
            default: ""
        },
        posX: {
            type: Number,
            default: 0
        },
        posY: {
            type: Number,
            default: 0
        },
        width: {
            type: String,
            default: "10"
        },
        height: {
            type: String,
            default: "10"
        },
        charmUUID: {
            type: String,
            default: ""
        },
        charmStats: {
            type: Object,
            default: () => {}
        },
        charmName: {
            type: String,
            default: ""
        }
    },
    methods: {
        ...mapMutations('charmInventory', [
            'REMOVE_CHARM'
        ]),
        getMaxHeight() {
            return parseInt(this.height) * parseInt(this.charmSize) 
        },
        removeCharm() {
            this.REMOVE_CHARM({ charmUUID: this.charmUUID })
        },
    }
}

</script>

<style scoped>

</style>