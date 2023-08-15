import React, { useState } from 'react';
import { LockOutlined, UserOutlined, GoogleOutlined, GithubOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './App.css';
import { auth, googleProvider, fbProvider, githubProvider, createUserWithEmailAndPassword } from './Firebase/firebase';
import { signInWithPopup } from 'firebase/auth';


const App: React.FC = () => {
  const [ user, setUser ]: any = useState(null);

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
        .then((result) => {
          const userInfo = result;
          console.log(userInfo);
          const userData = result.user;          
          console.log(userData)
          const userId = result.user.email;
          // const userName = result.user.displayName;
          setUser(userId);
          console.log("Google Authentication Success");
          
        })
    } catch (error) {
      console.log(error);
      console.log("Google Authentication Failed")
    }
  }

  const fbLogin = async () => {
    try {
      await signInWithPopup(auth, fbProvider)
        .then((result) => {
          const userInfo = result;
          console.log(userInfo);
            const userId = result.user.email;
            setUser(userId);
          console.log("FB Authentication Success")
        })
    } catch (error) {
      console.log(error);
      console.log("FB Authentication Failed")
    }
    /* try {
      await signInWithPopup(auth, fbProvider)
      .then((result) => {
        const user = result.user;
        console.log(user,"User");

        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;
        console.log(accessToken,"Access Token");
                      
        console.log("Facebook Authentication Success")
      })
    } catch (error) {
      console.log(error);
      console.log("Facebook Authentication Failed")
    } */
  }

  const githubLogin = async () => {
    try {
      await signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
        console.log("Github Authentication Success");
        // const user = result;
        const userId = result.user.email;
        setUser(userId);
      })
      console.log("Github Login");
    } catch (error) {
      console.log(error);
      console.log("Github Authentication Failed")
    }
  }

  return (
    <div className="App">
      <div className="App-header">
      <h1> USER LOGIN</h1>
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        >
        <Form.Item
        name="username"
        className='form-input'
        rules={[{ required: true, message: 'Please Enter Your Username!' }]}
        >
        <Input prefix={<UserOutlined className="site-form-item-icon" style={{padding:"0 5px"}} />} placeholder="Username" />
        </Form.Item>
        <Form.Item
        name="password"
        className='form-input'
        rules={[{ required: true, message: 'Please Enter Your Password!' }]}
        >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" style={{padding:"0 5px"}} />}
          type="password"
          placeholder="Password"
        />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => createUserWithEmailAndPassword}>
            Log in
          </Button>
          <p style={{color:'white'}}>or <a href="/">Register Now!</a></p>
        </Form.Item>
        </Form>
        <h4>or</h4>
        {/* <Divider plain style={{color:'white'}}>or</Divider> */}
        <div className="button">
          <Button className='google' onClick={googleLogin}><GoogleOutlined style={{padding:"0 5px"}} />Login Using Google</Button><br />
          <Button className='fb' onClick={fbLogin}><FacebookOutlined style={{padding:"0 5px"}} />Login Using Facebook</Button><br />
          <Button className='github' onClick={githubLogin}><GithubOutlined style={{padding:"0 5px"}} />Login Using Github</Button><br />
          <Button className='instagram'><InstagramOutlined style={{padding:"0 5px"}} />Login Using Instagram</Button>
        </div>
        {/* <div className="loginIcon">
          <GoogleOutlined className='icon google'/>
          <FacebookOutlined className='icon fb' />
          <GithubOutlined className='icon github' />
          <InstagramOutlined className='icon instagram' />
        </div> */}
        <div className="result">
          <p id='loginId'>{user}</p>
        </div>
      </div>
    </div>
  );
};

export default App;