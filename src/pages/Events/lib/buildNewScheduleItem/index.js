import { merge } from "ramda"
import moment from "moment-timezone"
import shortId from "shortid"

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
    endString: endTimeString,
    hasEndTime,
    unix: moment(`${eventDate} ${timeString}`, "YYYY-MM-DD h:mm a").unix()
  }

  const eventData = { time, id: shortId() }
  return merge(formData, eventData)
}

export default buildNewScheduleItem
