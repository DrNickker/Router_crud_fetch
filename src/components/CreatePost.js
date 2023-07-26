import React,{ useState } from 'react'
import {NavLink} from 'react-router-dom'
import video from '../imgs/video.svg'
import pencilregular from '../imgs/pencilregular.svg'
import cinema from '../imgs/cinema.svg'
import ellipsis from '../imgs/ellipsis.svg'
import exit from '../imgs/exit.svg'
import Profile from '../imgs/Profile.png'


export default function CreatePost() {
    const [form, setForm] = useState({
        id: '',
        content: ''})
    
    const handleChange = (e) => {
        const {value} = e.target
        setForm(prev => ({...prev, id: 0, content: value}))
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
        <h1>Страница создания</h1>
        <form>
            <div className="block-comment">
                <div className="tops-create">
                    <ul className="list-btns-create">
                        <li>
                            <img src={pencilregular} alt="pencilregular" width={15} className="like"/>
                            Публикация
                        </li>
                        <li>
                        <img src={video} alt="video" width={15} className="like"/>
                            Фото/видео
                        </li>
                        <li>
                            <img src={cinema} alt="cinema" width={15} className="like"/>
                            Прямой эфир
                        </li>
                        <li>
                            <img src={ellipsis} alt="ellipsis" width={15} className="like"/>
                            Ещё
                        </li>
                    </ul>
                    <button className="exit">
                        <NavLink to='/' exact><img src={exit} alt="exit" width={15} className="like"/></NavLink>
                    </button>
                </div>
                <span className="article">
                    <img className="avatar" src={Profile} alt="avatar" width={25}/>
                    <textarea value={form.content} onChange={handleChange} />
                </span>
                <div className="create">
                    <NavLink className="button-create" to='/' exact onClick={handleSubmit}>Опубликовать</NavLink>
                </div>
            </div>
        </form>
        </div>
    )
}