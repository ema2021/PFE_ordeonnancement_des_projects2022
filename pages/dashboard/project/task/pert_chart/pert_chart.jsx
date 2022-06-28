import useSWR from "swr";
import { useRouter } from "next/router";
import enforceAuthenticated from "@/lib/redirect";
import React, { Component } from "react";
import {
	InteractiveForceGraph,
	ForceGraphNode,
	ForceGraphArrowLink,
} from "react-vis-force";
import jsPERT, { pertProbability, START, END, Pert } from "js-pert";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const getFillColor = (nodeKey, pert) => {
	console.log(pert);
	if (nodeKey === START || nodeKey === END) {
		return "cyan";
	}
	return pert.criticalPath.indexOf(nodeKey) > -1 ? "red" : "green";
};

export default function PertChart({ data }) {
	// const router = useRouter();
	// const pert_chart = router.query.pert_chart;
	// const { data, error } = useSWR(`/api/pert/${project}`, fetcher);
	// const { pert } = data;
	// if (error) return <div>Failed to load</div>;
	if (!data) return <div>Loading...</div>;
	const getFillColor = (nodeKey, pert) => {
		// console.log(pert);
		if (nodeKey === START || nodeKey === END) {
			return "#22AED1";
		}
		return pert.criticalPath.indexOf(nodeKey) > -1 ? "#C73E1D" : "#016FB9";
	};

	return (
		<div className="flex items-center h-full w-full justify-between">
			{/* {JSON.stringify(data)} */}
			<InteractiveForceGraph
				zoom
				simulationOptions={{
					strength: { collide: 60, charge: 5 },
				}}
				className="border-2 my-auto w-full h-full p-4 bg-slate-300 rounded "
			>
				{Object.keys(data.network).map((nodeKey) => (
					<ForceGraphNode
						node={{ id: nodeKey, radius: 13 }}
						showLabel
						key={`node|${nodeKey}`}
						fill={getFillColor(nodeKey, data)}
					/>
				))}
				{Object.keys(data.network).map((nodeKey) =>
					data.network[nodeKey].successors.map((successorKey) => (
						<ForceGraphArrowLink
							link={{ source: nodeKey, target: successorKey }}
							targetRadius={5}
							key={`arrow|${nodeKey}=>${successorKey}`}
						/>
					))
				)}
			</InteractiveForceGraph>
		</div>
	);
}
export const getServerSideProps = enforceAuthenticated();
