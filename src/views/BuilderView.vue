<template>
    <v-container fill-width>
        <CharacterSelector />
        <v-row justify="center">
            <!-- Stats Sheet -->
            <v-col cols="3">
                <Stats />
            </v-col>
            <!-- Inventory Screen -->
            <v-col cols="6">
                <Inventory />
            </v-col>
            <!-- Stash -->
            <v-col cols="3">
                <Stash />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import CharacterSelector from '../components/builder/CharacterSelector.vue'
import Inventory from '../components/builder/Inventory.vue'
import Stash from '../components/builder/Stash.vue'
import Stats from '../components/builder/Stats.vue'

export default {
    name: "BuilderView",
    data() {
        return {
        }
    },
    components: {
        CharacterSelector,
        Inventory,
        Stash,
        Stats
    },
}
</script>

<style>
    
</style>