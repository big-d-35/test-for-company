<template>
    
    <header class="header">
       <div class="header__block">
           <a href="#" class="header__logo" >loremipsum<span class="mark">.NET</span></a>
            <nav class="header__links">
              <router-link to='/'
               class='header__link'
               active-class='header__link-active'
               exact
               >Бизнес</router-link>

                <router-link to='/about'
               class='header__link'
               active-class='header__link-active'
               exact
               >О нас</router-link>
                
                <router-link to='/price'
               class='header__link'
               active-class='header__link-active'
               exact
               >Цены</router-link>

                <a class='header__link' href="#" target="_blank">Оформить заказ</a>
            </nav>
       </div>
        
    </header>
    
</template>


<script>



export default {
    
    
}
    
</script>


<style lang="scss">


</style>