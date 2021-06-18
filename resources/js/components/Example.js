import axios from 'axios';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Example(props) {

    const [status, setStatus] = useState(!!props.follows)

    function followUser(e) {
        
        axios.post('/follow/' + props.userid)
            .then((res) => {
                setStatus((status) => !status);
            })
            .catch((err) => {
                if(err.response.status === 401) {
                    window.location = '/login';
                }
            });
    }

    return (
       
        <div>
            <button onClick={followUser} className='btn ml-4 btn-primary'>{!status ? 'Follow' : 'Unfollow'}</button>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    const component = document.getElementById('example');

    const props = {...component.dataset};
    
    ReactDOM.render(<Example {...props}/>, document.getElementById('example'));
}
