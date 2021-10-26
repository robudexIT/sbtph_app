<template>
  <div>
    <the-header></the-header>
    <the-navigation></the-navigation>
     <router-view ></router-view>
     <play-ground></play-ground>
    
  </div>
</template>

<script>

import TheHeader from './components/layout/TheHeader.vue'
import TheNavigation from './components/layout/TheNavigation.vue'
//import PlayGround from './components/PlayGround.vue'
export default {
    components: {
      TheHeader,
      TheNavigation,
     // PlayGround
    },
    methods: {
    },
    created(){
     
    },
    mounted(){
      
    }
    
}
</script>

<style >
html,
body {
  overflow-x: hidden; /* Prevent scroll on narrow devices */
}

body {
  padding-top: 56px;
}


</style>