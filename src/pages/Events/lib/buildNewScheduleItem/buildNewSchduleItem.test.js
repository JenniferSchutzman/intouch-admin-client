import buildNewScheduleItem from './'
import { omit } from 'ramda'

test('should build new schedule item with End time', () => {
  const result = buildNewScheduleItem(
    selectedTimeWithEndTime,
    eventDate,
    formData
  )
  expect(omit(['id'], result)).toMatchSnapshot()
})

test('should build new schedule item without end time', () => {
  const result = buildNewScheduleItem(
    selectedTimeWithoutEndTime,
    eventDate,
    formData
  )
  expect(omit(['id'], result)).toMatchSnapshot()
})

var selectedTimeWithEndTime = {
  open: true,
  hour: '12',
  minute: '00',
  timeOfDay: 'pm',
  endTime: {
    hour: '6',
    minute: '00',
    timeOfDay: 'pm',
    hasEndTime: true
  }
}

var selectedTimeWithoutEndTime = {
  open: true,
  hour: '12',
  minute: '00',
  timeOfDay: 'pm'
}
var eventDate = '2017-11-15'

var formData = {
  name: 'test name'
}
