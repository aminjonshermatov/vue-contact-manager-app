<template>
    <input type="text" ref="email" name="email" v-bind:email="email" v-on:input="updateValue($event.target.value)" id="email" class="form-control">
</template>

<script>
export default {
    props: ['email'],
    methods: {
        updateValue: function (value) {
            this.$emit('input', value);
            this.$refs.email.focus();
        }
    }
}
</script>