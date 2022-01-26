import { Link } from 'react-router-dom';
import Input from '../Components/Input';

const Exam = () => {
	return (
		<div className='root-container'>
			<Link to='/' className='btn'>
				Quay lại
			</Link>
			<div className='wraper'>
				<h3 className='title'>Thiết lập</h3>
				<div className='row'>
					<div className='col-6'>
						<Input placeHodler='Số lượng câu hỏi' required type='number' />
					</div>
					<div className='col-6'>
						<Input placeHodler='Thời gian mỗi câu (s)' required type='number' />
					</div>
				</div>
				<Link to='/room' className='btn full-width mt-1'>
					Bắt đầu
				</Link>
			</div>
		</div>
	);
};

export default Exam;
