<template>
    <v-card>
        <div id="box">
            <button type="button" data-bs-toggle="modal" data-bs-target="#add">
                ADD <i class="fa-solid fa-plus"></i>
            </button>
            <AddModal />

        </div>
        <table class="table">
            <thead>
                <tr>
                    <th class="table__heading">lid</th>
                    <th class="table__heading">Entry Type</th>
                    <th class="table__heading">Lead Name</th>
                    <th class="table__heading">Edit or Delete</th>

                </tr>
            </thead>
            <tbody v-for="lead in leads" :key="lead.lid">
                <tr class="table__row">
                    <router-link :to="{ name: 'SingleCRM', params: { id: lead.lid } }">
                        <td class="table__content" data-heading="lid">
                            {{ lead.lid }}
                        </td>
                        <td class="table__content" data-heading="Entry Type">{{ lead.entryType }}</td>
                        <td class="table__content" data-heading="Lead Name">
                            {{ lead.leadName }}
                        </td>
                    </router-link>
                    <td class="table__content" data-heading="">
                        <i class="fa-solid fa-trash-can" @click="deletes(lead.lid)"></i>
                        <i class="fa-solid fa-pen-to-square" type="button" data-bs-toggle="modal"
                            :data-bs-target="'#update' + lead.lid"></i>
                    </td>
                    <EditModal :lead="lead" />
                </tr>
            </tbody>
        </table>
        <BottomNav />
    </v-card>
</template>

<script>
import BottomNav from "../components/BottomNav.vue"
import EditModal from "../components/EditModal.vue";
import AddModal from "../components/AddModal.vue";


export default {
    props: ['lead'],
    components: {
        BottomNav,
        EditModal,
        AddModal
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

i.fa-solid.fa-trash-can {
    padding-right: 10px;
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

h4 {
    margin: 50px auto 50px auto;
    text-align: center;
}
</style>