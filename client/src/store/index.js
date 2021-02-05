import { createStore } from 'vuex'

import predictionData from './predictionData.js'

const store = createStore({
  modules: {
    predictionData,
  },
})

export default store
