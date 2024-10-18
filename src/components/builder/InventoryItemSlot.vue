<template>
    <v-card
      :max-height="height"
      :min-height="height"
      :max-width="width"
      :mix-width="width"
      color="blue accent-1"
    >
        <v-row
          justify="center"
        >
            <v-col align="center">
                <v-icon>{{ icon }}</v-icon>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        name: "InventoryItemSlot",
        props: {
            width: {
                type: String,
                default: "0"
            },
            height: {
                type: String,
                default: "0"
            },
            icon: {
                type: String,
                default: "mdi-help-circle"
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>