import { useState } from "react";

export const PageWelcome = () => {
	const [isOnline, setIsOnline] = useState(false);

	return (
		<>
		<h2>Example 1</h2>
		<button>Change online status</button>
		</>
	)
}