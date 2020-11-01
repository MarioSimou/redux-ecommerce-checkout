import axios, { AxiosInstance } from 'axios'

const instance = axios.create({
  timeout: 10000,
  baseURL: 'http://localhost:8081',
  headers: {
    "Content-Type": "application/json",
  },
})

export const getClient = (): AxiosInstance => instance