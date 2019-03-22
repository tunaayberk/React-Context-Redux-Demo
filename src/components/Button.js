import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

    renderSubmit(value) {
        if(value === 'english') {
            return 'Submit'
        }
        else if(value==='dutch'){
            return 'Voorleggen'
        }
        else if(value==='turkish'){
            return 'Gonder'
        }
        else {
            return 'Default'
        }
    }

    renderButton(color){
        return (
        <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
        
        </button>
        );
    }

    render() {
        return(
            <ColorContext.Consumer>
            {color => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;