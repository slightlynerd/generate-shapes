<template>
  <div>
    <input v-model="radii" type="number" placeholder="Enter radius" class="input mt-4">
    <div class="grid mt-4">
      Choose color:
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
      const payload = {
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
.red {
  background-color: #f44336;
}
.blue {
  background-color: #2196f3;
}
.green {
  background-color: #4caf50;
}
.yellow {
  background-color: #ffeb3b;
}
.orange {
  background-color: #ff9800;
}
.brown {
  background-color: #795548;
}
</style>
