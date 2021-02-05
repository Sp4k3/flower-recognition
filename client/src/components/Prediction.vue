<template>
  <div>
    <div v-if="preview">
      <h1>{{ prediction }}</h1>
      <ul
        v-for="score in scores"
        :key="score[0]"
      >
        <li>{{ score[0] }} : {{ score[1] }}</li>
      </ul>
      <img
        :src="preview"
        alt="Image preview"
      >
    </div>
    <div class="file">
      <form
        enctype="multipart/form-data"
        @submit.prevent="sendImage"
      >
        <div class="fields">
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
      formData.append('file', tempBuffer.value)
      try {
        await store.dispatch('getPrediction', formData)
        message.value = 'Uploaded!!'
      } catch (err) {
        console.log(err)
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

img {
  max-width: 300px;
  max-height: 300px;
  margin: 10px;
}

button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}

button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

</style>
