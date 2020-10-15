<template>
    <div class="py-5">
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-md-9">
                    <div class="card">
                        <div class="card-header mb-1">
                            <strong>{{header}}</strong>
                        </div>

                        <div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group row">
                                            <label for="name" class="col-md-3 col-form-label">Name</label>
                                            <div class="col-md-5">
                                                <input type="text" name="name" required v-model="contact.name.firstname" id="name" class="form-control">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="surName" class="col-md-3 col-form-label">Surname</label>
                                            <div class="col-md-5">
                                                <input type="text" name="surName" required v-model="contact.name.secondname" id="surName" class="form-control">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="phone" class="col-md-3 col-form-label">Phone</label>
                                            <div class="col-md-7">
                                                <addNumberInput
                                                    v-for="(number, i) of contact.contactNumber"
                                                    :key="number"
                                                    v-bind:number="number"
                                                    v-model="contact.contactNumber[i]"
                                                />
                                            </div>
                                            <div class="col-md-2 px-0 d-flex justify-content-center align-items-center">
                                                <button v-on:click="addArea('contactNumber')" class="btn btn-danger my-2 btn-circle btn-sm" style="margin-top: auto; margin-bottom: .3rem;">
                                                    <font-awesome-icon icon="plus" size="xs"/>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="email" class="col-md-3 col-form-label">Email</label>
                                            <div class="col-md-7">
                                                <addEmailInput
                                                    v-for="(email, i) of contact.emailAddres"
                                                    :key="email"
                                                    v-bind:email="email"
                                                    v-model="contact.emailAddres[i]"
                                                />
                                            </div>
                                            <div class="col-md-2 px-0 d-flex justify-content-center align-items-center">
                                                <button v-on:click="addArea('emailAddres')" class="btn btn-danger my-2 btn-circle btn-sm" style="margin-top: auto; margin-bottom: .3rem;">
                                                    <font-awesome-icon icon="plus" size="xs"/>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="name" class="col-md-3 col-form-label">Address</label>
                                            <div class="col-md-7">
                                                <addAddres
                                                    v-for="(addres, i) of contact.addres"
                                                    :key="addres"
                                                    v-bind:addres="addres"
                                                    v-model="contact.addres[i]"
                                                />
                                            </div>
                                            <div class="col-md-2 px-0 d-flex justify-content-center align-items-center">
                                                <button v-on:click="addArea('addres')" class="btn btn-danger my-2 btn-circle btn-sm" style="margin-top: auto; margin-bottom: .3rem;">
                                                    <font-awesome-icon icon="plus" size="xs"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="row">
                                            <div class="col-md-offset-3 col-md-6">
                                                <router-link class="btn btn-primary m-2" @click.native="saveOrEditContact(contact)" to="/">Save</router-link>
                                                <router-link class="btn btn-outline-secondary m-2" to="/">Cancel</router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import addNumberInput from '@/components/addNumberInput'
    import addEmailInput from '@/components/addEmailInput'
    import addAddres from '@/components/addAddres'
    import {mapGetters, mapActions, mapMutations} from 'vuex'
    export default {
        computed: mapGetters(['getCurrent']),
        data() {
            return {
                contact: {
                    id: Date.now(),
                        name: {
                            firstname: "",
                            secondname: ""
                        },
                        contactNumber: [''],
                        emailAddres: [''],
                        addres: ['']
                },
                header: 'Edit contact!'
            }
        },
        name: 'Contact',
        props: {
            index: {
                type: Number
            }
        },

        methods: {
            ...mapMutations(['saveContact']),
            ...mapActions(['getById']),
            saveOrEditContact(item) {
                this.saveContact(item);
            },
            addArea(prop) {
                this.contact[prop].push("");
            },
        },
        mounted() {
            this.getById(this.index);
            if (this.index == -1) {
                this.header = 'Add contact!'
            } else {
                this.contact = this.getCurrent
                this.header = 'Edit contact!'
            }
        },
        components: {
            addNumberInput,
            addEmailInput,
            addAddres
        }
    }
</script>