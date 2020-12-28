<template>
  
</template>

<script>
export default {
    name: 'index',
    data(){
        return{
        }
    },
    beforeCreate(){
        this.$router.push({name: 'stock'})
    }
}
</script>

<style>
</style>