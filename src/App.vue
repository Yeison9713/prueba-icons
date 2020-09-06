<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <!-- <ion-icon name="arrow-back" color="primary"></ion-icon> -->
      <ion-icon md="home" color="primary"></ion-icon>
      <ion-icon md="home-sharp"></ion-icon>
      <ion-icon md="start" color="secondary"></ion-icon>
      <ion-icon md="trash" color="danger"></ion-icon>
      <ion-icon md="create"></ion-icon>
      <ion-icon md="add-circle"></ion-icon>
      <ion-icon md="log-out" color="primary"></ion-icon>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
