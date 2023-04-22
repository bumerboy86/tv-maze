import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getShanelId } from '../../store/tvmaze/tvmazeApi/ActionCreaters';
import {useEffect} from 'react';
import './ShowShanel.css';

const ShowShanel = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const { shanel } = useAppSelector((state) => state.shanel);
    const data = shanel?.summary;

    useEffect(() => {
        dispatch(getShanelId(`${id}`))
    }, [dispatch, id])

    return (
        <>
        {
        shanel && <div className='chanelShow'>
            <p>ID: {shanel?.id}</p>
            <p>Наименование: {shanel?.name}</p>
            <p>Язык: {shanel?.language}</p>
            {shanel?.image ? <img src={shanel?.image.medium} alt={shanel?.name} /> : <p>No image</p>}
            {data ? <>
            <p>Описание:</p>
            <div dangerouslySetInnerHTML={{__html: data}} />
            </> : undefined}
        </div>
        }
        </>
    )
}

export {ShowShanel};