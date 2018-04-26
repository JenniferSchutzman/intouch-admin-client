import { merge } from 'ramda'
import moment from 'moment-timezone'
import shortId from 'shortid'
import getTimeDiff from '../getTimeDiff/index'

/**
 * buildNewScheduleItem - creates new schedule
 * @param {Object} selectedTime - time selected
 * @param {String} eventDate - date of event
 * @param {Object} formData - data from form
 */
const buildNewScheduleItem = (selectedTime, eventDate, formData) => {
  const { hour, minute, timeOfDay, endTime = {} } = selectedTime

  const { hasEndTime = false } = endTime

  const { hour: endHour, minute: endMinute, timeOfDay: endTimeOfDay } = endTime

  const timeString = `${hour}:${minute} ${timeOfDay}`
  const endTimeString = `${endHour}:${endMinute} ${endTimeOfDay}`

  const time = {
    string: timeString,
    endString: hasEndTime ? endTimeString : null,
    hasEndTime,
    unix: moment(`${eventDate} ${timeString}`, 'YYYY-MM-DD h:mm a').unix(),
    endUnix: hasEndTime
      ? moment(`${eventDate} ${endTimeString}`, 'YYYY-MM-DD h:mm a').unix()
      : null
  }

  const { hours: hoursDiff, minutes: minutesDiff } = getTimeDiff(time)
  const eventData = {
    time,
    id: shortId(),
    hoursDiff: hoursDiff || null,
    minutesDiff: minutesDiff || null
  }
  return merge(formData, eventData)
}

export default buildNewScheduleItem
