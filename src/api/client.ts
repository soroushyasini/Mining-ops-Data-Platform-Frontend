import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 30000,
})

// Request interceptor — placeholder for future auth token injection
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // TODO (Phase 3 — Auth): Inject Bearer token here
    // const token = getAuthToken()
    // if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// Response interceptor — centralised error handling
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status

      if (status === 401) {
        // TODO (Phase 3 — Auth): Redirect to login page
        console.warn('Unauthorized — token may have expired')
      }

      if (status === 403) {
        console.warn('Forbidden — insufficient permissions')
      }

      if (status >= 500) {
        console.error('Server error:', error.response.data)
      }
    } else if (error.request) {
      console.error('Network error — no response received:', error.message)
    } else {
      console.error('Request configuration error:', error.message)
    }

    return Promise.reject(error)
  }
)

export default apiClient
