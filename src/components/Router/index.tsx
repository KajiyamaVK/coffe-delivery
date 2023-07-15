import { Routes, Route } from 'react-router-dom'
import DefaultLayout from '../../style/defaultLayout'
import Home from '../../pages/home'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
