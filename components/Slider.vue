<template>
  <!-- <div class="hero-slider">
    <div class="hero-component">
      <div class="wrapper dark sl-1">
        <img src="~/assets/images/hero-placeholder.png" class="placeholder" alt="">
        <div class="container">
          <div class="content ">
            <h1>With help from the Connect America Fund,  Frontier is closing the digital divide</h1>
          </div>
        </div>

      </div>
    </div>
    <div class="hero-component">
      <div class="wrapper dark sl-2">
        <img src="~/assets/images/hero-placeholder.png" class="placeholder" alt="">
        <div class="container">
          <div class="content ">
            <h1>Connect America Fund comes to Desert Hot Springs</h1>
            <h2><a href="#" target="_blank">Click Here</a></h2>
          </div>
        </div>

      </div>
    </div>
  </div> -->

  <slick ref="slick" >
    <div class="hero-component">
      <div class="wrapper dark sl-1">
        <img src="~/assets/images/hero-placeholder.png" class="placeholder" alt="">
        <div class="container">
          <div class="content ">
            <h1>With help from the Connect America Fund,  Frontier is closing the digital divide</h1>
          </div>
        </div>

      </div>
    </div>
    <div class="hero-component">
      <div class="wrapper dark sl-2">
        <img src="~/assets/images/hero-placeholder.png" class="placeholder" alt="">
        <div class="container">
          <div class="content ">
            <h1>Connect America Fund comes to Desert Hot Springs</h1>
            <h2><a href="#" target="_blank">Click Here</a></h2>
          </div>
        </div>

      </div>
    </div>
</slick>
</template>

<script>
import Slick from 'vue-slick'

console.log('hey oh')

export default {
  components: {
    Slick
  },
  data () {
    return {
      slickOptions: {
        dots: true,
        infinite: false,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 6000,
        arrows: false,
        fade: false,
        cssEase: 'linear',
        pauseOnHover: false
      }
    }
  },

  methods: {
    next () {
      this.$refs.slick.next()
    },

    prev () {
      this.$refs.slick.prev()
    },
    computed: {
      // a computed getter
      b: function () {
        // `this` points to the vm instance
        return this.a + 1
      }
    },

    reInit () {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
    }
  }
}
</script>
