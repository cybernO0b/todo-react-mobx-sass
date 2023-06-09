import React, {FC, useState, useEffect} from 'react';
import axios from 'axios'
import { IUser } from "../types/types";
import { Navigate, useParams } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

interface UserItemPageParams {
    id: string;
}

const UserItemPage:FC = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        fetchUser()
        
    }, [])
  
    async function fetchUser() {
        try {
          const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
          setUser(response.data)
        } catch (e) {
           alert(e)
        }
    }
    return (
        <div>
                <button onClick={() => navigate('/users')}>Back</button>
                <h1>Страница пользователя {user?.name}</h1>
                <div>{user?.email}</div>
        </div>
    )
}

export default UserItemPage;