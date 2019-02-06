import axios from 'axios'

axios.defaults.baseURL = location.protocol + '//' + location.hostname + ':' + 3000

export const postEntry = (entry) => {
  return axios.post('/api/entry', {
    entry: entry,
    eventType: 'dataAdded',
    eventTime: +new Date
  })
}

export const getData = () => axios.get('/api/entries')

export const getLogs = () => axios.get('/api/logs')
