<template>
    <div class="remaining">{{ remaining }} remaining</div>
</template>

<script>
export default {
    name: 'TodoRemaining',
    computed: {
        remaining() {
            return this.$store.getters.remaining
        }
    }
}
</script>

<style>

</style>
