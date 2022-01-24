const Input = ({ val, onChange }) => {
	return (
		<input
			placeholder='Enter text'
			autoFocus
			defaultValue={val}
			onChange={(e) => onChange(e.target.value)}
			className='input'
		/>
	);
};

export default Input;
