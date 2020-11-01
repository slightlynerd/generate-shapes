<template>
  <div>
    <input v-model="length" type="number" placeholder="Enter length" class="input mt-4">
    <input v-model="breadth" type="number" placeholder="Enter breath" class="input mt-4">
    <div class="grid mt-4">
      Choose color:
      <input v-model="color" type="color" value="#000000">
    </div>
    <button @click="generateRect" class="btn-main mt-4">Generate shape</button>
  </div>
</template>

<script>
export default {
  name: 'Rectangle',
  data () {
    return {
      length: '',
      breadth: '',
      color: '#000000',
      svgNS: 'http://www.w3.org/2000/svg'
    }
  },
  methods: {
    generateRect () {
      const payload = {
        shape: 'rectangle',
        length: parseInt(this.length, 10),
        breadth: this.breadth,
        color: this.color
      }
      this.$store.commit('addShape', payload)
      this.length = ''
      this.breadth = ''
      this.color = '#000000'
    }
  }
}
</script>
