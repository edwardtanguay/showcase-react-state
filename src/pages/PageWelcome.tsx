import { ChangeEvent, useState } from "react";

export const PageWelcome = () => {
	const [isOnline, setIsOnline] = useState(false);
	const [thePassword, setThePassword] = useState("");
	const [isFormDisabled, setIsFormDisabled] = useState(false);

	const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setThePassword(value);
	};

	const handleLoginButton = () => {
		if (thePassword === "fantastic") {
			setIsOnline(true);
			setThePassword("");
		}
	};

	const handleDisableForm = () => {
		setIsFormDisabled(!isFormDisabled);
	};

	return (
		<>
			<div className={`${isFormDisabled ? 'formIsDisabled' : ''}`}>
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
						{isOnline ? (
							<p className="text-xl">Enjoy the site.</p>
						) : (
							<>
								<p className="text-xl">Password:</p>
								<input type="password" value={thePassword} className="border border-slate-300 rounded-md px-2 py-1" onChange={handleChangePassword} />
								<button className={`${thePassword.length < 8 ? 'disabled' : ''}`} onClick={handleLoginButton} disabled={thePassword.length < 8}>Login</button>
							</>
						)}
					</div>
				</div>
			</div>
			<div className="example">
				<h2>Example 3</h2>
				<div className="flex gap-2 items-center">
					<input type="checkbox" id="disableForm" onClick={handleDisableForm} /> <label htmlFor="disableForm" className="text-xl">Disable form</label>
				</div>
			</div>
		</>
	)
}