<template>

    <v-app id="inspire">
        <v-main>
            <div class="containers main-container">
                <v-tabs>
                    <v-tab class="tab_1">Buyer</v-tab>
                    <v-tab class="tab_2">Sellers</v-tab>
                    <v-tab class="tab_3">Rentals</v-tab>
                    <v-tab class="tab_4">Letting</v-tab>
                </v-tabs>
                
                <v-menu offset-y elevation="0">
                    <template v-slot:activator="{ on, attrs }">
                        <v-toolbar dense class="toolbar dots">
                            <v-btn icon color="black" dark v-bind="attrs" v-on="on">
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </v-toolbar>
                    </template>
                    <v-list class="icons">

                        <v-row justify="center">
                            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn v-bind="attrs" v-on="on" class="magnify" fab>
                                        <v-icon>
                                            mdi-magnify
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-toolbar dark color="primary">
                                        <v-btn icon dark @click="dialog = false">
                                            <v-icon>mdi-close</v-icon>
                                        </v-btn>
                                        <v-toolbar-title>CRM Search</v-toolbar-title>
                                        <v-spacer></v-spacer>
                                        <v-toolbar-items>
                                            <v-btn dark text @click="dialog = false">
                                                Save
                                            </v-btn>
                                        </v-toolbar-items>
                                    </v-toolbar>
                                    <v-list three-line subheader>
                                        <v-toolbar dense floating>
                                            <v-text-field hide-details prepend-icon="mdi-magnify" single-line clearable>
                                            </v-text-field>

                                        </v-toolbar>
                                    </v-list>
                                </v-card>
                            </v-dialog>
                        </v-row>
                        <v-row justify="center">
                            <v-dialog v-model="edit" persistent max-width="600px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn fab v-bind="attrs" v-on="on" class="plus">
                                        <v-icon>
                                            mdi-plus
                                        </v-icon>
                                    </v-btn>
                                </template>
                                
                                <v-card>
                                    <v-card-title>
                                        <span class="text-h5">User Profile</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field label="Legal first name*" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field label="Legal middle name"
                                                        hint="example of helper text only on focus"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field label="Legal last name*"
                                                        hint="example of persistent helper text" persistent-hint
                                                        required></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field label="Email*" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field label="Password*" type="password" required>
                                                    </v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*"
                                                        required></v-select>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-autocomplete
                                                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                                        label="Interests" multiple></v-autocomplete>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                        <small>*indicates required field</small>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="edit = false">
                                            Close
                                        </v-btn>
                                        <v-btn color="blue darken-1" text @click="edit = false">
                                            Save
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-row>
                    </v-list>
                </v-menu>
                <v-data-table v-model="selected" :headers="headers" :items="desserts" :single-select="singleSelect"
                    item-key="name" show-select class="elevation-1">
                    <template v-slot:top class="sort">
                        <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
                    </template>
                </v-data-table>

            </div>
        </v-main>
    </v-app>
</template>
<script>
export default {
    data: () => ({
        edit: false,
        dialog: false,
        singleSelect: false,
        selected: [],
        headers: [
            {
                text: 'Dessert (100g serving)',
                align: 'start',
                sortable: false,
                value: 'name',
            },
            { text: 'Calories', value: 'calories' },
            { text: 'Fat (g)', value: 'fat' },
            { text: 'Carbs (g)', value: 'carbs' },
            { text: 'Protein (g)', value: 'protein' },
            { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
            {
                name: 'Frozen Yogurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: '1%',
            },
            {
                name: 'Ice cream sandwich',
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                iron: '1%',
            },
            {
                name: 'Eclair',
                calories: 262,
                fat: 16.0,
                carbs: 23,
                protein: 6.0,
                iron: '7%',
            },
            {
                name: 'Cupcake',
                calories: 305,
                fat: 3.7,
                carbs: 67,
                protein: 4.3,
                iron: '8%',
            },
            {
                name: 'Gingerbread',
                calories: 356,
                fat: 16.0,
                carbs: 49,
                protein: 3.9,
                iron: '16%',
            },
            {
                name: 'Jelly bean',
                calories: 375,
                fat: 0.0,
                carbs: 94,
                protein: 0.0,
                iron: '0%',
            },
            {
                name: 'Lollipop',
                calories: 392,
                fat: 0.2,
                carbs: 98,
                protein: 0,
                iron: '2%',
            },
            {
                name: 'Honeycomb',
                calories: 408,
                fat: 3.2,
                carbs: 87,
                protein: 6.5,
                iron: '45%',
            },
            {
                name: 'Donut',
                calories: 452,
                fat: 25.0,
                carbs: 51,
                protein: 4.9,
                iron: '22%',
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: '6%',
            },
        ]


    }),
    methods:{

    }
    ]
}
</script>
<style>
/* *{
    overflow-x:hidden;
} */
.v-slide-group {
    display: flex !important;
    flex-direction: row-reverse !important;

}

.v-main {
    padding: 29px 0px 0px !important;
}

.v-tab {
    font-size: 12px !important;
    padding: 0 16px !important;
    border: 1px solid !important;
    border-top-left-radius: 50px !important;
    border-right: 0px !important;
    width: 2px !important;
    position: relative;

}

.tab_2 {
    right: 10%;
    background-color: white;
    box-shadow: 0px 0px 5px black;
}

.tab_3 {
    right: 20%;
    background-color: white;
    box-shadow: 0px 0px 5px black;
}

.tab_4 {
    right: 30%;
    background-color: white;
    box-shadow: 0px 0px 5px black;
}

.v-slide-group__content {
    width: 0px !important;
}

.containers {
    display: flex;
    justify-content: space-between;
}

.toolbar {
    width: 50px;
}

.circle {
    border-radius: 50% !important;
}

.v-list {
    left: 150px !important;
    top: 110px !important;
    max-width: 200px !important;
    background-color: transparent !important;
    box-shadow: none !important;
    height: 150px !important;
}

.v-btn {
    box-shadow: none !important;
    width: 50px !important;
    height: 50px !important;

}
main-container

.plus {
    position: absolute;
    margin-top: 10%;
    width: 50px !important;
    height: 50px !important;
}

.magnify {

    margin-top: 30%;
    width: 50px !important;
    height: 50px !important;
}

.v-sheet.dots {
    position: absolute;
    border-radius: 5px !important;
    left: 83%;
    bottom: 93.2%;
    box-shadow: 0px 0px 2px !important;
    border-bottom: 1px solid;
    width: 55px !important;
}

.v-sheet {
    width: 100% !important;
}

.v-text-field__slot {
    width: 100% !important;

}

.v-toolbar__content {
    width: 100% !important;
}

.v-data-table {
    position: absolute;
    top: 8%;
}

.v-menu__content .theme--light .menuable__content__active {
    left: 80px !important;
    top: 250px !important;
}
</style>