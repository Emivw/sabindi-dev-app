<template>
    <div>
        <h1>Gay People</h1>
        <!-- <table class="table">
      <tr>
        <th class="table__heading">Claim Number</th>
        <th class="table__heading">Entry Type</th>
        <th class="table__heading">Lead Name</th>
        <th class="table__heading">Lead Email</th>
        <th class="table__heading">Lead Number</th>
        <th class="table__heading">Lead Note</th>
        <th class="table__heading">Created By</th>
        <th class="table__heading">Updated By</th>
        <th class="table__heading">uid</th>
      </tr>
      <tr class="table__row" v-for="lead in leads" :key="lead.lid">
        <td class="table__content" data-heading="lid">
          {{ lead.lid }}
        </td>
        <td class="table__content" data-heading="Entry Type">{{ lead.entryType }}</td>
        <td class="table__content" data-heading="Lead Name">
          {{lead.leadName}}
        </td>
        <td class="table__content" data-heading="Lead Email">
          {{ lead.leadEmail }}
        </td>
        <td class="table__content" id="image" data-heading="Lead Number">
          {{ lead.leadNumber}}
        </td>
        <td class="table__content" data-heading="Lead Note">
          {{ lead.leadNote }}
        </td>
        <td class="table__content" data-heading="Created By">
          {{ lead.CreatedBy}}
        </td>
        <td class="table__content" data-heading="Updated By">
          {{ lead.UpdatedBy}}
        </td>
        <td class="table__content" data-heading="uid">
          {{ lead.uID}}
        </td>
        <td class="table__content icons" data-heading="">
          <i
            class="fa-solid fa-trash-can"
            @click="deletes(lead.lid)"
          ></i>
           <i
            class="fa-solid fa-pen-to-square"
            type="button"
            data-bs-toggle="modal"
            :data-bs-target="'#update' + lead.lid"
          ></i> 
        </td>
        <EditModal :lead="lead" /> 
      </tr>
    </table> -->
    </div>
</template>

<script>
// import { computed } from 'vue'
// import EditModal from "../components/EditModal.vue";
// import AddModal from "../components/AddModal.vue";

export default {
//     components: { EditModal, AddModal },
//     mouted() {
//         return this.$store.dispatch("getDars")
//     },
//     computed: {
//         dars() {
//             return this.$store.state.dars;
//         }
//     },
}
</script>

<style scoped>

</style>