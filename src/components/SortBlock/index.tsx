import { useState } from 'react'
import './style.scss'
import { useDispatch } from "react-redux";
import { sortAutos } from '../../redux/actions/autos';
function SortBlock() {
    const dispatch = useDispatch();
    const [sortByYearAscending, setSortByYearAscending] = useState(true);
    const [sortByPriceAscending, setSortByPriceAscending] = useState(true);
    const sortByYear = () => {
        if (sortByYearAscending) {
            const setting = {
                sortBy: 'year_asc',
            }
            dispatch(sortAutos(setting))

        } else {
            const setting = {
                sortBy: 'year_desc',
            }
            dispatch(sortAutos(setting))

        }
        setSortByYearAscending(!sortByYearAscending);
        setSortByPriceAscending(true);
    };
    const sortByPrice = () => {
        if (sortByPriceAscending) {
            const setting = {
                sortBy: 'price_asc',
            }
            dispatch(sortAutos(setting))
        } else {
            const setting = {
                sortBy: 'price_desc',
            }
            dispatch(sortAutos(setting))
        }
        setSortByPriceAscending(!sortByPriceAscending);
        setSortByYearAscending(true);
    };
    return (
        <div className='sort'>
            <div className="sort__parm" onClick={sortByYear}>Год
                <img className={`sort__arrow  ${sortByYearAscending && 'sort__arrow-up'}`} src="./right-arrow.svg" alt="arrow" />
            </div>
            <div className="sort__parm" onClick={sortByPrice}>Цена
                <img className={`sort__arrow  ${sortByPriceAscending && 'sort__arrow-up'}`} src="./right-arrow.svg" alt="arrow" />
            </div>
        </div>
    );
}

export default SortBlock;