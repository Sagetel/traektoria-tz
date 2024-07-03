import axios from 'axios';

const API_URL = "https://test.tspb.su/test-task"
export async function getAllAutos() {
    try {
        const response = await axios.get(API_URL + '/vehicles', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 400) {
            alert('Произошла ошибка');
            console.log(response);
        }
        return response.data;
    } catch (error) {
        console.error('Ошибка получения данных', error);
        throw new Error(error);
    }
}