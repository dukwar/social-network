import axios from "axios";


const instance = axios.create({

    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "513ae67d-baab-4eaa-9416-974397f26e78"
    }
})


export let UsersAPI = {

    getUsers  (currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },

    follow (id) {
        return instance.post(`/follow/${id}`,)
            .then(response => response.data)
    },

    unfollow (id) {
        return instance.delete(`/follow/${id}`,)
            .then(response => response.data)
    },
}

export let HeadersApi = {
    authUser () {
        return instance.get(`auth/me`,)
            .then(response => response.data)
    }
}

export let ProfileApi = {
    setUser (userId) {
        return instance.get(`profile/${userId}`,)
            .then(response => response.data)
    }
}

