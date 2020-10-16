<template>
    <input type="text" name="address" ref="address"  v-bind:addres="addres" v-on:blur="updateValue($event.target.value)" class="form-control">
</template>

<script>
export default {
    props: ['addres'],
    methods: {
        updateValue: function (value) {
            this.$emit('input', value);
        }
    }
}
</script>