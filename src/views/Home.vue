<template>
    <div class="py-5">
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-md-9">
                    <div class="card">
                        <div class="card-header mb-1">
                            <strong>All Contacts</strong>
                        </div>

                        <ContactList
                            v-if="contacts.length"
                            v-bind:contacts="contacts"
                            @remove-contact="removeContact"
                        />
                        <p
                            v-else>Contactlist is empty!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ContactList from '@/components/ContactList'
    import data from '../assets/database'
    export default {
        data() {
            return {
                contacts: []
            }
        },
        components: {
            ContactList
        },
        mounted() {
            this.contacts = data
        },
        methods: {
            removeContact(id) {
                this.contacts = this.contacts.filter(el => el.id !== id)
            }
        }
    }
</script>