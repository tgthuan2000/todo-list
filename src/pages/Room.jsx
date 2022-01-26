import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useClock from '../hooks/useClock';
import { next } from '../features/kiemTra';

const Room = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id, time, num, data, index } = useSelector((state) => state.kiemTra);
	const { clock, isOver, reset } = useClock(time);

	const handleCheck = (i) => {
		if (!isOver) {
		}
		if (index + 1 !== num) dispatch(next());
		reset();
	};

	useEffect(() => {
		id === null && navigate('/exam');
	}, []);

	return (
		<div>
			<div className='header-room'>
				<div>
					<p>Mã phòng: {id}</p>
					<p>Tổng số câu: {num}</p>
					<p>Thời gian trả lời mỗi câu: {time} giây</p>
				</div>
				<Link className='btn btn-small' to='/exam'>
					Thoát
				</Link>
			</div>
			<div className='root-container min-vh-80'>
				{true && (
					<div className='wraper'>
						<div className='dflex-bc mb-3-2'>
							<h4 className='fw-500'>{`Câu số ${index + 1}: ${
								data[index]?.cauHoi
							}`}</h4>
							<b className='time'>{clock}</b>
						</div>
						<div className='grid-2'>
							{data[index]?.dapAn.map((x, index) => (
								<button
									onClick={() => handleCheck(index)}
									className='btn btn-small'
									key={index}>
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
