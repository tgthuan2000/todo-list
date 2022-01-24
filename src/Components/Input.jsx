const Input = ({ placeHodler, val, onChange, focus }) => {
	return (
		<input
			placeholder={placeHodler}
			autoFocus={focus}
			defaultValue={val}
			onChange={(e) => onChange(e.target.value)}
			className='input'
		/>
	);
};

export default Input;
