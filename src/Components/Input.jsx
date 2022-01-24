const Input = ({ placeHodler, val, onChange, inputRef }) => {
	return (
		<input
			ref={inputRef}
			placeholder={placeHodler}
			autoFocus
			defaultValue={val}
			onChange={(e) => onChange?.(e.target.value)}
			className='input'
		/>
	);
};

export default Input;
