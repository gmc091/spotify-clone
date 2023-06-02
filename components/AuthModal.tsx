"use client";

import {
	useSessionContext,
	useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import Modal from "./Modal";
import { Auth } from "@supabase/auth-ui-react";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";

const AuthModal = () => {
	const supabaseClient = useSupabaseClient();
	const router = useRouter();
	const { session } = useSessionContext();
	const { onClose, isOpen } = useAuthModal();

	useEffect(() => {
		if (session) {
			router.refresh();
			onClose();
		}
	}, [session, router, onClose]);

	const onChange = (open: boolean) => {
		if (!open) {
			onClose();
		}
	};

	return (
		<Modal
			title="Welcome!"
			description="Create an account or log into an existing one."
			isOpen={isOpen}
			onChange={onChange}
		>
			<Auth
				supabaseClient={supabaseClient}
				providers={["github"]}
				magicLink
				view="sign_up"
				theme="dark"
				appearance={{
					theme: ThemeSupa,
					variables: {
						default: {
							colors: {
								brand: "#404040",
								brandAccent: "#22c55e",
							},
						},
					},
				}}
			/>
		</Modal>
	);
};

export default AuthModal;
