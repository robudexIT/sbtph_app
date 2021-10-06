<template>
   <div class="nav-scroller bg-body shadow-sm">
    <nav class="nav nav-underline" aria-label="Secondary navigation">
        <router-link class="nav-link mx-0 px-2" to="/phone/loggedin">ACTIVE</router-link>
        <router-link class="nav-link mx-0 px-2"  to="/phone/loggedout">INACTIVE</router-link>
        <router-link class="nav-link  mx-0 px-2" to="/callsummaries/csdinbound">CSD-INBOUND</router-link>
        <router-link class="nav-link mx-0 px-2"  to="/callsummaries/csdoutbound">CSD-OUTBOUND</router-link>
        <router-link class="nav-link mx-0 px-2"  to="/missedcalls">CSD-MISSED-CALLS </router-link>
        <router-link class="nav-link mx-0 px-2"  to="/parkedcalls">PARKED-CALLS </router-link>
        <router-link class="nav-link mx-0 px-2"  to="/voicemails">VOICE-MAILS </router-link> 
        <router-link class="nav-link mx-0 px-2"  to="/callsummaries/collection">COLLECTION-TEAM</router-link>
        <router-link class="nav-link mx-0 px-2"  to="/callsummaries/sales">SALES-TEAM</router-link> -->
         <router-link class="nav-link mx-0 px-2"  to="/management">MANAGEMENT</router-link>  -->
     
    </nav>

     
  </div>
 
</template>

<style  scoped>
.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  color: rgba(255, 255, 255, .75);
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.nav-underline .nav-link {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: .875rem;
  color: #6c757d;
}

.nav-underline .nav-link:hover {
  color: #007bff;
}

.nav-underline .active {
  font-weight: 500;
  color: #343a40;
}
</style>