<template>
    <v-card>
        <v-toolbar
          color="black"
          dark
          dense
        >
          <v-toolbar-title>Character Inventory</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
            icon
          >
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-toolbar>
        
        <v-divider></v-divider>

        <v-card-text style="height: 750px;">
            <v-row justify="end">
                <v-col align="center" align-self="center">
                    <InventoryItemSlot
                        width="100"
                        height="250"
                        :icon="getGearData('weapon').icon"
                        :src="getGearData('weapon').image"
                        class="mt-2 mb-5"
                        style="margin-left: 120px;"
                    ></InventoryItemSlot>
                    <InventoryItemSlot
                        width="100"
                        height="100"
                        :icon="getGearData('gloves').icon"
                        :src="getGearData('gloves').image"
                        class="mt-2 mb-5"
                        style="margin-left: 120px;"
                    ></InventoryItemSlot>
                </v-col>
                <v-col align="center" align-self="center">
                    <v-row justify="center">
                        <v-spacer></v-spacer>
                        <v-col cols="6">
                            <InventoryItemSlot
                                width="100"
                                height="100"
                                :icon="getGearData('helmet').icon"
                                :src="getGearData('helmet').image"
                                class="mt-2 mb-2"
                            ></InventoryItemSlot>
                        </v-col>
                        <v-col align-self="end" cols="3">
                            <InventoryItemSlot
                                width="50"
                                height="50"
                                :icon="getGearData('amulet').icon"
                                :src="getGearData('amulet').image"
                                class="mt-2 mb-5"
                            ></InventoryItemSlot>
                        </v-col>
                    </v-row>
                    <InventoryItemSlot
                        width="100"
                        height="250"
                        :icon="getGearData('chest').icon"
                        :src="getGearData('chest').image"
                        class="mb-5"
                    ></InventoryItemSlot>
                    <v-row>
                        <v-col cols="3">
                            <InventoryItemSlot
                                width="50"
                                height="50"
                                :icon="getGearData('leftRing').icon"
                                :src="getGearData('leftRing').image"
                                class="mb-5"
                            ></InventoryItemSlot>
                        </v-col>
                        <v-col cols="6">
                            <InventoryItemSlot
                                width="100"
                                height="50"
                                :icon="getGearData('belt').icon"
                                :src="getGearData('belt').image"
                                class="mb-5"
                            ></InventoryItemSlot>
                        </v-col>
                        <v-col cols="3">
                            <InventoryItemSlot
                                width="50"
                                height="50"
                                :icon="getGearData('rightRing').icon"
                                :src="getGearData('rightRing').image"
                                class="mb-5"
                            ></InventoryItemSlot>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col align-self="center">
                    <InventoryItemSlot
                        width="100"
                        height="250"
                        :icon="getGearData('shield').icon"
                        :src="getGearData('shield').image"
                        class="mt-2 mb-5"
                    ></InventoryItemSlot>
                    <InventoryItemSlot
                        width="100"
                        height="100"
                        :icon="getGearData('boots').icon"
                        :src="getGearData('boots').image"
                        class="mb-5"
                    ></InventoryItemSlot>
                </v-col>
            </v-row>
            <v-row>
                <CharmInventory 
                  :inventoryCells="getAllInventoryCells"
                  :height="charmInventoryHeight"
                  :width="charmInventoryWidth"
                />
            </v-row>
                
        </v-card-text>
    </v-card>
</template>

<script>
import CharmInventory from './CharmInventory.vue'
import InventoryItemSlot from './InventoryItemSlot.vue'

import { mapGetters } from 'vuex'

export default {
    name: "Inventory",
    components: {
        CharmInventory,
        InventoryItemSlot
    },
    computed: {
        ...mapGetters('gearInventory', [
            'getGearData'
        ]),
        ...mapGetters('charmInventory', [
            'getAllInventoryCells'
        ])
    },
    data() {
        return {
            charmInventoryWidth: 10,
            charmInventoryHeight: 4
        }
    }

}
</script>

<style>
</style>