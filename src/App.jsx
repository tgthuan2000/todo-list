import { useRef, useState } from 'react';
import './app.css';
import Input from './Components/Input';
import Text from './Components/Text';

let count = 0;
function App() {
	count = count + 1;
	const [isShow, setIsShow] = useState(false);
	const [todos, setTodos] = useState([
		{ id: Math.random(), val: 'Hồ Thị Thơm' },
		{ id: Math.random(), val: 'Trần Gia Thuận' },
	]);
	const [newTodos, setNewTodos] = useState(null);
	const inputRefs = useRef(null);

	const handleSaveClick = () => {
		setTodos(inputRefs.current.filter((i) => i.val.trim() !== ''));
		setIsShow(!isShow);
	};

	const handleShowClick = () => {
		setIsShow(!isShow);
		setNewTodos(!isShow ? todos : null);
		inputRefs.current = !isShow ? [...todos] : null;
	};

	const handleAddClick = () => {
		setNewTodos([...newTodos, { id: Math.random(), val: '' }]);
	};

	const handleChange = (id, index, val) => {
		const temps = [...inputRefs.current];
		temps.splice(index, 1, { id, val });
		inputRefs.current = temps;
	};

	return (
		<div className='root-container'>
			<h4 style={{ marginBottom: 10 }}>Số lần Re-render: {count}</h4>
			<button className='btn' onClick={handleShowClick}>
				{!isShow ? 'Thêm hoặc chỉnh sửa' : 'Huỷ'}
			</button>
			<div className='wraper'>
				{!isShow ? (
					<div className='wrap'>
						{/* Chế độ hiển thị */}
						{todos.map(({ id, val }, index) => (
							<Text key={id}>{index + 1 + '. ' + val}</Text>
						))}
					</div>
				) : (
					<>
						{/* Ché độ chỉnh sửa */}
						<button
							className='btn'
							style={{ marginBottom: 5 }}
							onClick={handleAddClick}>
							+
						</button>
						<div className='wrap'>
							{newTodos.map(({ id, val }, index) => (
								<Input
									key={id}
									val={val}
									onChange={(newVal) => handleChange(id, index, newVal)}
								/>
							))}
						</div>
						<button className='btn' style={{ width: '100%' }} onClick={handleSaveClick}>
							Lưu
						</button>
					</>
				)}
			</div>
		</div>
	);
}

export default App;
