import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../actions/themeActions';

const ThemeToggler = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(state => state.isDarkTheme);

    return (
        <div style={{
            background: isDarkTheme ? '#333' : '#fff',
            color: isDarkTheme ? '#fff' : '#000',
            padding: '10px',
            borderRadius: '5px',
            textAlign: 'center'
        }}>
            <h1>Текущая тема: {isDarkTheme ? 'Темная' : 'Светлая'}</h1>
            <button onClick={() => dispatch(toggleTheme())}>
                Переключить тему
            </button>
        </div>
    );
};

export default ThemeToggler;