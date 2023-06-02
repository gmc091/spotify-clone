"use client";

import Box from "@/components/Box";
import { VscError } from "react-icons/vsc";

const Error = () => {
	return (
		<Box className="h-full flex items-center justify-center">
			<VscError className="text-neutral-400" />
			<div className="text-neutral-400">Something went wrong.</div>
		</Box>
	);
};

export default Error;
