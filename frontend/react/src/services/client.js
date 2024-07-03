import axios from 'axios';

export const getCustomers = async () => {
    try {
        return await axios.get(
            `http://localhost:8080/api/vi/customers`
        )
    } catch (e) {
        throw e;
    }
}

