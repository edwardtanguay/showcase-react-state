import { useState } from "react";

export const PageWelcome = () => {
	const [isOnline, setIsOnline] = useState(false);

	return (
		<>
			<div className="example">
				<h2>Example 1</h2>
				<div className="flex gap-2 items-center">
					<button onClick={() => setIsOnline(!isOnline)}>Change online status</button>
					<p className={`text-xl ${isOnline ? 'userIsOnline' : 'userIsOffline'}`}>User is {isOnline ? "online" : "offline"}.</p>
				</div>
			</div>
			<div className="example">
				<h2>Example 2</h2>
				<div className="flex gap-2 items-center">
				<p className="text-xl">Password:</p>
				<input type="password" className="border border-slate-300 rounded-md px-2 py-1" />
				<button>Login</button>
				</div>
			</div>
		</>
	)
}