/**
 * Contiene una personalización para los nombre del breadcumb
 */
const customPahtsName = [
    { key : '/', title: 'Home' },
    { key : 'Contacts', title: 'Contact List'},
    { key : 'newContact', title: 'New Contact'},
]

/**
 * 
 * @param {pahtname} key Sirve para ubicar enla lista de rutas
 * @returns Object
 */
const getPathByKey = (key) => (customPahtsName.some( k => k.key == key) ? customPahtsName.filter( k => k.key == key)[0].title : key);


const GetPaths = () => window.location.pathname.split('/')
                      .map( (route, index) => {
                        let path = index == 0 && route === '' ? '/' : route;
                        let breadcrumbName = getPathByKey(path);
                        return ({ path, breadcrumbName})
                    });


export default GetPaths;