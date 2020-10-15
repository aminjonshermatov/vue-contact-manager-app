<template>
    <div class="py-5">
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-md-9">
                    <div class="card">
                        <div class="card-header mb-1 text-center">
                            <strong>
                                All Contacts
                                <span class=" mx-1 badge badge-pill badge-dark">{{allContact.length}}</span>
                            </strong>
                        </div>
                        <input v-if="allContact.length" class="form-control col-md-8 mx-auto mb-1" id="myInput"
                            type="text" placeholder="Search..">
                        <ContactList v-if="allContact.length" />
                        <p class="text-center" v-else>Contactlist is empty!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import ContactList from '@/components/ContactList'
import {mapGetters, mapMutations} from 'vuex'

export default {
    computed: mapGetters(['allContact']),
    data() {
        return {
            contactList: []
        }
    },
    methods: {
        ...mapMutations(['deleteContact']),
        removeContact(id) {
            this.deleteContact(id);
        }
    },
    mounted() {
        this.contactList = this.allContact;
        $(document).ready(function () {
            $("#myInput").on("keyup", function () {
                const value = $(this).val().toLowerCase();
                const regex = new RegExp(value, 'i');
                $("#sampleInput #liSearch").filter(function () {
                    $(this).toggle(
                        $(this).text().split(":")[0].toLocaleLowerCase().includes(value)
                    )
                });
                
            });
        });
    },
    components: {
        ContactList
    },
}
</script>