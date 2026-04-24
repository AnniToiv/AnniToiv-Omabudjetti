import { ButtonContainer, FloatingButton } from '../../shared/ui/buttons'

import Button from '../../shared/ui/buttons'

import Content from '../Content'

import Menu from '../Menu'

import Header from '../Header'

import Item from '../Item'

import styles from './App.module.scss'

function App() {

    return (
    <>
      <ButtonContainer>
      <div className={styles.app}>
        <Header />
        <Content>
          <Item />
          <Item />
          <Item />
          <Item />
          <FloatingButton secondary>+</FloatingButton>
        </Content>
        <Menu />
      </div>
      </ButtonContainer>
    </>
  )
}

export default App
