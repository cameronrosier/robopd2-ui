<template>
    <v-navigation-drawer
      absolute
      expand-on-hover    
      right
    >
        <!-- <v-list-item
            v-for="link in links"
            :key="link.label"
            :to="link.url"
            link
        >
            <v-list-item-icon>
                <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>{{ link.label }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item> -->
        <v-list-item class="px-2">
            <v-list-item-content>
                <v-list-item-title class="text-h6">
                    Character Selection
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
    </v-navigation-drawer>
</template>

<script>

export default {
    name: 'CharacterSelector',
    data() {
        return {
            characters: [],
        }
    },
    computed: {

    },
    methods: {

    }
    
}
</script>

<style>
    
</style>