<template>
  <div class="text-center">
    <input v-model="length" type="number" placeholder="Enter length" class="input mt-4">
    <div class="grid align-center mt-4">
      <span class="mx-4">Choose color:</span>
      <input v-model="color" type="color" value="#000000">
    </div>
    <button @click="generateSquare" class="btn-main mt-4">Generate shape</button>
  </div>
</template>

<script>
export default {
  name: 'Square',
  data () {
    return {
      length: '',
      color: '#000000',
      svgNS: 'http://www.w3.org/2000/svg'
    }
  },
  methods: {
    generateSquare () {
      if (!this.length) {
        return alert('Please enter length')
      }
      const payload = {
        shape: 'square',
        length: parseInt(this.length, 10),
        color: this.color
      }
      this.$store.commit('addShape', payload)
      this.length = ''
      this.color = '#000000'
    }
  }
}
</script>
