import moment from "moment";
export function getProgress(startDate, Duration) {
	var given = moment(startDate, "YYYY-MM-DD");
	var current = moment().startOf("day");

	//Difference in number of days
	var diff = moment.duration(current.diff(given)).asDays();
	return (diff * Duration) / 100;
}

export function transformJson(arryJson) {
	var json = {};
	arryJson.map((item, index) => {
		const { titre, state } = item;
		const predecessors = item.taches_precedent_id?.map((el) => {
			return `Task_${el}`;
		});
		const pessimisticTime = Number(item.duree) + 2;
		json[`task_${item.id}`] = {
			id: `task_${item.id}`,
			optimisticTime: Number(`${item.duree - 2}`),
			mostLikelyTime: Number(`${item.duree}`),
			pessimisticTime: pessimisticTime,
			predecessors: predecessors || [],
			titre: titre,
			state: state,
		};
	});
	return json;
}
