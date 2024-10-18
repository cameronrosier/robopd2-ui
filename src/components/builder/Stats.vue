<template>
    <v-card>
        <v-toolbar
          color="black"
          dark
          dense
        >
          <v-toolbar-title>Stats</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-information</v-icon>
          </v-btn>
        </v-toolbar>

        <v-divider>   
        </v-divider>

        <v-card-text style="height: 750px"></v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Stats",
    }
</script>

<style lang="scss" scoped>

</style>