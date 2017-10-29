<template>
  <div id="app" @touchmove.prevent>
    <tab></tab>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Tab from './components/tab/tab'

  export default {
    name: 'app',
    components: {
      Tab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    padding-left: 50px
  
  .slide-enter
    transform: translate3d(0, 100%, 0)
  .slide-leave-to
    transform: translate3d(0, -100%, 0)
  .slide-enter-active, .slide-leave-active
    transition: .4s
</style>
