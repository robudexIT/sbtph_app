<template>
  <div class="nav-scroller bg-body shadow-sm">
    <nav class="nav nav-underline" aria-label="Secondary navigation">
        <router-link class="nav-link mx-0 px-2" to="/sbtph_app/management/manage/csd">CSD AGENTS</router-link>
        <router-link class="nav-link mx-0 px-2" to="/sbtph_app/management/manage/collection">COLLECTION AGENTS</router-link>
        <router-link class="nav-link mx-0 px-2" to="/sbtph_app/management/manage/sales">SALES AGENTS</router-link>
        <router-link class="nav-link mx-0 px-2" to="/sbtph_app/management/tags">TAGS</router-link>
        <router-link class="nav-link mx-0 px-2" to="/sbtph_app/management/metrics">METRICS</router-link>
    </nav>
  </div>

</template>

<style scoped>
.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
  margin-top: 5px;
}

.nav-underline .nav-link:hover  {
  color: white;
  background-color:grey;
   border-radius:20px;
}

.nav-link {
  color: grey;
  font-size: 15px;
  /* transition: background-color 2s, height 2s, width 2s; */
}
a.router-link-active {
     background-color: #007bff;
     border-radius:25px;
     color: white;
     font-weight: bold;
}
</style>