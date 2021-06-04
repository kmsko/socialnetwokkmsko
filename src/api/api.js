import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "c9cc03a8-a5a0-429f-9b7b-6081107a0adf"
    }
})

export const UsersAPI = {
    getUsers(curentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${curentPage}&count=${pageSize}`)
    },
    followAPI(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollowAPI(userId) {
        return instance.delete(`follow/${userId}`)
    }
}


export const authAPI = {
    getAuthorization() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe = false){
        return instance.post('/auth/login', {email, password, rememberMe})
    },
    logout(){
        return instance.delete('/auth/login')
    }
}


export const ProfileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    setUserStatus(status) {
        return instance.put(`profile/status/`, { status: status })
    },
    savePhoto(imgFile) {
        const formData = new FormData();
        formData.append("image", imgFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
    }
}