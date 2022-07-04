import { START, END } from "js-pert";

import moment from "moment";

/**
 *
 * @param {date} startDate
 * @param {int} Duration
 * @returns {float } value de progress
 */
export function getProgress(startDate, Duration) {
	var given = moment(startDate, "YYYY-MM-DD");
	var current = moment().startOf("day");

	//Difference in number of days
	var diff = moment.duration(current.diff(given)).asDays();
	if (diff >= 0) return (diff * Duration) / 100;
	return false;
}
/**
 *
 * @param {Array[Object]} arryJson La liste des taches
 * @returns  {Object} La liste des taches  convenable pour la fonction jsPERT
 */

export function transformJson(arryJson) {
	var json = {};
	arryJson.map((item, index) => {
		const { titre, state } = item;
		const predecessors = item.taches_precedent_id?.map((el) => {
			return `Task_${el}`;
		});
		const pessimisticTime = Number(item.duree);
		json[`Task_${item.id}`] = {
			id: `Task_${item.id}`,
			optimisticTime: Number(`${item.duree}`),
			mostLikelyTime: Number(`${item.duree}`),
			pessimisticTime: pessimisticTime,
			predecessors: predecessors || [],
			titre: titre,
			state: state,
		};
	});
	return json;
}

/**
 *
 * @param {Objet} projet  le projet
 * @param {Array[Objet]} arryJson  la listes des taches
 * @param {Object} tasksdata
 * @param {*} es les DTOS des taches
 * @param {*} lf les FTAs des taches
 * @param {*} cpath Le chemin critique
 * @returns
 */

export function pertToGantt(projet, arryJson, tasksdata, es, lf, cpath) {
	var json = [];
	Object.keys(arryJson)
		.sort((a, b) => es[a] - es[b])
		.map((item) => {
			if (item != START && item != END) {
				const id_num = Number(item.replace("Task_", ""));
				const taskfiltered = tasksdata.filter(
					(el) => el.id == id_num
				)[0];
				const task_name = taskfiltered.titre;
				const debut = new Date(projet.debut || projet.created_at);
				console.log("start:" + projet.debut);
				console.log("start:" + debut);
				const earliestStart = Math.trunc(es[item]);
				const latestFinish = Math.trunc(taskfiltered.duree);
				console.log("End:" + debut.addDays(latestFinish));
				const task = {
					start: debut.addDays(earliestStart),
					end: debut.addDays(latestFinish),
					name: task_name,
					id: item,
					progress: Math.round(
						getProgress(
							debut.addDays(earliestStart),
							debut.addDays(latestFinish)
						)
					),
					isDisabled: false,
					dependencies: arryJson[item].predecessors,
					styles: {
						progressColor:
							cpath.indexOf(item) < 0 ? "#99B2DD" : "#D5896F",
						progressSelectedColor:
							cpath.indexOf(item) < 0 ? "#355691" : "#D5896F",
						barBackgroundColor:
							cpath.indexOf(item) < 0 ? "#AEB8FE" : "#F15156",
					},
				};
				json.push(task);
			}
		});
	return json;
}
