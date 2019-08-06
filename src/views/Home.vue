<template>
  <div class="home">
    <router-view/>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import TabBar from '@/components/TabBar.vue'

export default {
  name: 'home',
  components: {
      TabBar
  }
}
</script>

<style>
.home{
  width: 100%;
  height: 100%;
}
</style>