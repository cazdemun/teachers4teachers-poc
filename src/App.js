import React from 'react';

import { Layout, Row, Card, Button, Table, Col, Input, Divider, Menu, List, Tooltip } from 'antd';

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

// hidden about
// hidden progress

const Videos = ({ current }) =>
  <Col name="videos" span={16} style={{ padding: "10px 20px" }}>
    <h1>Videos</h1>
    <Divider />
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 2,
        xl: 3,
        xxl: 3,
      }}
      pagination={{ pageSize: 9 }}
      dataSource={current.context.videos}
      renderItem={item => (
        <List.Item>
          <Card title={<Tooltip title={item}>
            <span>{item}</span>
          </Tooltip>}>El vídeo va aquí</Card>
        </List.Item>
      )} />
  </Col>

const Communities = ({ current }) =>
  <Col name="communities" span={8} style={{ padding: "10px 20px" }}>
    <h1>Comunidades</h1>
    <Divider />
    <List
      pagination={{ pageSize: 7 }}
      dataSource={current.context.communities}
      renderItem={item => (
        <List.Item>
          {item}
        </List.Item>
      )} />
  </Col>

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
            <Videos current={current} />
            <Communities current={current} />
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
