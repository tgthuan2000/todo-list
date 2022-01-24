const Text = ({ children, onEditClick, onDelClick }) => {
	return (
		<div className='txt-wrap'>
			<p>{children}</p>
			<div>
				<span onClick={onEditClick}>Sửa</span>
				{' | '}
				<span onClick={onDelClick}>Xoá</span>
			</div>
		</div>
	);
};

export default Text;
