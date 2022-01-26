import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Room = () => {
	const kiemTra = useSelector((state) => state.kiemTra);
	const navigate = useNavigate();

	useEffect(() => {
		kiemTra.id === null && navigate('/exam');
	}, []);

	return (
		<div>
			<div className='header-room'>
				<div>
					<p>Mã phòng: {kiemTra.id}</p>
					<p>Tổng số câu: {kiemTra.num}</p>
					<p>Thời gian trả lời mỗi câu: {kiemTra.time} giây</p>
				</div>
				<Link className='btn btn-small' to='/exam'>
					Thoát
				</Link>
			</div>
			<div className='root-container min-vh-80'>
				{true && (
					<div className='wraper'>
						<div className='dflex-bc mb-3-2'>
							<h4 className='fw-500'>{`Câu số 1: ${kiemTra.data[0]?.cauHoi}`}</h4>
							<b className='time'>{kiemTra.time}</b>
						</div>
						<div className='grid-2'>
							{kiemTra.data[0]?.dapAn.map((x, index) => (
								<button className='btn btn-small' key={index}>
									{x}
								</button>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Room;
