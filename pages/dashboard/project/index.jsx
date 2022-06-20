import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "@/lib/auth";
export default function Index() {
	const { user } = useAuth();
	const router = useRouter();
	// useEffect(() => {
	// 	user ? router.push("/dashboard") : router.push("/");
	// 	// console.log(user?.id);
	// }, [router, user]);
	return <div>Fyuck me</div>;
}
