import { Route,Routes } from 'react-router-dom'
import { Home } from './src/Pages/Home'
import { History } from './src/Pages/History'
import { DefaultLayout } from './src/Layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<History />} />
      </Route>
    </Routes>

  )
}