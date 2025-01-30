import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: { 'API-KEY': "8173aa67-5dbd-4704-826f-8afb5bb6a033" },
  baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const userAPI = {

  getUsers(currentPage, pageSize = 10) {
    return (
      instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    )
  },

  postUser(id) {
    return (
      instance.post(`follow/${id}`)
      .then(response => response.data)
    )
  },

  deleteUser(id) {
    return (
      instance.delete(`follow/${id}`)
      .then(response => response.data)
    )
  }
}

export const authAPI = {
  getMe(){
    return (
    instance.get(`auth/me`)
    .then(response => response.data)
    )
  },

  postLogin() {
    return (
      instance.post('auth/login')
      .then(response => response.data)
    )
  },

}

export const profileAPI = {
  getProfile(userID) {
    return(
    instance.get(`profile/${userID}`).
    then(response=>response.data)
    )
  },

  getStatus(userID) {
    return(
    instance.get(`profile/status/${userID}`).
    then(response=>response.data)
    )
  },

  updateStatus(status) {
    return(
    instance.put(`profile/status/`, {status: status}) // Смотрим в документации, что должно приходить. В нашем случае объект {} со свойством status. 
    )
  }

}
