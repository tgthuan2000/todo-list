import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../Components/Input';
import { random } from '../features/kiemTra';

const Exam = () => {
	const numRef = useRef(null);
	const timeRef = useRef(null);
	const Q = useSelector((state) => state.cauHoi);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const id = (Math.random() * 100000).toFixed(0);
		dispatch(random({ id, num: numRef.current.value, time: timeRef.current.value, data: Q }));
		navigate(id);
	};

	return (
		<div className='root-container'>
			<Link to='/' className='btn'>
				Quay lại
			</Link>
			<div className='wraper'>
				<h3 className='title'>Thiết lập</h3>
				<form onSubmit={handleSubmit}>
					<div className='row'>
						<div className='col-6'>
							<Input
								placeHodler='Số lượng câu hỏi'
								inputRef={numRef}
								required
								type='number'
							/>
						</div>
						<div className='col-6'>
							<Input
								placeHodler='Thời gian mỗi câu (s)'
								inputRef={timeRef}
								required
								type='number'
							/>
						</div>
					</div>
					<button type='submit' className='btn full-width mt-1'>
						Bắt đầu
					</button>
				</form>
			</div>
		</div>
	);
};

export default Exam;
