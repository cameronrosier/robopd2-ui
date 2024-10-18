<template>
    <v-card
      dark
    >
        <v-card-title
          style="font-family: 'DiabloLight', Helvetica"
        >
          {{ itemName() }}
        </v-card-title>
        <v-card-subtitle
          style="font-family: 'DiabloLight', Helvetica"
        >
          Required Level: {{ stats.lvl_req }}
        </v-card-subtitle>
        <p
          style="font-family: 'DiabloLight', Helvetica"
          v-for="(m, idx) in stats.modifiers"
          :key="idx"
          class="ma-0"
        >
            {{ formStatLine(m) }}
        </p>
    </v-card>
</template>

<script>
export default {
    name: "ItemStatsPopup",
    props: {
        name: {
            type: String,
            default: ""
        },
        stats: {
            type: Object,
            default: () => {}
        },
        rarity: {
            type: String,
            default: ""
        }
    },
    methods: {
        formStatLine(modifier) {
            var incrementSign = "+"
            var classRestriction = ""
            if (modifier.value < 0) {
                incrementSign = "-"
            }
            if (modifier.class_restriction != "") {
                classRestriction = `(${modifier.class_restriction} Only)`
            }
            var statLine = `${incrementSign}${modifier.value} ${modifier.attribute} ${classRestriction}`
            return statLine
        },
        itemName() {
            if (this.rarity == "magic") {
                return `${this.stats.prefix} ${this.name} ${this.stats.suffix}`
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>