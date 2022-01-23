import { useState } from 'react';
import './app.css';
import Input from './Components/Input';
import Text from './Components/Text';

function App() {
	const [isShow, setIsShow] = useState(false);
	return (
		<div className='root-container'>
			<button className='btn' onClick={() => setIsShow(!isShow)}>
				{!isShow ? 'Thêm' : 'Huỷ'}
			</button>
			<div className='wraper'>
				{!isShow ? (
					<div className='wrap'>
						{/* Chế độ hiển thị */}
						{Array.from(new Array(5)).map((x) => (
							<Text />
						))}
					</div>
				) : (
					<>
						{/* Ché độ chỉnh sửa */}
						<button className='btn' style={{ marginBottom: 5 }}>
							+
						</button>
						<div className='wrap'>
							{Array.from(new Array(5)).map((x) => (
								<Input />
							))}
						</div>
						<button className='btn' style={{ width: '100%' }}>
							Save
						</button>
					</>
				)}
			</div>
		</div>
	);
}

export default App;
