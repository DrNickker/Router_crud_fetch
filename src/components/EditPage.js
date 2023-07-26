import React,{ useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import useJsonFetch from '../hooks/useJsonFetch'
import png from '../imgs/png.svg'
import happy from '../imgs/happy.svg'
import gif from '../imgs/Gifs.svg'
import navigation from '../imgs/navigation.svg'
import frend from '../imgs/frend.svg'
import exit from '../imgs/exit.svg'
import Profile from '../imgs/Profile.png'

export default function EditPage({match}) {
    const [data] = useJsonFetch(process.env.REACT_APP_DATA_URL, [])
    const id = Number(match.params.id);

    const [form, setForm] = useState({
        id: id,
        content: ''})
       
    useEffect(()=> {
        if(data.length > 0) {
            let d = data.find(i => i.id = match.params.id)
            setForm(prev => ({...prev, content: d.content}))
        }
    }, [data, match.params.id])

    const handleChange = (e) => {
        const {value} = e.target
        setForm(prev => ({...prev, content: value}))
    }

    const handleSubmit = () => {
        fetch(process.env.REACT_APP_DATA_URL, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
    
    }

    return (
        <div>
            <h1>Карточка редактирования</h1>
            <form>
                <div className="block-comment">
                    <div className="create">
                        <button className="exit">
                            <NavLink to='/' exact><img src={exit} alt="exit" width={15} className="like"/></NavLink>
                        </button>
                    </div>
                    <div className="content">
                        <div className="head-content">
                            <img className="avatar" src={Profile} alt="avatar" width={25}></img>
                        </div>
                        <div className="text-content">
                            <textarea value={form.content} onChange={handleChange} /> {/* Сообщение поста */}
                        </div>    
                    </div>
                        <div className="tops">
                            <ul className="list-btns">
                                <li>
                                <img src={png} alt="video" width={15} className="like"/>
                                    Фото/видео
                                </li>
                                <li>
                                    <img src={happy} alt="cinema" width={15} className="like"/>
                                    Чувства/действия
                                </li>
                                <li>
                                    <img src={gif} alt="ellipsis" width={15} className="like"/>
                                    GIF
                                </li>
                                <li>
                                    <img src={navigation} alt="ellipsis" width={15} className="like"/>
                                    Отметить посещение
                                </li>
                                <li>
                                    <img src={frend} alt="ellipsis" width={15} className="like"/>
                                    Отметить друзей
                                </li>
                            </ul>
                        </div>
                        <div className="create">
                            <button className="button-create">
                                <NavLink className="button-create" to='/' exact onClick={handleSubmit}>Сохранить</NavLink>
                            </button>
                        </div>
                </div>
            </form>
        </div>
    )
}