<template>
  <div>
    <button @click="trainModel">
      Train Model
    </button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()

    const trainModel = async () => {
      try {
        await store.dispatch('trainModel')
      } catch (err) {
        console.log(err)
      }
    }

    return {
      trainModel,
    }
  },
  mounted () {
  },
}
</script>

<style scoped>
</style>
