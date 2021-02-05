import { createStore } from 'vuex'

test('Increment mutation', () => {
  const store = createStore({
    state: () => ({
      prediction: '',
      scores: '',
    }),
    mutations: {
      getPrediction (state, predictionData) {
        state.prediction = predictionData.prediction
        state.scores = predictionData.scores
      },
    },
    actions: {
      getPrediction ({ commit }) {
        let predictionData
        try {
          predictionData = {
            prediction: 'dandelion(99%)',
            scores: { daisy: 0, dandelion: 0.9992, rose: 0, sunflower: 0.0008, tulip: 0 },
          }
        } catch (error) {
          const errorMessage = `An error as occured : ${error.message}` // eslint-disable-line no-irregular-whitespace
          console.log(errorMessage)
          predictionData = {}
        }
        commit('getPrediction', predictionData)
      },
    },
  })

  store.dispatch('getPrediction')
  expect(store.state.prediction).toBe('dandelion(99%)')
})
