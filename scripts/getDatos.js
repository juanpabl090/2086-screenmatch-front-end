// URL base da API
const baseURL = 'http://localhost:8081';

export default async function getDatos(endpoint) {
    try {
        const response = await fetch(`${baseURL}${endpoint}`);
        return await response.json();
    } catch (error) {
        console.error('Error al ingresar al endpoint /series/top5:', error);
    }
}
