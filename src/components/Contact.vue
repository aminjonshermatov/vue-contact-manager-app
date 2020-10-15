<template>
    <div class="py-5">
        {{index}}
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-md-9">
                    <div class="card">
                        <div class="card-header mb-1">
                            <strong>{{header}}</strong>
                        </div>

                        <!-- <p v-if="isNew">111</p>
                        <p v-else>222</p> -->
                        <div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group row">
                                            <label for="name" class="col-md-3 col-form-label">Name</label>
                                            <div class="col-md-5">
                                                <input type="text" name="name" v-model="contact[0].name.firstname" id="name" class="form-control">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="surName" class="col-md-3 col-form-label">Surname</label>
                                            <div class="col-md-5">
                                                <input type="text" name="surName" v-model="contact[0].name.secondname" id="surName" class="form-control">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="phone" class="col-md-3 col-form-label">Phone</label>
                                            <div class="col-md-7">
                                                <addNumberInput
                                                    v-for="(number, i) of contact[0].contactNumber"
                                                    :key="number"
                                                    v-bind:number="number"
                                                    v-model="contact[0].contactNumber[i]"
                                                />
                                            </div>
                                            <div class="col-md-2 px-0 d-flex justify-content-center align-items-center">
                                                <button v-on:click="addArea('contactNumber')" class="btn btn-danger btn-circle btn-sm" style="margin-top: auto; margin-bottom: .3rem;">
                                                    <font-awesome-icon icon="plus" size="xs"/>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="email" class="col-md-3 col-form-label">Email</label>
                                            <div class="col-md-7">
                                                <addEmailInput
                                                    v-for="(email, i) of contact[0].emailAddres"
                                                    :key="email"
                                                    v-bind:email="email"
                                                    v-model="contact[0].emailAddres[i]"
                                                />
                                            </div>
                                            <div class="col-md-2 px-0 d-flex justify-content-center align-items-center">
                                                <button v-on:click="addArea('emailAddres')" class="btn btn-danger btn-circle btn-sm" style="margin-top: auto; margin-bottom: .3rem;">
                                                    <font-awesome-icon icon="plus" size="xs"/>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="name" class="col-md-3 col-form-label">Address</label>
                                            <div class="col-md-7">
                                                <addAddres
                                                    v-for="(addres, i) of contact[0].addres"
                                                    :key="addres"
                                                    v-bind:addres="addres"
                                                    v-model="contact[0].addres[i]"
                                                />
                                            </div>
                                            <div class="col-md-2 px-0 d-flex justify-content-center align-items-center">
                                                <button v-on:click="addArea('addres')" class="btn btn-danger btn-circle btn-sm" style="margin-top: auto; margin-bottom: .3rem;">
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
                                                <router-link @click="saveContact" class="btn btn-primary mx-2" to="/">Save</router-link>
                                                <router-link class="btn btn-outline-secondary mx-2" to="/">Cancel</router-link>
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
    import data from '../assets/database'
    export default {
        name: 'Contact',
        props: {
            index: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                contact: [
                    {
                        id: Date.now(),
                        name: {
                            firstname: "",
                            secondname: ""
                        },
                        contactNumber: [''],
                        emailAddres: [''],
                        addres: ['']
                    }
                ],
                header: '',
                isNew: false
            }
        },
        mounted() {
            if (this.index === -1 || this.index == undefined) {
                this.isNew = true
                this.contact = [
                    {
                        id: Date.now(),
                        name: {
                            firstname: "",
                            secondname: ""
                        },
                        contactNumber: [''],
                        emailAddres: [''],
                        addres: ['']
                    }
                ]
            } else {
                this.contact = [data[this.index]]
            }

            if (!this.isNew) {
                this.header = 'Edit contact'
            } else {
                this.header = 'Add contact'
            }
        },
        methods: {
            addArea(prop) {
                this.contact[0][prop].push("");
                console.log(this.contact);
            },
            saveContact() {
                console.log(this.contact);
                console.log(data);
                if (this.isNew) {
                    data.push(this.contact[0])
                } else {
                    data[this.index] = this.contact[0]
                }
            }
        },
        created() {
            console.log(this.index);
            this.saveContact()
        },
        components: {
            addNumberInput,
            addEmailInput,
            addAddres
        }
    }
</script>