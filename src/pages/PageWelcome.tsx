import { useState } from "react";

export const PageWelcome = () => {
	const [isOnline, setIsOnline] = useState(false);

	return (
		<>
			<h2>Example 1</h2>
			<div className="flex gap-2 items-center">
				<button>Change online status</button>
				<p className="text-xl">User is offline.</p>
			</div>
		</>
	)
}