<template>
    <div>
        <ul class="pl-0 mb-0" id="sampleInput">
            <ContactItem
                v-for="(contact, i) of allContact"
                :key="contact.id"
                v-bind:contact="contact"
                v-bind:index="i"
            />
        </ul>
    </div>
</template>

<script>
import ContactItem from '@/components/ContactItem'
import {mapGetters} from 'vuex'
export default {
    computed: mapGetters(['allContact']),
    components: {ContactItem}
}
</script>