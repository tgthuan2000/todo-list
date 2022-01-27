import { Link } from 'react-router-dom';

const Room = () => {
	return (
		<div>
			<div className='header-room'>
				<div>
					<p>Mã phòng: 0</p>
					<p>Tổng số câu: 0</p>
					<p>Thời gian trả lời mỗi câu: 0 giây</p>
				</div>
				<Link className='btn btn-small' to='/exam'>
					Thoát
				</Link>
			</div>
			<div className='root-container min-vh-80'>
				<div className='wraper'>
					<div className='dflex-bc mb-3-2'>
						<h4 className='fw-500'>Câu số 1: Nội dung câu hỏi</h4>
						<b className='time ml-1'>0</b>
					</div>
					<div className='grid-2'>
						{Array.from(new Array(4)).map((x, index) => (
							<button className='btn btn-small' key={index}>
								Đáp án số {index + 1}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Room;
