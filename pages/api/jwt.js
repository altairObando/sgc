import { getToken } from "next-auth/jwt";


const secret = process.env.SECRET;

const gettoken =  async (req, response) => {
    const token = await getToken({ req, secret });
    response.send(JSON.stringify(token, null, 2));
}

export default gettoken; 