import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import CarCard from '../CarCard'
import { saveAllAutos } from '../../redux/actions/autos'
import { getAllAutos } from '../../api'
import AutoType from '../../interfaces/AutoType'
import SortBlock from '../SortBlock';
import './style.scss'
function Main() {
    const dispatch = useDispatch();
    const items = useSelector((state: { autos: AutoType[] }) => state.autos);
    const [autos, setAutos] = useState(items)
    const fetchAutos = async () => {
        const autos = await getAllAutos()
        dispatch(saveAllAutos(autos))
    }
    useEffect(() => {
        fetchAutos()
    }, [])

    useEffect(() => {
        setAutos([...items]);
    }, [items])


    return (
        <div className='main'>
            <div className="main__container">
                <div className='main__title' >Найдено: {items ? items.length : 0} автомобилей</div>
                <SortBlock />
                <div className="main__cards">
                    {autos.map((item) =>
                        <CarCard auto={item} key={item.id} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Main