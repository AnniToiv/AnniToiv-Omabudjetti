import testdata from './testdata.js'

import AppRouter from '../../router/AppRouter'

function App() {

  return (
    <>
        <AppRouter data={testdata} />
    </>
  )
}

export default App
