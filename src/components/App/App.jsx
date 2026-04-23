import { FloatingButton } from '../../shared/ui/buttons'

import Button from '../../shared/ui/buttons'

import Content from '../Content'

import Menu from '../Menu'

import Header from '../Header'

import Item from '../Item'

import styles from './App.module.scss'

function App() {

  return (
    <>
      <div className={styles.app}>
        <Header />
        <Content>
          <Item />
          <Item />
          <Item />
          <Item />
                  <Content>
          <Item />
          <Item />
          <Item />
          <Item />
          <FloatingButton secondary>+</FloatingButton>
        </Content>
        </Content>
        <Menu />
      </div>
    </>
  )
}
export default App
