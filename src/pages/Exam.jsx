import { useEffect, useRef } from 'react';
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

	useEffect(() => {
		numRef.current?.focus();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const num = Number.parseInt(numRef.current.value);
		const time = Number.parseInt(timeRef.current.value);
		if (num > Q.length) {
			alert(`Só lượng câu hỏi vượt quá số lượng hiện có. Hiện có ${Q.length} câu hỏi!`);
			numRef.current.focus();
			return;
		}

		if (time < 5) {
			alert('Tối thiểu 5 giây');
			timeRef.current.focus();
			return;
		}

		const id = (Math.random() * 100000).toFixed(0);
		dispatch(
			random({
				id,
				num,
				time,
				data: Q,
			})
		);
		navigate('/room');
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
