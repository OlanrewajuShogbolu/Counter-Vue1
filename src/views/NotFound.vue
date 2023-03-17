<template>
  <div>
    <h1>Error 404, Page Not Found</h1>
    <p>Click on either of the links below to take you to a valid url</p>
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/counter" class="link">Counter</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>
