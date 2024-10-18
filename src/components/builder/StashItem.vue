<template>
    <v-card
        fill-width
        fill-height
        fluid
        max-height="50"
        outlined
    >
        <v-row align="end" justify="center" no-gutters>
            <v-col align-self="center">
                <v-img
                  height="50"
                  width="50"
                  :src="image"
                  contain
                ></v-img>
            </v-col>
            <v-col>
                <p>{{ itemName }}</p>
            </v-col>
            <v-col align-self="center">
                <v-btn
                  color="success"
                  fab
                  x-small
                  dark
                  text
                  elevation="0"
                  @click="addItem"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import { mapMutations } from 'vuex'
import { uuid } from 'vue-uuid'

export default {
    name: "StashItem",
    props: {
        itemId: {
            type: String,
            default: ""
        },
        itemName: {
            type: String,
            default: ""
        },

        image: {
            type: String,
            default: ""
        },
        metadata: {
            type: Object,
            default: () => {}
        },
        stats: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        ...mapMutations('charmInventory', [
            'ADD_CHARM',
            'REMOVE_CHARM',
            'SET_ITEM_UUID'
        ]),
        addItem() {
            var charmUUID = uuid.v4()
            if (this.metadata.itemType == "charm") {
                this.ADD_CHARM({
                    name: this.itemName,
                    charmSize: this.metadata.charmSize,
                    charmImage: this.image,
                    charmUUID: charmUUID,
                    charmStats: this.stats,
                    charmName: this.itemName
                })
            }
        }
    },
}
</script>

<style lang="scss" scoped>

</style>