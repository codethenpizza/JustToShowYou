import React from 'react';
import 'mobx-react-lite/batchingForReactDom'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import styled, {ThemeProvider} from "styled-components"
import {theme} from "./theme/Theme";
import {Provider} from "mobx-react";
import {RootStore} from "./stores/rootStore";

//pages
import DashboardPage from "./pages/DashboardPage";
import CreatePostPage from "./pages/CreatePostPage";
//components
import Menu from "./components/Menu";

const MainContentWrapper = styled.div`
  margin-left: 60px;
`;

const rootStore: RootStore = new RootStore();

const APP: React.FC = () => {
  return (
    <Provider rootStore={rootStore}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Menu/>
          <MainContentWrapper>
            <Switch>
              <Route component={DashboardPage} path='/' exact/>
              <Route component={CreatePostPage} path='/createPost'/>
            </Switch>
          </MainContentWrapper>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
};

export default APP

