<template>
    <v-app-bar dark fixed flat>
      <v-app-bar-nav-icon @click="TOGGLE_DRAWER">
        <v-icon v-if="getDrawerStatus">mdi-arrow-left</v-icon>
        <v-icon v-else>mdi-arrow-right</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>RoboPD2</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {}
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
