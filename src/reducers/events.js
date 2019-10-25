import _ from 'lodash'
import {
  READ_EVENTS,
  CREATE_EVENTS,
  DELETE_EVENTS,
  GET_EVENTS,
  UPDATE_EVENTS
} from "../actions";

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENTS:
    case UPDATE_EVENTS:
    case GET_EVENTS:
      const data = action.response.data
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENTS:
      // reducer 内のメモリ情報も削除する
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}
