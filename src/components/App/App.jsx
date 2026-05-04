import { useState } from 'react'

import testdata from './testdata.js'

import AppRouter from '../../router/AppRouter'

function App() {

    // Käsittelee ja tallentaa lomakkeelle syötetyistä
  // tiedoista uuden rivin tai muokkaa olemassaolevaa.
  // Käsittelee ja tallentaa lomakkeelle syötetyistä 
  // tiedoista uuden rivin tai muokkaa olemassaolevaa.
  const handleItemSubmit = (newitem) => {
    let copy = data.slice()
    copy.push(newitem)
        copy.sort( (a,b) => {
      const aDate = new Date(a.paymentDate)
      const bDate = new Date(b.paymentDate)
      return bDate - aDate
    })
    setData(copy)
  }
    // Sovelluksen merkintädata, joka välitetään eteenpäin reitittäjälle.
  const [data, setData] = useState(testdata)

  return (
    <>
          <AppRouter data={data} onItemSubmit={handleItemSubmit} />
    </>
  )
}

export default App
