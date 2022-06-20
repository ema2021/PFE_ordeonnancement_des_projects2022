import moment from "moment";
export function getProgress(startDate, Duration) {
	var given = moment(startDate, "YYYY-MM-DD");
	var current = moment().startOf("day");

	//Difference in number of days
	var diff = moment.duration(current.diff(given)).asDays();
	return (diff * Duration) / 100;
}
