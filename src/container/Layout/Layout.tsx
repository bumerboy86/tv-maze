import { Outlet, useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearChanels, getShanelsBase } from '../../store/tvmaze/tvmaze.slice';
import { shallowEqual } from 'react-redux';
import './Layout.css';

const Layout = () => {
    const { loading, shanels } = useAppSelector((state) => state.shanel, shallowEqual);
    const dispatch = useAppDispatch();
    const navigation = useNavigate();
    const chanelClickHandler = (id: string) => {
        dispatch(clearChanels());
        navigation(`/tv-maze/shows/${id}`);
    }

    return (
        <div className="layout">
            <nav>
                <header>
                    <h2 className='title' onClick={() => navigation('/tv-maze')}>TV SHOWS</h2>
                    <div className={`loaded ${loading && 'isloading'}`}></div>
                </header>
            </nav>
            <div className="inputbox">
                <input className='userInput' placeholder='Enter name of shanel' type="text" onChange={e => dispatch(getShanelsBase(e.target.value))} />
                {shanels.length > 0 ? <div className="fastSearch">
                    {shanels.map(item => {
                        return (
                        <p key={item.show.id} onClick={() => chanelClickHandler(`${item.show.id}`)}>{item.show.name}</p>
                        )
                    })}
                </div> : <></>}
            </div>
            <div className='outletBox'>
                <Outlet />
            </div>
        </div>
    )
}

export {Layout};