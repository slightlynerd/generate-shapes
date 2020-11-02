<template>
  <div>
    <section class="header">
      <h2 class="text-white">SVG Shape Generator</h2>
      <p class="text-white">Select a shape, color and dimensions to generate a shape</p>
    </section>
    <div class="shape-controls grid grid-col align-center items-center">
      <select v-model="shape" class="input">
        <option value="" disabled>Select a shape</option>
        <option value="circle">Circle</option>
        <option value="square">Square</option>
        <option value="rectangle">Rectangle</option>
      </select>
      <div v-if="shape === 'circle'">
        <CircleShape />
      </div>
      <div v-if="shape === 'rectangle'">
        <RectangleShape />
      </div>
      <div v-if="shape === 'square'">
        <SquareShape />
      </div>
    </div>
    <div class="mt-8">
      <transition-group name="bounce" tag="div" class="grid">
        <div v-for="item in shapes" :key="item.id" :item.sync="item" class="mx-4" style="animation-duration: 1.5s">
          <svg v-if="item.shape === 'circle'" :height="item.radii * 3" :width="item.radii * 3">
            <circle :cx="item.radii * 1.2" :cy="item.radii * 1.2" :r="item.radii" :style="{ fill: item.color }" />
          </svg>
          <svg v-if="item.shape === 'square'" :height="item.length" :width="item.length">
            <rect :width="item.length" :height="item.length" :style="{ fill: item.color }" />
          </svg>
          <svg v-if="item.shape === 'rectangle'" :height="item.breadth" :width="item.length">
            <rect v-if="item.shape === 'rectangle'" :width="item.length" :height="item.breadth" :style="{ fill: item.color }" />
          </svg>
        </div>
      </transition-group>
      <div id="bottom" class="mt-4 mx-4">
        <button v-if="shapes.length" @click="resetShapes" class="btn-main">Reset Shapes</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RectangleShape from './components/RectangleShape.vue'
import CircleShape from './components/CircleShape.vue'
import SquareShape from './components/SquareShape.vue'

export default {
  name: 'App',
  components: {
    CircleShape,
    RectangleShape,
    SquareShape
  },
  data () {
    return {
      shape: ''
    }
  },
  computed: {
    ...mapGetters(['shapes'])
  },
  watch: {
    shapes (val) {
      this.$scrollTo('#bottom')
      this.shape = ''
    }
  },
  methods: {
    resetShapes () {
      this.$store.commit('resetShapes')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
