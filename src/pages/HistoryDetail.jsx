import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { LOCALSTORAGE_HISTORY } from '../Constants'

const HistoryDetail = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [data, setData] = useState({})

	useEffect(() => {
		const ids = JSON.parse(localStorage.getItem(LOCALSTORAGE_HISTORY)) || []
		const d = ids.find((i) => i.id === id)
		if (!d) navigate('..')
		setData(d)
		console.log(d)
	}, [])

	const handleClose = () => navigate('..')

	return (
		<div className='history-container'>
			<div className='history-wash' onClick={handleClose} />
			<div className='history-wrap'>
				<div className='history-header'>
					<span className='history-title'>Chi tiết phòng: {id}</span>
					<span className='history-close' onClick={handleClose}>
						X
					</span>
				</div>
				<div className='history-body'>
					<p>Thời gian trả lời mỗi câu: {data.time} giây</p>
					<p>Số lượng câu hỏi: {data.num}</p>
					<p>Số đáp án đúng: {data.correct}</p>
					<p>Chi tiết danh sách câu hỏi:</p>
					<div className='mt-1'>
						{data.data?.map(({ cauChon, cauHoi, cauDung, dapAn }, index) => (
							<div key={index} className='mb-1 ml-1'>
								<p>
									Câu số {index + 1}: {cauHoi}
								</p>
								{dapAn.map((d, i) => (
									<li
										className={`${i === cauChon ? 'choosen ' : ''}${
											i === cauDung ? 'correct' : ''
										} `}
									>
										{d}
									</li>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default HistoryDetail
