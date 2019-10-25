import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENTS = 'CREATE_EVENTS'
export const DELETE_EVENTS = 'DELETE_EVENTS'
export const GET_EVENTS = 'GET_EVENTS'
export const UPDATE_EVENTS = 'UPDATE_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1/'
const QUERY_STRING = '?token=token123'

// events情報を全て取得
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERY_STRING}`)
  dispatch({ type: READ_EVENTS, response })
}

// new eventをpost
export const postEvent = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events${QUERY_STRING}`, values)
  dispatch({ type: CREATE_EVENTS, response })
}

// 特定のeventを削除
export const deleteEvent = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/events/${id}${QUERY_STRING}`)
  dispatch({ type: DELETE_EVENTS, id })
}

// 特定のeventを取得
export const getEvent = id => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events/${id}${QUERY_STRING}`)
  dispatch({ type: GET_EVENTS, response })
}

// 特定のeventをupdate
export const putEvent = values => async dispatch => {
  const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERY_STRING}`, values)
  dispatch({ type: UPDATE_EVENTS, response })
}
