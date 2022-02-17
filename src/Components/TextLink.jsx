import { Link } from 'react-router-dom'

const TextLink = ({ children, onDelClick, href = '/' }) => {
	return (
		<div className='txt-wrap'>
			<p>{children}</p>
			<div>
				<Link className='text-link' to={href}>
					Xem
				</Link>
				{' | '}
				<span onClick={onDelClick}>Xóa</span>
			</div>
		</div>
	)
}

export default TextLink
