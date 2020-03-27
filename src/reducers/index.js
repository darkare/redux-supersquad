import characters_json from '../data/characters.json';
import {ADD_CHARACTER} from '../actions';
import {combineReducers} from 'redux';

function characters(state = characters_json, action) {
  switch (action.type) {
      case  ADD_CHARACTER:
        let characters  = state.filter (i => i.id !== action.id);
        return characters;
      default:
          return state;
  }
}

function heroes (state = [], action ) {
    switch (action.type) {
        case ADD_CHARACTER: 
          let heroes = [...state, createCharacter(action.id)];
          return heroes;
        default:
            return state;
    }
}

function createCharacter(id) {
    return characters_json.find (c => c.id === id);
}

const rootReducer = combineReducers({
    characters,
    heroes
})

export default rootReducer;