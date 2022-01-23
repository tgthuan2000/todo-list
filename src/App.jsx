import { useState } from 'react';
import './app.css';
import Input from './Components/Input';
import Text from './Components/Text';

function App() {
	const [isShow, setIsShow] = useState(false);
	const [todos, setTodos] = useState([
		{ id: Math.random(), val: 'thom' },
		{ id: Math.random(), val: 'thuan' },
	]);
	const [newTodos, setNewTodos] = useState();

	const handleSaveClick = () => {
		setTodos(newTodos.filter((i) => i.val.trim() !== ''));
		setIsShow(!isShow);
	};

	const handleShowClick = () => {
		setIsShow(!isShow);
		setNewTodos(todos);
	};

	const handleAddClick = () => {
		setNewTodos([...newTodos, { id: Math.random(), val: '' }]);
	};

	return (
		<div className='root-container'>
			<button className='btn' onClick={handleShowClick}>
				{!isShow ? 'Thêm hoặc chỉnh sửa' : 'Huỷ'}
			</button>
			<div className='wraper'>
				{!isShow ? (
					<div className='wrap'>
						{/* Chế độ hiển thị */}
						{todos.map(({ id, val }) => (
							<Text key={id}>{val}</Text>
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
							{newTodos.map((item) => (
								<Input
									key={item.id}
									{...item}
									onChange={setNewTodos}
									todos={newTodos}
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
