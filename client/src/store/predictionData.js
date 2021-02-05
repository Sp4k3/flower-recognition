import api from '../api'

export default {
  state: () => ({
    prediction: '',
    scores: '',
  }),

  mutations: {
    getPrediction (state, predictionData) {
      // console.log(predictionData)
      state.prediction = predictionData.prediction
      state.scores = Object.keys(predictionData.scores).map((key) => [(key), predictionData.scores[key]])
    },

    trainModel (state) {
      console.log('Model trained')
      // state.prediction = predictionData.prediction
      // state.scores = predictionData.scores
    },
  },

  actions: {
    async getPrediction ({ commit, dispatch }, imageData) {
      let predictionData
      try {
        // predictionData = await api.getExample()
        predictionData = await api.getPrediction(imageData)
      } catch (error) {
        const errorMessage = `An error as occured : ${error.message}` // eslint-disable-line no-irregular-whitespace
        console.log(errorMessage)
        predictionData = ''
      }
      commit('getPrediction', predictionData)
    },

    async trainModel ({ commit, dispatch }) {
      try {
        await api.trainModel()
      } catch (error) {
        const errorMessage = `An error as occured : ${error.message}` // eslint-disable-line no-irregular-whitespace
        console.log(errorMessage)
      }
      commit('getPrediction')
    },
  },
}
