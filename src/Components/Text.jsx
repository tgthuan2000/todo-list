const Text = ({ children }) => {
	return (
		<div className='txt-wrap'>
			<p>{children}</p>
			<div>
				<span>Sửa</span>
				{' | '}
				<span>Xoá</span>
			</div>
		</div>
	);
};

export default Text;
