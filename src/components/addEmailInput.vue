<template>
    <input type="text" ref="email" name="email" v-bind:email="email" v-on:blur="updateValue($event.target.value)" class="form-control">
</template>

<script>
export default {
    props: ['email'],
    methods: {
        updateValue: function (value) {
            this.$emit('input', value);
        }
    }
}
</script>