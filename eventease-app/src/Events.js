import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Events = ({ token }) => {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // Fetch events using the token
                const response = await axios.get('https://api.diu-server.net/v1/events', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(response.data);
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching events. Please try again.');
            }
        };

        fetchEvents();
    }, [token]);


    return (
        <div className="container">
            <br />
            <div className="row">
                <h1>Eventos</h1>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora inicio</th>
                        <th scope="col">Hora fin</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {events.map((event) => (
                        <tr key={event.id}>
                            <td>{event.name}</td>
                            <td>{event.description}</td>
                            <td>{event.date}</td>
                            <td>{event.start_time}</td>
                            <td>{event.end_time}</td>
                            <td>
                                <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                    <a className="btn btn-info">Editar</a>
                                    <a className="btn btn-danger">Eliminar</a>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <div className="row">
                <a className="btn btn-outline-success d-grid gap-2 col-6 mx-auto">Agregar evento</a>
            </div>
        </div>
    );
};

export default Events;
