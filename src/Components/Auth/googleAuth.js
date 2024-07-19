import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const GoogleAuth = () => {
    const responseGoogle = (response) => {
        console.log(`google Auth response ${response}`);
        axios.post('http://localhost:8000/api/authentication/exchange-token/', {
            access_token: response.accessToken,
        })
        .then(res => {
            console.log(res.data);
            // Store the token in localStorage or context
        })
        .catch(err => {
            console.error(err);
        });
    }

    return (
        <div>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
}

export default GoogleAuth;
