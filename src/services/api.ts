// src/services/api.ts
import axios from 'axios'

// Get the API URL from environment variables
const API_URL = import.meta.env.VITE_API_URL

// Create an Axios instance with the base URL and default headers
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})
