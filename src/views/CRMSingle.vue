<template>
    <v-card>
        <table class="table">
            <tr>
                <th class="table__heading">lid</th>
                <th class="table__heading">Entry Type</th>
                <th class="table__heading">Lead Name</th>

            </tr>
            <tr class="table__row" v-for="lead in leads" :key="lead.lid">
                <td class="table__content" data-heading="lid">
                    {{ lead.lid }}
                </td>
                <td class="table__content" data-heading="Entry Type">{{ lead.entryType }}</td>
                <td class="table__content" data-heading="Lead Name">
                    {{ lead.leadName }}
                </td>


            </tr>
        </table>
        <BottomNav />
    </v-card>
</template>

<script>
import BottomNav from "../components/BottomNav.vue"
export default {
    components: {
        BottomNav
    },

    mounted() {
        return this.$store.dispatch("getLeads");
        // this.$store.dispatch("getSellers");
    },
    computed: {
        leads() {
            return this.$store.state.leads;
        }
    },
}
</script>



<style scoped>
td,
th {
    padding: 8px;
    padding: 0.5rem;
}

th {
    text-align: left;
    font-weight: 300;
    font-size: 20px;
    font-size: 1.25rem;
}

td {
    font-family: "Avenir Next", "Segoe UI", "Lucida Grande", sans-serif;
}

.table {
    width: 100%;
    padding: 16px;
    padding: 1rem;
}

.table__heading {
    border-bottom: 2px solid #ffb23edf;
}

@media (max-width: 32rem) {
    .table__heading {
        display: none;
    }

    .table__content {
        display: block;
        padding: 0.5rem 0;
    }

    .table__row {
        margin: 0.25rem 1rem;
        padding: 0.5rem 0;
        display: block;
        border-bottom: 2px solid orange;
    }

    .table__content:before {
        content: attr(data-heading);
        display: inline-block;
        width: 5rem;
        margin-right: 1.2rem;
        color: #999;
        font-size: 0.75rem;
        font-weight: 700;
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
}

h1,
h4 {
    margin: 50px auto 50px auto;
    text-align: center;
}
</style>