import { supabase } from "./client";
const enforceAuthenticated = (inner) => {
	return async (context) => {
		const { req } = context;
		const { user } = await supabase.auth.api.getUserByCookie(req);

		if (!user) {
			return { props: {}, redirect: { destination: "/account" } };
		}

		if (inner) {
			return inner(context);
		}

		return { props: {} };
	};
};

export default enforceAuthenticated;
export const redirectifSigned = (inner) => {
	return async (context) => {
		const { req } = context;
		const { user } = await supabase.auth.api.getUserByCookie(req);

		if (user) {
			return { props: {}, redirect: { destination: "/dashboard" } };
		}

		if (inner) {
			return inner(context);
		}

		return { props: {} };
	};
};
