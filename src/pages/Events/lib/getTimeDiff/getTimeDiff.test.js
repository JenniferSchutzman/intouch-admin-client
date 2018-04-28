import getTimeDiff from './'

test('getTimeDiff should work with only minutes', () => {
  const result = getTimeDiff(onlyMinutesData)
  expect(result).toMatchSnapshot()
})
test('getTimeDiff should work with only hours', () => {
  const result = getTimeDiff(onlyHoursData)
  expect(result).toMatchSnapshot()
})
test('getTimeDiff should work with hours and minutes', () => {
  const result = getTimeDiff(hoursAndMinutesData)
  expect(result).toMatchSnapshot()  
})

const onlyMinutesData = {
  string: '12:00 pm',
  endString: '12:05 pm',
  hasEndTime: true,
  unix: 1524931200,
  endUnix: 1524931500
}

const onlyHoursData = {
  string: '4:00 pm',
  endString: '6:00 pm',
  hasEndTime: true,
  unix: 1524945600,
  endUnix: 1524952800
}

const hoursAndMinutesData = {
  string: '7:00 pm',
  endString: '9:06 pm',
  hasEndTime: true,
  unix: 1524956400,
  endUnix: 1524963960
}
