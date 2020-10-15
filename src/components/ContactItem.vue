<template>
    <li>
        <div class="container border rounded">
            <div class="row pl-4">
                <div class="col-md-10 py-1">
                    <div class="text-left">
                        <h4>{{ contact.name.firstname }} {{ contact.name.secondname }}</h4>
                        <div class="ml-2">
                            <ul class="ml-3 my-2 list-group list-group-flush">
                                <div class="row">
                                    <div class="col-md-2 px-0">
                                        <strong><i>Numbers: </i></strong>
                                    </div>
                                    <div class="col-md-10 px-0">
                                        <Item
                                            v-for="item of contact.contactNumber"
                                            :key="item"
                                            v-bind:item="item"
                                        />
                                    </div>
                                </div>
                            </ul>
                            <ul class="ml-3 my-2 mb-0 list-inline">
                                <div class="row">
                                    <div class="col-md-2 px-0">
                                        <strong><i>Email: </i></strong>
                                    </div>
                                    <div class="col-md-10 px-0">
                                        <Item
                                            v-for="item of contact.emailAddres"
                                            :key="item"
                                            v-bind:item="item"
                                        />
                                    </div>
                                </div>
                            </ul>
                            <ul class="ml-3 my-2 mb-0 list-inline">
                                <div class="row">
                                    <div class="col-md-2 px-0">
                                        <strong><i>Addres: </i></strong>
                                    </div>
                                    <div class="col-md-10 px-0">
                                        <Item
                                            v-for="item of contact.addres"
                                            :key="item"
                                            v-bind:item="item"
                                        />
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 px-0 d-flex align-items-center justify-content-center">
                    <div>
                        <router-link class="btn btn-secondary btn-circle btn-sm mx-2" :to="{ name: 'Contact', params: { index } }" title="Edit">
                            <font-awesome-icon icon="user-edit" size="xs"/>
                        </router-link>
                        <button v-on:click="$emit('remove-contact', contact.id)" class="btn btn-danger btn-circle btn-sm mx-2">
                            <font-awesome-icon icon="trash-alt" size="xs"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
import Item from '@/components/Item'
export default {
    props: {
        contact: {
            name: Object,
            required: true
        },
        index: Number
    },
    components: {
        Item
    }
}
</script>