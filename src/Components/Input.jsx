const Input = ({ id, val, onChange, todos }) => {
	const handleChange = (e) => {
		const index = todos.findIndex((x) => x.id === id);
		if (index !== -1)
			onChange(
				todos.map((x, i) => {
					if (index === i) x.val = e.target.value;
					return x;
				})
			);
	};

	return (
		<input
			placeholder='enter text'
			autoFocus
			value={val}
			onChange={handleChange}
			className='input'
		/>
	);
};

export default Input;
