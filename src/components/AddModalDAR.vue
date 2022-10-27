<template>
    <div class="modal fade" id="addDar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div id="addDar" class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        Add
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="claim-number" class="col-form-label">Claim Number:</label>
                            <input type="text" class="form-control" id="claim-number" placeholder="client Number"
                                v-model="clientNumber" />
                        </div>
                        <div class="mb-3">
                            <label for="client-name" class="col-form-label">Client name:</label>
                            <input type="text" class="form-control" id="client-name" placeholder="client Name"
                                v-model="clientName" />
                        </div>
                        <div class="mb-3">
                            <label for="date" class="col-form-label">Date:</label>
                            <input type="text" class="form-control" id="date" placeholder="yyyy-mm-dd" v-model="date" />
                        </div>
                        <div class="mb-3">
                            <label for="report-number" class="col-form-label">Report Number:</label>
                            <input type="text" class="form-control" id="report-number"
                                placeholder="Example: DAR/ddmm(00)th Quote of the Month/Year" v-model="reportNumber" />
                        </div>
                        <div class="mb-3">
                            <label for="damage-type" class="col-form-label">Damage Type:</label>
                            <v-select :dt="dt" label="Outlined style" outlined></v-select>

                        </div>
                        <div class="mb-3">
                            <label for="facility" class="col-form-label">Facility:</label>
                            <input type="text" class="form-control" id="facility" placeholder="Facility"
                                v-model="uID" />
                        </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Cancel
                    </button>
                    <button type="button" class="btn btn-primary" @click="add" data-bs-dismiss="modal">
                        ADD
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['lead'],
    data() {
        return {
            entryType: "",
            leadName: "",
            leadEmail: "",
            leadNumber: "",
            leadNote: "",
            uID: ""
        };
        dt: ['Foo', 'Bar', 'Fizz', 'Buzz']
    },
    methods: {
        add() {
            let payload = {
                entryType: this.entryType,
                leadName: this.leadName,
                leadEmail: this.leadEmail,
                leadNumber: this.leadNumber,
                leadNote: this.leadNote,
                uID: this.uID
            }
            this.$store.dispatch("createLead", payload);
        }
    }
}
</script>

<style scoped>

</style>