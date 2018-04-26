import moment from 'moment-timezone'

/**
 * getTimeDiff - if there is an end time, returns the difference between start and end time
 * @param {object} time
 */
const getTimeDiff = time => {
  const start = moment(time.string, 'h:mm a')
  const end = moment(time.endString, 'h:mm a')
  const diff = end.diff(start, 'minutes')
  const formatMins = diff => (diff % 60 === 0 ? null : diff % 60)
  const diffHour = Math.floor(diff / 60)
  const res =
    diff / 60 >= 1
      ? {
          hours: diffHour,
          minutes: formatMins(diff)
        }
      : {
          hours: 0,
          minutes: diff
        }

  return res
}

export default getTimeDiff
