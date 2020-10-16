<template>
    <input type="text" ref="phone" name="phone" v-bind:number="number" v-on:blur="updateValue($event.target.value)" class="form-control">
</template>

<script>
export default {
    props: ['number'],
    methods: {
        updateValue: function (value) {
            this.$emit('input', value);            
        }
    }
}
</script>