<template>
  <div>
    <section class="header">
      <h2>SVG Shapes Generator</h2>
      <p>Select a shape, color and dimensions to generate a shape</p>
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
    <div class="grid mt-8">
      <div v-for="(item, index) in shapes" :key="index" class="mx-4">
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
      <!-- <svg height="250" width="450">
        <polygon points="225,10 50,150 350,210" style="fill:rgba(0,0,0,0);stroke:#609AAF;stroke-width:10" />
      </svg> -->
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
      this.shape = ''
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
