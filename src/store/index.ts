import { defineStore } from 'pinia'

export const collpase=defineStore('collapseseStore',{
  state:()=> {
    return {
      collapse:false,
    }
  },
  getters: {
    getCollapse(state) {
      return state.collapse
    }
  },
  actions: {
    setCollapse(collapse:boolean){
      this.collapse = collapse;
    }
  }
})


