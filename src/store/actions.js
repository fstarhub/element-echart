
import { reqHeros } from '../api'
import { GET_HEROS } from './mutatin-types'
export default {
  getHeros ({commit}) {
  console.log('haha')
  // const heros = await reqHeros()
  const heros={
    name:'漫威',
    age:18,
    person:'美国队长',
  }
  console.log(heros)
  commit(GET_HEROS,heros)
  }
}