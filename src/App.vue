<template>
  <h2 @click="increase" >
    {{ count }}
  </h2>
  <img
    src="~assets/logo.png" 
    alt="HEROPY" />
  
</template>

<script>
export default {
  data() {
    return {      
      count: 0
    }
  },
  methods: {
    increase() {
      this.count += 2
    }
  }
}
</script>

<style>
h2{
  color: royalblue;
  font-size: 50px;
}
</style>