<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/csdinbound">CSD PHILIPPINES MONITORING</router-link>
    <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/inbound">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/inbound" >Notifications</router-link>
        </li>
     -->
       <li><button class="btn btn-primary">CALL</button></li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>