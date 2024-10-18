<template>
    <v-container
        align="center"
    >
        <v-row 
            align="center"
            justify="center"
        >
            <v-col>
            </v-col>
            <v-col>
                <v-row
                    class="mb-4 mt-4"
                >
                    <v-card
                        dark
                        width="800"
                    >
                        <v-card-title
                            style="font-family: 'DiabloLight', Helvetica"
                            class="justify-center"
                        >
                            {{ item.item_data.name }}
                        </v-card-title>
                        <v-card-subtitle
                            style="font-family: 'DiabloLight', Helvetica"
                            class="ma-0 pa-0"
                            v-if="itemType == 'runewords'"
                        >
                            Runes: {{ formatRunes(item.item_data.runes) }}
                        </v-card-subtitle>
                        <v-card-subtitle
                            style="font-family: 'DiabloLight', Helvetica"
                            class="ma-0 pa-0"
                        >
                            Required Level: {{ item.item_data.lvl_req }}
                        </v-card-subtitle>
                        <v-card-subtitle
                            style="font-family: 'DiabloLight', Helvetica"
                            class="ma-0 pa-0"
                        >
                            Required Strength: {{ item.item_data.str_req }}
                        </v-card-subtitle>
                        <v-card-subtitle
                            style="font-family: 'DiabloLight', Helvetica"
                            class="mb-5 pa-0"
                        >
                            Required Dexterity: {{ item.item_data.dex_req }}
                        </v-card-subtitle>
                        <p
                            style="font-family: 'DiabloLight', Helvetica"
                            v-for="stat in item.item_data.stats"
                            :key="stat.name"
                            class="ma-0"
                        >
                            {{ stat }}
                        </p>
                    </v-card>
                </v-row>
                <v-row>
                    <v-btn
                        block
                        rounded
                        color="#5865f2"
                        size="x-large"
                        href="https://www.patreon.com/ProjectDiablo2"
                        target="_blank"
                        append-icon="mdi-open-in-new"
                        text
                        outlined
                    >
                        Support Project Diablo 2!
                        <template v-slot:append>
                            <v-icon color="white"></v-icon>
                        </template>
                    </v-btn>
                </v-row>
            </v-col>
            <v-col></v-col>
        </v-row>

    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    components: { 
    },
    name: "ItemView",
    data() {
        return {
            item: {}
        }
    },
    props: {
        itemType: {
            type: String,
            default: "uniques"
        },
        itemName: {
            type: String,
            default: ""
        }
    },
    methods: {
        formatString(str) {
            return str.replace('t', 'T');
        },
        formatRunes(runes) {
            var runeStr = ""
            runes.forEach(rune => {
                runeStr += rune.split(" ")[0] + " + "
            });
            return runeStr.substring(0, runeStr.length - 3);
        },
        getItemType(typ) {
            if (typ == "uniques") return "uniqueitems"
            else if (typ == "runewords") return "runeworditems"
            else return "setitems"
        }
    },
    created() {
        const fetchData = async () => {
            const { data: item } = await axios.get(
                `https://robopd2.com/api/${this.getItemType(this.itemType)}/${this.itemName}`
            );
            this.item = item
        }
        fetchData();
    }
}
</script>

<style>
    
</style>