import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: { 'API-KEY': "da515f31-569e-4173-8937-805f8fac0a39" },
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
  getAuth(){
    return (
    instance.get(`auth/me`)
    .then(response => response.data)
    )
  }
}

export const profileAPI = {
  getProfile(userID) {
    return(
    instance.get(`profile/${userID}`).then(response=>response.data)
    )
  }
}