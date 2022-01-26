const Input = ({ placeHodler, val, onChange, inputRef, required, type = 'text' }) => {
	return (
		<input
			required={required}
			ref={inputRef}
			placeholder={placeHodler}
			autoFocus
			defaultValue={val}
			onChange={(e) => onChange?.(e.target.value)}
			className='input'
			type={type}
		/>
	);
};

export default Input;
