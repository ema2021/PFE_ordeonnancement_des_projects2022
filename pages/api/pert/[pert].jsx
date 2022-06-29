import jsPERT from "js-pert";
import { supabase } from "@/lib/client";
import { transform } from "framer-motion";
import { NetworkCellSharp } from "@mui/icons-material";
import { tasks } from "assets/data";

export async function getTasks() {
	let { data: tache, error } = await supabase.from("tache").select("*");

	return { tasks: { tasks: tache, error: error } };
}
export default async function handler(req, res) {
	const { pert } = req.query;
	const { user } = await supabase.auth.api.getUserByCookie(req);
	if (user) {
		let { data: tache, error } = await supabase
			.from("tache")
			.select("*")
			.eq("projectid", pert);
		const {
			activitiesParams,
			network,
			earliestFinishTimes,
			earliestStartTimes,
			latestFinishTimes,
			latestStartTimes,
			slack,
			criticalPath,
		} = jsPERT(activities);
		const pertData = jsPERT(activities);
		const tasksOrdered = Object.keys(network);
		error
			? res.status(200).json({ errors: error, project: pert })
			: res.status(200).json({ data: pertData, ordered: tasksOrdered });
	}
	res.status(200).json({ errors: "there are some issues" });
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
const activities = {
	A: {
		id: "A",
		optimisticTime: 12,
		mostLikelyTime: 16,
		pessimisticTime: 18,
		predecessors: [],
		metadata: "gfshdfsfhg",
	},
	B: {
		id: "B",
		optimisticTime: 12,
		mostLikelyTime: 16,
		pessimisticTime: 18,
		predecessors: ["A"],
	},
	C: {
		id: "C",
		optimisticTime: 12,
		mostLikelyTime: 16,
		pessimisticTime: 18,
		predecessors: ["A", "B"],
	},
	D: {
		id: "D",
		optimisticTime: 12,
		mostLikelyTime: 16,
		pessimisticTime: 18,
		predecessors: ["B"],
	},
};
