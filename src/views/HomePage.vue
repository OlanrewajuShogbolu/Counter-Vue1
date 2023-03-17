<template>
  <div class="home-page">
    <h1 class="title">Welcome to the home page of this Vue App</h1>
    <router-link to="/counter" class="link">Counter</router-link>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
<style>
.home-page {
  background-color: #f5f5f5;
  padding: 20px;
}

.title {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.link {
  display: block;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

.link:hover {
  background-color: #3e8e41;
}
</style>
