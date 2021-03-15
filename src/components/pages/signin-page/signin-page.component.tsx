import { Card, Col, Row } from 'antd';
import React from 'react';

import SignInComponent from '../../signin/sign-in.component';

const SignInPageComponent = () => {

  return (
    <Row justify="center" align="middle" style={{minHeight: '100vh'}} >
      <Col 
        xs={{ span: 24 }} 
        style={{maxWidth: '380px'}}
        
      >
        <Row justify="center" align="middle">
          <Col span={24}>
            <SignInComponent />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default SignInPageComponent;