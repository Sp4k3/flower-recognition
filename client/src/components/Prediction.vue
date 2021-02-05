<template>
  <div>
    <h1>{{ prediction }}</h1>
    <h2>{{ scores }}</h2>
    <!-- <input
      id="imageToPredict"
      type="file"
      accept="image/png, image/jpeg"
    >
    <button @click="getMessage()">
      Say Hello
    </button> -->
    <img
      :src="preview"
      alt="Image preview"
    >
    <div class="file">
      <form
        enctype="multipart/form-data"
        @submit.prevent="sendImage"
      >
        <div class="fields">
          <label>Upload File</label><br>
          <input
            ref="file"
            type="file"
            @change="selectImage"
          >
        </div>
        <div class="fields">
          <button>Submit</button>
        </div>
        <div class="message">
          <h5>{{ message }}</h5>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()

    const message = ref('')
    const file = ref()
    const preview = ref()
    const tempBuffer = ref()

    const selectImage = (event) => {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']
      file.value = event.target.files[0]
      tempBuffer.value = file.value.slice()
      // console.log(file.value)
      // console.log(preview.value)
      if (!allowedTypes.includes(file.value.type)) {
        message.value = 'Filetype is wrong!!'
      }
      if (file.value.size > 500000) {
        message.value = 'Too large, max size allowed is 500kb'
      }
      if (file.value) {
        const reader = new FileReader()
        reader.onload = e => {
          preview.value = e.target.result
        }
        reader.readAsDataURL(file.value)
      }
    }

    const sendImage = async () => {
      const formData = new FormData()
      // console.log('send : ', tempBuffer.value)
      formData.append('file', tempBuffer.value)
      // console.log(formData)
      try {
        await store.dispatch('getPrediction', formData)
        message.value = 'Uploaded!!'
      } catch (err) {
        // console.log(err)
        message.value = err.response
      }
    }

    return {
      prediction: computed(() => store.state.predictionData.prediction),
      scores: computed(() => store.state.predictionData.scores),
      file,
      message,
      preview,
      tempBuffer,
      selectImage,
      sendImage,
    }
  },
  mounted () {
  },
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
