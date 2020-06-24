export default {
  // payload is a shorthand for {pet, species}
  addPet: (context, payload) => {
    context.commit('appendPet', payload)
  }
}
