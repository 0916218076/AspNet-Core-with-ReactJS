import React,{Component} from 'react';

export class loggin extends Component{
    static displayName = loggin.name;
                render() {
        return (
                <div>
            <div class="login-div">
                <div class="logo"></div>
                <div class="title">Petrolimex</div>
                <div class="sub-title">beta</div>
                <div class="fields">
                    <div class="username"><input type="username" class="user-input" placeholder=" enter your id" /></div>
                    <div class="password"><input type="password" class="pass-input" placeholder=" enter your password" /></div>
                </div>
                <button class="signin-button">Login</button>
                <div class="link">
                    <a href="#">Forgot password?</a> or <a href="#">Sign up</a>
                </div>
                {/* <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div> */}
                            </div>
                </div>
                );
    }
}
