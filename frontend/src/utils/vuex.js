import http from '../plugins/axios'

const set = property => (state, payload) => (state[property] = payload)

const toggle = property => state => (state[property] = !state[property])

const httpToken = (http, token = null) => {
  delete http.defaults.headers['Authorization']
  if (token !== null) {
    http.defaults.headers['Authorization'] = 'Token ' + token
  }
}

const parseHttpError = error => {
  if (error.response) {
    if (error.response.status === 400) {
      const data = error.response.data
      Object.keys(data).forEach(m => {
        if (Array.isArray(data[m])) {
          data[m].forEach(k => {
            throw new Error(`${m}: ${k}`)
          })
        } else {
          throw new Error(`${m}: ${data[m]}`)
        }
      })
    }
  } else if (error.request) {
    throw new Error(error.request)
  } else {
    throw new Error(error.message)
  }
}

const load = (url, mutation) => ({ commit }, filter = null) => http.get(url, { params: filter })
  .then(res => commit(mutation, res.data))

const save = url => (context, form) => {
  if (form.id) {
    return http.patch(`${url}${form.id}/`, form)
      .catch(err => parseHttpError(err))
  }
  return http.post(url, form)
    .catch(err => parseHttpError(err))
}

const remove = url => (context, id) => http.delete(`${url}${id}/`)

export {
  load,
  save,
  remove,
  parseHttpError,
  httpToken,
  http,
  set,
  toggle
}
