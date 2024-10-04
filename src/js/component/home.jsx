import React, { useEffect, useState } from "react";


const Home = () => {
	const [users, setUsers] = useState([]);
	const [input, setInput] = useState({ name: "", email: "", password: "" })
	const [showName, setShowName] = useState(true)
	const [showEmail, setShowEmail] = useState(true)
	const [showPassword, setShowPassword] = useState(true)

	const handleSubmit = (e) => {
		e.preventDefault();
		setUsers([...users, input])
		setInput({ name: "", email: "", password: "" })
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
				<input type="text" value={input.name} onChange={(e) => setInput({ name: e.target.value, email: input.email, password: input.password })} />
			</div>
			<div>
				<h1>Email</h1>
				<input type="email" value={input.email} onChange={(e) => setInput({ name: input.name, email: e.target.value, password: input.password })} />
			</div>
			<div>
				<h1>Password</h1>
				<input type="password" value={input.password} onChange={(e) => setInput({ name: input.name, email: input.email, password: e.target.value })} onKeyDown={(e) => e.key === 'Enter' ? handleSubmit(e) : ""} />
			</div>
			<button className="btn btn-info my-2" onClick={(e) => handleSubmit(e)}>Add User</button>
			{users?.map((thisUser, index) => (
				<div key={index}>
					<div className={showName == true ? "" : "d-none"}><span>{thisUser.name}</span> <input type="checkbox" onChange={(e) => hideUserInfo(e, "name")} title="check to hide information" /></div>
					<div className={showEmail == true ? "" : "d-none"}><span>{thisUser.email}</span> <input type="checkbox" onChange={(e) => hideUserInfo(e, "email")} title="check to hide information" /></div>
					<div className={showPassword == true ? "" : "d-none"}><span>{thisUser.password}</span> <input type="checkbox" onChange={(e) => hideUserInfo(e, "password")} title="check to hide information" /></div>
					<hr></hr>
				</div>
			))
			}
			<button className="btn btn-success" onClick={(e) => hideUserInfo(e, "All")} >Toggle All Info</button>
		</div>
	);
};

export default Home;
