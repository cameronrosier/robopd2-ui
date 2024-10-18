<template>
    <v-card
      max-height="800"
    >
        <v-toolbar
          color="black"
          dark
          dense
        >
          <v-toolbar-title>Stash</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-information</v-icon>
          </v-btn>
        </v-toolbar>

        <v-divider></v-divider>

        <v-autocomplete
          :items="items"
          item-text="itemName"
          outlined
          dense
          label="Item Search"
          class="mt-2 mb-2"
        >
        </v-autocomplete>
        
        <v-divider class="mb-5"></v-divider>

        <v-virtual-scroll
          :items="items"
          :item-height="50"
          height="750"
        >
          <template v-slot:default="{ item }">
            <StashItem 
              :itemId="item.id"
              :itemName="item.itemName"
              :itemType="item.itemType"
              :image="item.image"
              :metadata="item.metadata"
              :stats="item.stats"
              class="mt-1"
            />
          </template>
        </v-virtual-scroll>

    </v-card>
</template>

<script>
import StashItem from "./StashItem.vue"

export default {
    name: "Stash",
    data() {
      return {
        items: [
          {
            id: "0",
            itemName: "Grand Charm",
            image: "https://d2stock.com/wp-content/uploads/2022/02/grand_charm3.png",
            metadata: {
              itemType: "charm",
              charmSize: "3"
            },
            stats: {
              prefix: "Chilling",
              suffix: "of Sustenance",
              lvl_req: 42,
              modifiers: [
                {
                  attribute: "Cold Skills",
                  value: 1,
                  class_restriction: "Sorceress",
                  units: "number"
                },
                {
                  attribute: "Life",
                  value: 20,
                  class_restriction: "",
                  units: "number"

                }
              ]
            }
          },
          {
            id: "1",
            itemName: "Large Charm",
            image: "https://diablo2.wiki.fextralife.com/file/Diablo-2/charm_medium_2_diablo2_wiki_guide_98px.png",
            metadata: {
              itemType: "charm",
              charmSize: "2"
            },
            stats: {
              prefix: "Stout",
              suffix: "of Balance",
              lvl_req: 18,
              modifiers: [
                {
                  attribute: "Defense",
                  value: 12,
                  class_restriction: "",
                  units: "number"
                },
                {
                  attribute: "Faster Hit Recovery",
                  value: 8,
                  class_restriction: "",
                  units: "percent"
                }
              ]
            }
          },
          {
            id: "2",
            itemName: "Small Charm",
            image: "https://d2stock.com/wp-content/uploads/2022/02/small_charm3.png",
            metadata: {
              itemType: "charm",
              charmSize: "1"
            },
            stats: {
              prefix: "Shimmering",
              suffix: "of Vita",
              lvl_req: "18",
              modifiers: [
                {
                  attribute: "All Resistances",
                  value: 5,
                  class_restriction: "",
                  units: "number"
                },
                {
                  attribute: "Life",
                  value: 20,
                  class_restriction: "",
                  units: "number"
                }
              ]
            }
          },
        ]
      }
    },
    components: {
      StashItem
    }
}
</script>

<style lang="scss" scoped>

</style>