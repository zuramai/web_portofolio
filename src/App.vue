<template>
  <div id="app">
    <!-- Three columns -->
    <div class="roww">
      <div class="w-full  md:w-5/12 left-wrapper h-screen flex align-items-center justify-center" 
        :style="{backgroundImage: 'url('+require('@/assets/images/bg2.jpg')+')'}">
        <section class='left flex justify-center flex-col align-items-center '>
          <div class="profile-image-wrapper rounded-full border border-white">
            <img src="@/assets/images/ogi.png" alt="" class='profile-image '>
          </div>
            <h3 class='user-name my-2'>Ahmad Saugi</h3>
            <p class='skill'>Fullstack Web Developer</p>
            <div class="sosmed">
              <i data-feather="circle"></i>
            </div>
        </section>
      </div>
      <div class="w-full  md:w-7/12 right h-screen  md:overflow-auto">
        <Navbar/>
        <transition
         name="fade"
         mode="out-in"
       >
         <router-view/>
       </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name: 'app',
  components: {
    Navbar
  },
  data() {
    return {
      prevHeight: 0,
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
.roww {
  display: flex
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.user-name {
  font-family: 'Raleway';
  font-size: 24px;
}
.left {
  font-family: 'Moon'
}

.skill {
  color: #555;
  font-size: 14px;
}

.left-wrapper { 
  background-size: cover;
}

.right {
  background: #eee;  /* fallback for old browsers */
  min-height: 100vh;
}

.profile-image-wrapper {
  margin: 0 auto;
  width: 80px;
  height: 80px;
  overflow:hidden;
}

.profile-image{
  transform: scale(1.1);
}

@media screen and (max-width: 768px) {
  .roww {
    display: block;
  }
  #wrapper {
    padding: 5rem 2rem 0 2rem !important;
  }
  .right {
    height: 100% !important;
    padding-bottom: 40px;
  }
  .left-wrapper {
    height: 90vh !important;
  }
}
</style>
