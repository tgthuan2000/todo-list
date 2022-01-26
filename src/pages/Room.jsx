import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useClock from '../hooks/useClock';
import { next } from '../features/kiemTra';

const WAITING_TIME = 5;

const Room = () => {
	const [dapAn, setDapAn] = useState(null);
	const [isBlock, setIsBlock] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { id, time, num, data, index } = useSelector((state) => state.kiemTra);
	const { clock, isOver, reset, set } = useClock(time);

	const handleCheck = (i) => {
		if (!isOver && !isBlock) {
			if (dapAn === null && clock > 5) {
				set(WAITING_TIME);
			}
			setDapAn(i);
		}
	};

	useEffect(() => {
		id === null && navigate('/exam');
	}, []);

	useEffect(() => {
		let timeout = null;
		if (isOver && !isBlock) {
			timeout = setTimeout(() => {
				setIsBlock(true);
				if (index + 1 !== num) {
					set(WAITING_TIME);
					setTimeout(() => {
						setDapAn(null);
						setIsBlock(false);
						dispatch(next());
						reset();
					}, (WAITING_TIME + 1) * 1000);
				} else {
					alert('Kết thúc! Rời trang web sau 2 giây!');
					setTimeout(() => {
						navigate('/exam');
					}, 2000);
				}
			}, 1000);
		}
		return () => timeout && clearTimeout(timeout);
	}, [isOver, isBlock]);

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
							<b className={`time${!isBlock && clock <= 5 ? ' danger' : ''}`}>
								{clock}
							</b>
						</div>
						<div className='grid-2'>
							{data[index]?.dapAn.map((x, i) => (
								<button
									key={i}
									onClick={() => handleCheck(i)}
									className={`btn btn-small${isBlock ? ' btn-block' : ''}${
										dapAn === i ? ' btn-active' : ''
									}${
										isBlock && data[index].cauDung === i ? ' btn-success' : ''
									}`}>
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
