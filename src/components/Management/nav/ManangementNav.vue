<template>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Management
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><router-link class="dropdown-item" to="/management/manage/csd">CSD AGENTS</router-link></li>
     <li><router-link class="dropdown-item" to="/management/manage/csd">COLLECTION AGENTS</router-link></li>
      <li><router-link class="dropdown-item" to="/management/manage/csd">SALES AGENTS</router-link></li>
    <li><router-link class="dropdown-item" to="/management/tags">TAGS</router-link></li>
    <li><router-link class="dropdown-item" to="/management/metrics">METRICS</router-link></li>
  </ul>
</div>

</template>