import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Input from '../Components/Input'
import Text from '../Components/Text'
import { sua, them, xoa } from '../features/cauHoi'

function Home() {
	const [isAdd, setIsAdd] = useState(false)
	const [editMode, setEditMode] = useState(null)
	const Q = useSelector((state) => state.cauHoi)
	const dispatch = useDispatch()

	const [dapAnSai, setDapAnSai] = useState([])
	const cauHoiRef = useRef()
	const dapAnDungRef = useRef()
	const dapAnSaiRef = useRef([])

	// Thêm + quay lại
	const handleAdd = () => {
		setIsAdd(!isAdd)
		cauHoiRef.current = null
		dapAnDungRef.current = null
		dapAnSaiRef.current = !isAdd ? [''] : []
		setDapAnSai(dapAnSaiRef.current)
		setEditMode(null)
	}

	// Sửa
	const handleSua = (data, index) => {
		setIsAdd(!isAdd)
		setEditMode({ index, data })

		dapAnSaiRef.current = data.cauSai
		setDapAnSai(dapAnSaiRef.current)
	}

	// xoá
	const handleXoa = (index) => {
		dispatch(xoa(index))
	}

	useEffect(() => {
		isAdd && cauHoiRef.current?.focus()
	}, [isAdd])

	// sự kiện
	const handleChangeText = (index, val) => {
		const temps = [...dapAnSaiRef.current]
		temps.splice(index, 1, val)
		dapAnSaiRef.current = temps
	}

	const handleThemDapAn = () => {
		dapAnSaiRef.current = [...dapAnSaiRef.current, '']
		setDapAnSai(dapAnSaiRef.current)
	}

	const handleSave = (isEdit) => {
		if (!cauHoiRef.current.value.trim()) {
			alert('Yêu cầu nhập câu hỏi!')
			cauHoiRef.current.focus()
			return
		}
		if (!dapAnDungRef.current.value.trim()) {
			alert('Yêu cầu nhập câu đúng!')
			dapAnDungRef.current.focus()
			return
		}
		if (dapAnSaiRef.current.filter((i) => !!i.trim()).length === 0) {
			alert('Yêu cầu nhập 1 câu sai!')
			return
		}

		const data = {
			id: isEdit ? editMode.data.id : Math.random(),
			cauHoi: cauHoiRef.current.value.trim(),
			cauDung: dapAnDungRef.current.value.trim(),
			cauSai: dapAnSaiRef.current.filter((txt) => !!txt.trim()),
		}

		dispatch(isEdit ? sua({ data, index: editMode.index }) : them(data))

		setIsAdd(!isAdd)
		setEditMode(null)
		cauHoiRef.current = null
		dapAnDungRef.current = null
		dapAnSaiRef.current = []
	}

	return (
		<div className='root-container'>
			<div>
				<button className='btn' onClick={handleAdd}>
					{!isAdd ? 'Thêm câu hỏi' : 'Quay lại'}
				</button>
				{Q.length > 0 && !isAdd && (
					<Link to='exam' className='btn ml-1'>
						Kiểm tra
					</Link>
				)}
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
									onDelClick={() => handleXoa(index)}
								>
									{`${index + 1}. ${item.cauHoi}`}
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
						<button className='btn btn-small fs-big' onClick={handleThemDapAn}>
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
								placeHodler={`Đáp án sai ${index + 1}`}
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
	)
}

export default Home
