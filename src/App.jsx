import { useEffect, useRef, useState } from 'react';
import './app.css';
import Input from './Components/Input';
import Text from './Components/Text';
import { data } from './assets/data';

function App() {
	const [isAdd, setIsAdd] = useState(false);
	const [editMode, setEditMode] = useState(null);
	const [Q, setQ] = useState(data);

	const [dapAnSai, setDapAnSai] = useState([]);
	const cauHoiRef = useRef();
	const dapAnDungRef = useRef();
	const dapAnSaiRef = useRef([]);

	// Thêm
	const handleAdd = () => {
		setIsAdd(!isAdd);
		cauHoiRef.current = null;
		dapAnDungRef.current = null;
		dapAnSaiRef.current = !isAdd ? [''] : [];
		setDapAnSai(dapAnSaiRef.current);
		setEditMode(null);
	};

	// Sửa
	const handleSua = (data, index) => {
		setIsAdd(!isAdd);
		setEditMode({ index, data });

		dapAnSaiRef.current = data.cauSai;
		setDapAnSai(dapAnSaiRef.current);
	};

	useEffect(() => {
		isAdd && cauHoiRef.current?.focus();
	}, [isAdd]);

	// xoá
	const handleXoa = (index) => {
		const temps = [...Q];
		temps.splice(index, 1);
		setQ(temps);
	};

	// sự kiện
	const handleChangeText = (index, val) => {
		const temps = [...dapAnSaiRef.current];
		temps.splice(index, 1, val);
		dapAnSaiRef.current = temps;
	};

	const handleThemDapAn = () => {
		dapAnSaiRef.current = [...dapAnSaiRef.current, ''];
		setDapAnSai(dapAnSaiRef.current);
	};

	const handleSave = (isEdit) => {
		const data = {
			id: isEdit ? editMode.data.id : Math.random(),
			cauHoi: cauHoiRef.current.value.trim(),
			cauDung: dapAnDungRef.current.value.trim(),
			cauSai: dapAnSaiRef.current.filter((txt) => txt.trim() !== ''),
		};

		setQ(
			isEdit
				? () => {
						const temps = [...Q];
						temps.splice(editMode.index, 1, data);
						return temps;
				  }
				: [...Q, data]
		);

		setIsAdd(!isAdd);
		setEditMode(null);
		cauHoiRef.current = null;
		dapAnDungRef.current = null;
		dapAnSaiRef.current = [];
	};

	return (
		<div className='root-container'>
			<div>
				<button className='btn' onClick={handleAdd}>
					{!isAdd ? 'Thêm câu hỏi' : 'Quay lại'}
				</button>
				{!isAdd && Q.length > 0 && <button className='btn ml-1'>Kiểm tra</button>}
			</div>
			{!isAdd ? (
				Q.length > 0 && (
					<div className='wraper'>
						{/* Chế độ hiển thị */}
						<h3 className='title'>Danh sách câu hỏi</h3>
						<div className='wrap'>
							{Q.map((item, index) => (
								<Text
									key={item.id}
									onEditClick={() => handleSua(item, index)}
									onDelClick={() => handleXoa(index)}>
									{index + 1 + '. ' + item.cauHoi}
								</Text>
							))}
						</div>
					</div>
				)
			) : (
				<div className='wraper'>
					{/* Ché độ chỉnh sửa */}
					<div className='header'>
						<Input
							placeHodler='Câu hỏi'
							val={editMode?.data.cauHoi}
							inputRef={cauHoiRef}
						/>
						<button className='btn' onClick={handleThemDapAn}>
							+
						</button>
					</div>

					<div className='wrap'>
						<Input
							placeHodler='Đáp án đúng'
							val={editMode?.data.cauDung}
							inputRef={dapAnDungRef}
						/>
						{dapAnSai.map((val, index) => (
							<Input
								key={index}
								val={val}
								placeHodler='Đáp án sai'
								onChange={(val) => handleChangeText(index, val)}
							/>
						))}
					</div>

					<button className='btn full-width' onClick={() => handleSave(!!editMode)}>
						Lưu
					</button>
				</div>
			)}
		</div>
	);
}

export default App;
