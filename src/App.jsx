import { useState } from 'react';
import './app.css';
import Input from './Components/Input';
import Text from './Components/Text';
import { data } from './assets/data';

function App() {
	const [isShow, setIsShow] = useState(false);

	return (
		<div className='root-container'>
			<div>
				<button className='btn' onClick={() => setIsShow(!isShow)}>
					{!isShow ? 'Thêm câu hỏi' : 'Quay lại'}
				</button>
				{!isShow && <button className='btn ml-1'>Kiểm tra</button>}
			</div>
			<div className='wraper'>
				{!isShow ? (
					<>
						{/* Chế độ hiển thị */}
						<h3 className='title'>Danh sách câu hỏi</h3>
						<div className='wrap'>
							{data.map(({ id, cauHoi }, index) => (
								<Text key={id}>{index + 1 + '. ' + cauHoi}</Text>
							))}
						</div>
					</>
				) : (
					<>
						{/* Ché độ chỉnh sửa */}
						<div className='header'>
							<Input placeHodler='Câu hỏi' />
							<button className='btn'>+</button>
						</div>

						<div className='wrap'>
							<Input placeHodler='Đáp án đúng' />
							<Input placeHodler='Đáp án sai' />
						</div>

						<button className='btn full-width' onClick={() => setIsShow(!isShow)}>
							Lưu
						</button>
					</>
				)}
			</div>
		</div>
	);
}

export default App;
