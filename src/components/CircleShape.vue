<template>
  <div class="text-center">
    <input v-model="radii" type="number" placeholder="Enter radius" class="input mx-4 mt-4">
    <div class="grid align-center mt-4 mx-4">
      <span class="mx-4">Choose color:</span>
      <input v-model="color" type="color" value="#000000">
    </div>
    <button @click="generateCircle" class="btn-main mt-4">Generate shape</button>
  </div>
</template>

<script>
export default {
  name: 'CircleShape',
  data () {
    return {
      radii: null,
      color: '#000000',
      svgNS: 'http://www.w3.org/2000/svg'
    }
  },
  methods: {
    generateCircle () {
      if (!this.radii) {
        return alert('Please enter radius')
      }
      const payload = {
        id: Date.now(),
        shape: 'circle',
        radii: parseInt(this.radii, 10),
        color: this.color
      }
      this.$store.commit('addShape', payload)
      this.radii = ''
      this.color = '#000000'
    }
  }
}
</script>

<style lang="scss" scoped>
.color-picker {
  width: 24px;
  height: 24px;
  margin: 0 5px;
}
</style>
