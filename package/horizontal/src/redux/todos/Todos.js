import {
    FETCH_TODO_REQUEST,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_FAILURE,
    TOGGLE_STARRED_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    UPDATE_TODO,
    TODO_DETAILS,
    ADD_TODO
  } from '../constants'

const initialState = {
    loading: false,
    todos:[],
    error: '',
    todoDetails: ''
  }

export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TODO_REQUEST:
        return {
            loading: true,
            todos: [],
            error: action.payload
          }
      case FETCH_TODO_SUCCESS:
        return {
            loading: false,
            todos: action.payload,
            error: ''
        } 
    case FETCH_TODO_FAILURE:
        return {
            loading: false,
            todos: [],
            error: action.payload
        }
     
    case TOGGLE_STARRED_TODO:
        return {
          ...state,
          todos: state.todos.map(todo => (todo.id === action.id ? {...todo, starred: !todo.starred} : todo))
        }
      
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => (todo.id === action.id ? {...todo, deleted: !todo.deleted} : todo)) 
      }
    
    case COMPLETE_TODO:
          return {
            ...state,
            todos: state.todos.map(todo => (todo.id === action.id ? {...todo, isCompleted: !todo.isCompleted} : todo)) 
          }
          
    case UPDATE_TODO:
      return{
         ...state,
          todos: state.todos.map(todo => (todo.id === action.id ? { ...todo, [action.field]: action.value } : todo))
      }
    case TODO_DETAILS:
        return {
          ...state,
          todoDetails:action.id
        }
    case ADD_TODO:
          return {
            ...state,
            todos:[...state.todos, {
              id: action.id,
              title: action.title,
              desc: action.desc,
              starred: false,
              isCompleted: false,
              deleted: false
            }]
          }    
    default: return state
  }
}
