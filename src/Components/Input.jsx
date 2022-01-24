const Input = ({ placeHodler, val, onChange }) => {
	return (
		<input
			placeholder={placeHodler}
			autoFocus
			defaultValue={val}
			onChange={(e) => onChange(e.target.value)}
			className='input'
		/>
	);
};

export default Input;
