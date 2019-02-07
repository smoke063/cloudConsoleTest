import axios from 'axios'
import uuid from 'uuid/v1'
import io from 'socket.io-client'

axios.defaults.baseURL = location.protocol + '//' + location.hostname + ':' + 3000

export const socket = io(location.protocol + '//' + location.hostname + ':' + 3000)

export const postEntry = (entry) => {
  entry.id = uuid()
  return axios.post('/api/entry', {
    entry
  })
}

export const postLog = (log) => {
  return axios.post('/api/log', {
    log
  })
}

export const getData = () => axios.get('/api/entries')

export const getLogs = () => axios.get('/api/logs')
