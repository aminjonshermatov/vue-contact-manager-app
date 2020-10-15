<template>
    <div>
        <ul>
            <ContactItem
                v-for="(contact, i) of contacts"
                :key="contact.id"
                v-bind:contact="contact"
                v-bind:index="i"
                v-on:remove-contact="removeContact"
            />
        </ul>
    </div>
</template>

<script>
import ContactItem from '@/components/ContactItem'
export default {
    props: ['contacts'],
    components: {
        ContactItem
    },
    methods: {
        removeContact(id) {
            this.$emit('remove-contact', id)
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>