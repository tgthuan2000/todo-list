const Text = ({ children, onClick }) => {
	return (
		<div className='txt-wrap'>
			<p>{children}</p>
			<span onClick={onClick}>Sửa</span>
		</div>
	);
};

export default Text;
