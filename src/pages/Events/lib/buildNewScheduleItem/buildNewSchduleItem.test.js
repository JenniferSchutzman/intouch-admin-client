import buildNewScheduleItem from "./"
import { omit } from "ramda"

test("should build new schedule item", () => {
  const result = buildNewScheduleItem(selectedTime, eventDate, formData)
  expect(omit(["id"], result)).toMatchSnapshot()
})

var selectedTime = {
  open: true,
  hour: "4",
  minute: "00",
  timeOfDay: "pm"
}

var eventDate = "2017-11-15"

var formData = {
  name: "test name"
}
