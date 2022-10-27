<template>
    <div>
        <table class="table">
            <tr>
                <th class="table__heading">lid</th>
                <th class="table__heading">Entry Type</th>
                <th class="table__heading">Lead Name</th>
                <th class="table__heading">Lead Email</th>
                <th class="table__heading">Lead Number</th>
                <th class="table__heading">Lead Note</th>
                <th class="table__heading">Created By</th>
                <th class="table__heading">Updated By</th>
                <th class="table__heading">uid</th>
            </tr>
            <tr class="table__row" v-for="lead in lead" :key="lead.lid">
                <td class="table__content" data-heading="lid">
                    {{ lead.lid }}
                </td>
                <td class="table__content" data-heading="Entry Type">{{ lead.entryType }}</td>
                <td class="table__content" data-heading="Lead Name">
                    {{ lead.leadName }}
                </td>
                <td class="table__content" data-heading="Lead Email">
                    {{ lead.leadEmail }}
                </td>
                <td class="table__content" id="image" data-heading="Lead Number">
                    {{ lead.leadNumber }}
                </td>
                <td class="table__content" data-heading="Lead Note">
                    {{ lead.leadNote }}
                </td>
                <td class="table__content" data-heading="Created By">
                    {{ lead.CreatedBy }}
                </td>
                <td class="table__content" data-heading="Updated By">
                    {{ lead.UpdatedBy }}
                </td>
                <td class="table__content" data-heading="uid">
                    {{ lead.uID }}
                </td>
            </tr>
        </table>

        <div></div>
    </div>
</template>
  
<script>

export default {
    props: ['id'],

    // data() {
    //     return {
    //         items: [
    //             { title: 'buyers' },
    //             { title: 'sellers' },
    //             { title: 'renting' },
    //             { title: 'maintenance' },
    //         ],
    //     }
    // },

    mounted() {
        console.log(this.$store.state.leadead)
        return this.$store.dispatch("getLead", this.id);
        // this.$store.dispatch("getSellers");
    },
    computed: {
        lead() {
            return this.$store.state.lead;
        },
    },

    methods: {
        deletes(id) {
            this.$store.dispatch("deleteLead", id);
        },
    },
}
</script>

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