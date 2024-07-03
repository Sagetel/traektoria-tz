import { useState } from 'react'
import './style.scss'
import AutoType from '../../interfaces/AutoType'
import { useDispatch } from "react-redux";
import { deleteByIdAutos, updateAuto } from '../../redux/actions/autos'
import MyInput from '../UI/MyInput';

function CarCard(props: { auto: AutoType }) {
    const { auto } = props;
    const colors: { [key: string]: string } = {
        red: 'Красный',
        black: 'Черный',
        white: 'Белый',
        blue: 'Синий',
        silver: 'Серебряный',
    }
    const dispatch = useDispatch();
    const [editModeOn, setEditModeOn] = useState(false);
    const [name, setName] = useState<string>(auto.name)
    const [model, setModel] = useState<string>(auto.model)
    const [price, setPrice] = useState<number>(auto.price)
    const handleDelete = () => {
        dispatch(deleteByIdAutos(auto.id))
    }
    const handleUpdate = () => {
        const newValue = {
            ...auto,
            name: name,
            model: model,
            price: price,
        }
        setEditModeOn(false)
        dispatch(updateAuto(newValue))
    }

    return (
        <div className='card'>
            {editModeOn ?
                <div className='card__inputs'>
                    <MyInput value={name} setStringState={setName} placeholder={'Марка'} />
                    <MyInput value={model} setStringState={setModel} placeholder={'Модель'} />
                </div>
                :
                <h2 className='card__field card__name'>{name} {model}</h2>
            }
            <div className='card__field'>Год: {auto.year}</div>
            <div className='card__field'>Цвет: {auto.color && colors[auto.color]}</div>
            {editModeOn ?
                <MyInput value={price} setNumberState={setPrice} placeholder={'Цена'} />
                :
                <div className='card__field'>Цена: {price.toLocaleString()}$</div>
            }
            <div className='card__bar'>
                <div className='card__delete' onClick={() => { handleDelete() }}>DELL</div>
                {editModeOn ?
                    <div className='card__edit' onClick={() => { handleUpdate() }}>SAVE</div> :
                    <div className='card__edit' onClick={() => { setEditModeOn(!editModeOn) }}>EDIT</div>
                }
            </div>
        </div>
    )
}

export default CarCard