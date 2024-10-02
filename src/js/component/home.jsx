import React, { useEffect, useState } from "react";


const Home = () => {
	const [users, setUsers] = useState([]);
	const [nameInput, setNameInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [input, setInput] = useState({name: "", email: "", password: ""})
	const [showName, setShowName] = useState(true)
	const [showEmail, setShowEmail] = useState(true)
	const [showPassword, setShowPassword] = useState(true)

	const handleSubmit = (e) => {
		e.preventDefault();
		let user = { name: nameInput, email: emailInput, password: passwordInput }
		setUsers([...users, user])
		setNameInput("");
		setEmailInput("");
		setPasswordInput("");
	}

	const hideUserInfo = (e, type) => {
		e.preventDefault();
		if (type == "name") {
			if (showName == true) {
				setShowName(false)
			}
		}
		else if (type == "email") {
			if (showEmail == true) {
				setShowEmail(false)
			}
		}
		else if (type == "password") {
			if (showPassword == true) {
				setShowPassword(false)
			}
		}
		else if (type == "All") {
			if (showEmail == true) {
				setShowEmail(false)
			}
			else if (showEmail == false) {
				setShowEmail(true)
			}
			if (showName == true) {
				setShowName(false)
			}
			else if (showName == false) {
				setShowName(true)
			}
			if (showPassword == true) {
				setShowPassword(false)
			}
			else if (showPassword == false) {
				setShowPassword(true)
			}
		}

	}


	return (
		<div className="w-25 mt-5 mx-auto">
			<div>
				<h1>Name</h1>
				<input type="text" value={nameInput} onChange={(e) => setInput({name: e.target.value, email:input.email, password: input.passord})} />
			</div>
			<div>
				<h1>Email</h1>
				<input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
			</div>
			<div>
				<h1>Password</h1>
				<input type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? handleSubmit(e, "password") : console.log("not enter")} />
			</div>
			<button className="btn btn-info my-2" onClick={(e) => handleSubmit(e)}>Add User</button>
			{users?.map((thisUser, index) => (
				<div>
					{console.log(thisUser.name)}
					<div className={showName == true ? "" : "d-none"}><span>{thisUser.name}</span> <input type="checkbox" onChange={(e) => hideUserInfo(e, "name")} title="check to hide information" /></div>
					<div><span>{thisUser.email}</span> <input type="checkbox" onChange={(e) => hideUserInfo(e, "email")} title="check to hide information" /></div>
					<div><span>{thisUser.password}</span> <input type="checkbox" onChange={(e) => hideUserInfo(e, "password")} title="check to hide information" /></div>
					<hr></hr>
				</div>
			))
			}
			<button className="btn btn-success" onClick={(e) => hideUserInfo(e, "All")} >Toggle All Info</button>
		</div>
	);
};

export default Home;
