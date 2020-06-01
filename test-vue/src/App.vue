<template>
  <div id="app">
        <Header></Header>
        
        <router-view/>
        <Order></Order>
        <Footer></Footer>
  </div>
</template>

<script>
    
import Header from './components/Header.vue';    
import Footer from './components/Footer.vue'; 
import Order from './components/Order.vue';    
    
export default {
  name: 'app',
    
  components : { Header, Footer, Order,},
    
  
}
</script>

<style lang="scss">

/*        @import './assets/css/reset.min.css'; */
        @import './assets/css/main.css';
        

    
</style>
