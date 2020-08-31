import React from 'react';

import { Layout, Row, Card, Button, Table, Col, Input, Divider, Menu, List } from 'antd';

import { Machine, assign } from "xstate";
import { useMachine } from "@xstate/react";

const { Header, Footer, Content } = Layout;

const generalMachine = Machine(
  {
    id: "bowl",
    context: {
      videos: [
        "¿Cómo usar Zoom?",
        "Arma tus clases virtuales",
        "Expectativas en la transformación digital de la educación",
        "Introducción al blackboard",
        "¿Cómo usar Zoom?",
        "Arma tus clases virtuales",
        "Expectativas en la transformación digital de la educación",
        "Introducción al blackboard",
        "¿Cómo usar Zoom?",
        "Arma tus clases virtuales",
        "Expectativas en la transformación digital de la educación",
        "Introducción al blackboard",
        "¿Cómo usar Zoom?",
        "Arma tus clases virtuales",
        "Expectativas en la transformación digital de la educación",
        "Introducción al blackboard",
        "Introducción al blackboard",
      ],
      communities: [
        'Profesores de Whatsapp',
        'Profesores de Facebook',
        'Profesores de Primaria',
        'Profesores de Secundaria',
        'Profesores de Secundaria - Los Olivos',
        'Profesores de Secundaria - Loreto',
        'Profesores Universitarios',
        'Profesores enseñando online',
      ]
    },
    initial: "start",
    states: {
      start: {
        on: {
          '': {
            target: "idle",
            // actions: ['loadVideos', 'loadCommunities']
          }
        }
      },
      idle: {}
    }
  },
  {
    actions: {}
  }
)
const style = { background: '#0092ff', padding: '8px 0' };
// hidden about
// hidden progress
function App() {
  const [current, send] = useMachine(generalMachine);

  return (
    <Layout style={{ minHeight: "100%" }}>
      <Header style={{ display: "flex" }}>
        <h1 style={{ color: "whitesmoke", fontWeight: "bold", margin: "0px 20px 0px 0px" }}>Teachers 4 Teachers</h1>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Fase 1</Menu.Item>
          <Menu.Item disabled key="2">Fase 2</Menu.Item>
          <Menu.Item disabled key="3">Fase 3</Menu.Item>
        </Menu>
      </Header>
      <Content name="layout-content" style={{ padding: "20px 0px", minHeight: "100%" }}>
        <Col name="content" offset={2 / 2} span={22} style={{ background: "white", minHeight: "100%" }}>
          <Row gutter={16} >
            <Col name="videos" span={16} style={{ padding: "10px 20px" }}>
              <h1>Videos</h1>
              <Divider />
              <Row gutter={[16, 16]} style={{ justifyContent: "center", alignItems: "center" }}>
                {current.context.videos.map(v => <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                  <Card style={{ minHeight: "200px", }}>
                    {v}
                  </Card>
                </Col>)}
              </Row>
              <Divider />
              <List pagination={{ pageSize: 3 }}
                dataSource={current.context.videos}
                renderItem={item => (
                  <List.Item>
                    <Card title={item}>Card content</Card>
                  </List.Item>
                )} />
            </Col>
            <Col name="communities" span={8} style={{ padding: "10px 20px" }}>
              <h1>Comunidades</h1>
              <Divider />
              {current.context.communities.map(c => <Card>{c}</Card>)}
            </Col>
          </Row>
        </Col>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Icon made by Fasil from <a href="www.freeicons.io">www.freeicons.io</a>
        <br />
        Teachers 4 Teachers ©2020 Created by Enseña Conmigo
      </Footer>
    </Layout>
  );
}

export default App;
