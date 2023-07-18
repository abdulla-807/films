import {
  defineStore
} from 'pinia'
export const useUsers = defineStore('users', {
  state: () => ({
    users: null
  }),
  getters: {},
  actions: {
async getUsers() {
  let response = await fetch('https://dummyjson.com/users');
  let answer = await response.json();
  this.users = answer.users
  console.log(answer);
}
  },
})