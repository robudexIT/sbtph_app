<template>
    <h1>The Management  Menu</h1>
    <router-view></router-view>
    <management-nav></management-nav>
</template>


<script>
import ManagementNav from './nav/ManangementNav.vue'
export default {
    components: {
        ManagementNav
    }
}
</script>