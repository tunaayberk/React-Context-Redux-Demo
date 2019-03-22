import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {

    renderSubmit(value) {
        if(value === 'english') {
            return 'Name'
        }
        else if(value==='dutch'){
            return 'Naam'
        }
        else if(value==='turkish'){
            return 'Isim'
        }
        else {
            return 'Default'
        }
    }

    render() {
        return(
            <div className="ui field">
                <label>
                <LanguageContext.Consumer>
                {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
                </label>
                <input />
            </div>
        );
    }
}

export default Field;