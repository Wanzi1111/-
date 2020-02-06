<template>
  <div id="app">
    <transition :name="animate">
    <router-view class="Router"/>
    </transition>
  </div>
</template>
<script>
export default {
     data(){
        return {
            animate:""
        }
    },
    watch:{
      $route(to,from){
        console.log(this.animate)
        console.log(this)
        if(to.meta.index>from.meta.index){
          this.animate="slide-left";
        }else{
          this.animate="slide-right";
        }

      }
    }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
html,body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.Router{
  position: absolute;
  left: 0;
  right: 0;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active{
  will-change: transform;
  transition:all 500ms;
  position: absolute;
}
.slide-right-enter{
  opacity: 0;
  transform:translate3d(-100%,0,0)
}
.slide-right-leave-active{
  opacity: 0;
  transform:translate3d(100%,0,0)
}
.slide-left-enter{
  opacity: 0;
  transform:translate3d(100%,0,0)
}
.slide-left-leave-active{
  opacity: 0;
  transform:translate3d(-100%,0,0)
}
</style>
