<template>
    <li class="list-group-item list-group-item-light p-0 pl-1 ml-2">
        {{item}}
    </li>
</template>

<script>

export default {
    props: {
        item: {
            name: Object,
            required: true
        },
    }
}
</script>