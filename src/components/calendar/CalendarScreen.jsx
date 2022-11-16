import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import { Navbar } from '../ui/Navbar'
import { messages } from '../../helpers/calendar-messages-es'

import 'moment/dist/locale/es-mx'
import 'react-big-calendar/lib/css/react-big-calendar.css'

moment.locale('es-mx')

const localizer = momentLocalizer(moment)
const myEventsList = [
  {
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
  },
]

export const CalendarScreen = () => {
  return (
    <div className='calendar-screen'>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor='start'
        endAccessor='end'
        messages={messages}
      />
    </div>
  )
}
