<template>
    <v-container class="grey lighten-5">
    <v-row>
    <v-col  v-for="tile in tiles" :key="tile.title">
      <v-card
    class="mx-auto"
    max-width="344"
  >      <v-btn value="recent">
      <v-icon>{{tile.icon}}</v-icon>
    </v-btn>
    <v-card-text>

      <p class="text-h4 text--primary">
       {{tile.title}}
      </p>
      <div class="text--primary">
{{tile.text}}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-3"
        :to="tile.to"
      >
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-col>

    </v-row>
  <BottomNav/>
  </v-container>
</template>

<script>
  import BottomNav from '../components/BottomNav'

  export default {
    name: 'Home',
    data: () => ({ 
      drawer: null,
      tiles: [
      {
        title: 'CRM',
        icon: ' mdi-account',
        text: 'Customer Relational Manager',
        category: [
          'admin'
        ],
        to: '/crm'
      },
      {
        title: 'SRM',
        icon: 'mdi-account-tie',
        text: 'Supplier Relational Manager',
        category: [
          'admin'
        ],
        to: '/srm'
      },
      {
        title: 'WO',
        icon: 'mdi-briefcase',
        text: 'Works Orders',
        category: [
          "admin"
        ],
        to: '/wo'
      },
      {
        title: 'Quotes',
        icon: 'mdi-format-quote-close ',
        text: 'Quote Generations System',
        category: [
          "admin"
        ],
        to: '/quotes'
      },
      {
        title: 'PO',
        icon: 'mdi-cart-arrow-down',
        text: 'Purchase Order',
        category: [
          "admin"
        ],
        to: '/po'
      },
      {
        title: 'Reports',
        icon: 'mdi-chart-box',
        text: '',
        category: [
          "admin"
        ],
        to: '/reports'
      },
      {
        title: 'Materials',
        icon: 'mdi-factory',
        text: '',
        category: [
          "admin"
        ],
        to: '/materials'
      },
      {
        title: 'Inventory',
        icon: 'mdi-store-edit-outline ',
        text: '',
        category: [
          "admin"
        ],
        to: '/inventory'
      },
      {
        title: 'Costs',
        icon: 'mdi-cash-multiple ',
        text: '',
        category: [
          "admin"
        ],
        to: '/costs'
      }
    ],
    }),
    components: {
      BottomNav,
    },
  }
</script>
