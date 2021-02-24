
import {GET_HEROS} from './mutatin-types'
export default {
  [GET_HEROS] (state,heros) {
    state.person = heros.person,
    state.age = heros.age,
    state.name = heros.name
  }
}