import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const url = '/api/users'
            const fetch = await axios.get(url);
            const fetchData = fetch.data;
            setUsers(fetchData)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>
        <div>
            <section className="row-section">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center"><span>List of users</span>Created with <i
                            className="fa fa-heart"></i> by yemiwebby</h2>
                    </div>
                        <div className={'row'}>
                            {users.map(user =>
                                <div className="col-md-10 offset-md-1 row-block" key={user.id}>
                                    <ul id="sortable">
                                        <li>
                                            <div className="media">
                                                <div className="media-left align-self-center">
                                                    <img src={user.imageURL} alt={"salut"}/>
                                                </div>
                                                <div className="media-body">
                                                    <h4>{user.name}</h4>
                                                    <p>{user.description}</p>
                                                </div>
                                                <div className="media-right align-self-center">
                                                    <a href="#" className="btn btn-default">Contact Now</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default Users;