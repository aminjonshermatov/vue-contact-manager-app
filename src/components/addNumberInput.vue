<template>
    <input type="text" ref="phone" name="phone" v-bind:number="number" v-on:input="updateValue($event.target.value)" id="phone" class="form-control">
</template>

<script>
export default {
    props: ['number'],
    methods: {
        updateValue: function (value) {
            this.$emit('input', value);
            this.$refs.phone.focus();
        }
    }
}
</script>