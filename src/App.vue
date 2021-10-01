<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Time Pass</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/url" class="nav-link">Urls</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>