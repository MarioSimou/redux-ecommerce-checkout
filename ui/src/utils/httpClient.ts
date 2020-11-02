import axios, { AxiosInstance } from 'axios'

const instance = axios.create({
  timeout: 10000,
  baseURL: process.env.REACT_APP_BASE_URL_SERVER,
  headers: {
    "Content-Type": "application/json",
  },
})

export const getClient = (): AxiosInstance => instance