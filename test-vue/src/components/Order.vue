<template>
    <section class="order">
        <div class="order__titles">
            <h2 class="order__title">Оформление   <span class="mark">заказа</span></h2>
            <h3 class="order__subtitle">Перед заполнением формы ознакомьтесь с нашей схемой работы!</h3>
        </div>
        <div class="order__items">
            <div class="order__item">
                <div class="order__icons">
                    <i class="fas fa-search"></i>
                </div>
                <p class="order__name">Lorem ipsum dolor sit amet</p>
            </div>
            <span class="order__dods">·</span>
            <span class="order__dods">·</span>
            <span class="order__dods">·</span>
            <span class="order__dods">·</span>
            <span class="order__dods">·</span>
            <div class="order__item">
                <div class="order__icons">
                    <i class="fas fa-percent"></i>
                </div>
                <p class="order__name">Consectetur elit</p>
            </div>
            <span class="order__dods">·</span>
            <span class="order__dods">·</span>
            <span class="order__dods">·</span>
            <span class="order__dods">·</span>
            <span class="order__dods">·</span>
            <div class="order__item">
                <div class="order__icons">
                    <i class="far fa-file-excel"></i>
                </div>
                <p class="order__name">Placeat tempore exercitationem</p>
            </div>
            <span class="order__dods">·</span>
            <span class="order__dods">·</span>
            <span class="order__dods">·</span>
            <span class="order__dods">·</span>
            <span class="order__dods">·</span>
            <div class="order__item">
                <div class="order__icons">
                    <i class="far fa-envelope"></i>
                </div>
                <p class="order__name">Unde voluptatem harum omnis</p>
            </div>
            <span class="order__dods">·</span>
            <span class="order__dods">·</span>
            <span class="order__dods">·</span>
            <span class="order__dods">·</span>
            <span class="order__dods">·</span>
            <div class="order__item">
                <div class="order__icons">
                    <i class="far fa-money-bill-alt"></i>
                </div>
                <p class="order__name">Nisi voluptate dolores illo dolore </p>
            </div>
        </div>
        <div class="form">
            <form action="" name="form" class="form__block">
               <div class="form__line">
                   <select class="form__input" required name="" id="" >
                       <option  label="Выберите тип системы" ></option>
                        <option value="" label="Sed ud oersoecialtis"></option>
                        <option value="" label="Nemo enim ipsam"></option>
                        <option value="" label="El harum quidrem"></option>
                        <option value="" label="Temporibius autem"></option>
                        <option value="" label="Itaque earum renum"></option>
                    </select>
                    <input type="text" class="form__input" placeholder="Ваш email">
                    <input type="text" class="form__input" placeholder="Ваше имя">
               </div>   
                <div class="form__line">
                   <div class="form__range">
                      
                      <div class="form__labels">
                          <label class="form__label" for="volume">Sed ut perspiciatis, unde omnis iste natus</label><p class="form__label">{{sliderVal}} %</p>
                      </div>
                      <input v-model="sliderVal" @change="changeFoo" type="range" 
                             min="0" max="100"  step="5" class="form__range-line">
                    </div>
                    <button class="form__input form__input-button" type="button"><i class="far fa-file-alt"></i> Прикрепить файл</button>
                </div>
                <input class="form__input form__input-send" type="button" value="отправить" >
            </form>
        </div>
        
    </section>
    
    
</template>




<script>
    
export default {
    props: ['foo'],
        data: function() {
           return {
              sliderVal: "75"
           }
        },
        methods: {
            changeFoo() {
                this.$emit('changeFoo', this.sliderVal);
                
            }
        }
}

</script>




<sryle lang="scss">
    
    
    
</sryle>