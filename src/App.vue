<template>
  <h1> {{ message }} </h1>
  <HelloWorld /> 
  <!-- [vue/no-multiple-template-root] ...eslint 연결하면 오류가 사라진다고 함. -->

  <!-- normal: 'never' => <div></div> 는 ok. <div />는 not ok. -->
</template>

<script>
import HelloWorld from '~/components/HelloWorld.vue' // ~사용하려면 webpack에 resolve에 세팅 필요.
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      message: "Hello World!!!"
    }
  }
}</script>