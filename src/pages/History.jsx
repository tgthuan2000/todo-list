import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { LOCALSTORAGE_HISTORY } from '../Constants'
import TextLink from '../Components/TextLink'
import { useEffect } from 'react'

const History = () => {
	const [histories, setHistories] = useState(
		JSON.parse(localStorage.getItem(LOCALSTORAGE_HISTORY)) || []
	)
	console.log(histories)
	const handleDel = (id) => {
		setHistories(histories.filter((i) => i.id !== id))
	}
	useEffect(() => {
		localStorage.setItem(LOCALSTORAGE_HISTORY, JSON.stringify(histories))
	}, [histories])

	return (
		<div className='root-container'>
			<div>
				<Link to='/exam' className='btn'>
					Quay lại
				</Link>
			</div>

			<div className='wraper'>
				{histories.length > 0 ? (
					<>
						<h3 className='title'>Lịch sử</h3>
						<ul>
							{histories.reverse().map((item) => (
								<li className='item-list' key={item.id}>
									<div
										style={{
											marginRight: 10,
											overflow: 'hidden',
											textOverflow: 'ellipsis',
										}}
									>
										<span>Ngày {new Date(item.date).toLocaleDateString()}</span>
										{' | '}
										<span>Id {item.id}</span>
									</div>
									<TextLink onDelClick={() => handleDel(item.id)} href={item.id}>
										<span className='correct'>{item.correct}</span>
										{' / '}
										<span className='num'>{item.num}</span>
									</TextLink>
								</li>
							))}
						</ul>
					</>
				) : (
					<p className='title'>Hiện tại không có lịch sử!</p>
				)}
			</div>
			<Outlet />
		</div>
	)
}

export default History
