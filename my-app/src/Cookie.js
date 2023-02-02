import React from 'react';
import cookie from './cookie.png';

class Cookie extends React.Component {
  render() {
    return (
      <div>
        <button>
            <img 
                src={cookie} 
                alt="Cookie" 
                style={{width: "50%", height: "50%"}}
                className="all" 
                onClick={this.props.clickHandler}
            />
        </button>
      </div>
    );
  }
}

export default Cookie;