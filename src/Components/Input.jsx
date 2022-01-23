const Input = ({ val, onChange }) => {
	return (
		<input
			placeholder='Enter text'
			autoFocus
			value={val}
			onChange={(e) => onChange(e.target.value)}
			className='input'
		/>
	);
};

export default Input;
