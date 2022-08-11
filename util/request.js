import { server } from "./server";

const baseUri = `${server}/api/`;
const headers = { 'Content-Type': 'application/json' }

export const SaveEntity = async (uri, data ) => {
    const method =  'POST';
    const request = await fetch(`${baseUri}${uri}`, {
        method: method,
        headers: headers,
        body : JSON.stringify(data)
    });
    try {
        return { success: true , data: request.json() }
    } catch (error) {
        return { success : false, error }
    }
}

export const UpdateEntity = async (uri, data, id ) => {
    const method = 'PUT';
    const request = await fetch(`${baseUri}${uri}${id}`,{
        method: method,
        headers: headers,
        body: JSON.stringify(data)
    });
    try {
        return { success: true , data: request.json() }
    } catch (error) {
        return { success : false, error }
    }
}
