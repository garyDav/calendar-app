import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={<LoginScreen />}
        />
        <Route
          path='/'
          element={<CalendarScreen />}
        />
        <Route
          path='/*'
          element={<Navigate to='/' />}
        />
      </Routes>
    </BrowserRouter>
  )
}
