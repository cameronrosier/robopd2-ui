<template>
    <v-navigation-drawer
      :value="getDrawerStatus"
      absolute
      temporary
      
    >
        <v-list-item
            v-for="link in links"
            :key="link.label"
            :to="link.url"
            @click="TOGGLE_DRAWER"
            link
        >
            <v-list-item-icon>
                <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>{{ link.label }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-navigation-drawer>
</template>

<script>
import { navDrawerLinks } from '../../misc/navdrawer'
import { mapGetters, mapMutations } from 'vuex'

export default {
    name: 'NavDrawer',
    data() {
        return {
            links: navDrawerLinks
        }
    },
    computed: {
        ...mapGetters('global', [
            'getDrawerStatus'
        ])
    },
    methods: {
        ...mapMutations('global', [
            'TOGGLE_DRAWER'
        ])
    }
    
}
</script>

<style>
    
</style>