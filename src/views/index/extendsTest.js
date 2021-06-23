
import Vue from 'vue'
// export const extendTest = Vue.extend({
//   template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
//   data: function () {
//     return {
//       firstName: 'Walter',
//       lastName: 'White',
//       alias: 'Heisenberg'
//     }
//   },
//   methods: {
//     hello() {
//       console.log("hello extends")
//     }
//   },
//   beforeCreate(){
//     console.log("extends的beforeCreated")
//   },
//   created() {
//     this.hello()
//   },
//   mounted() {
//     // let getDom = document.getElementById('mount-point')
//     // getDom.appendChild(extendTest.$el)
//   }
// })
export const extendTest = {
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  },
  methods: {
    hello() {
      console.log("hello extends")
    }
  },
  beforeCreate(){
    console.log("extends的beforeCreated")
  },
  created() {
    this.hello()
  },
  mounted() {
    // let getDom = document.getElementById('mount-point')
    // getDom.appendChild(extendTest.$el)
  }
}
