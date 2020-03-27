import React, {Component} from 'react';
import {connect} from 'react-redux';

class CharacterList extends Component {

    render () {
        console.log('clist', this.props.Characters);
        return (
          <div>
              <h4>Characters</h4>
              <ul>
                { 
                  this.props.Characters.map (
                     c =>  (
                               <li key={c.id}>
                                   <div>
                                        {c.name}
                                   </div>
                               </li>
                            )
                         
                  )
                } 
              </ul>
          </div>
        )
    }
}

function mapStateToProps1(state) {
    //console.log('state', state);
    return {Characters: state.characters};
}


export default connect(mapStateToProps1, null) (CharacterList);