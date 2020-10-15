<template>
    <input type="text" name="address" ref="address"  v-bind:addres="addres" v-on:input="updateValue($event.target.value)" id="address" class="form-control">
</template>

<script>
export default {
    props: ['addres'],
    methods: {
        updateValue: function (value) {
            this.$emit('input', value);
            this.$refs.address.focus();
        }
    }
}
</script>