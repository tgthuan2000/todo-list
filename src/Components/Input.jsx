const Input = ({ id, val, index, onChange, todos }) => {
	const handleChange = (e) => {
		const temps = [...todos];
		temps.splice(index, 1, { id, val: e.target.value });
		onChange(temps);

		// onChange(
		// 	todos.map((x, i) => {
		// 		if (index === i) x.val = e.target.value;
		// 		return x;
		// 	})
		// );
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
