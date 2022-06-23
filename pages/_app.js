import '../styles/globals.css'
import 'antd/dist/antd.css';

import ViewPort from '../components/ViewPort';
function MyApp({ Component, pageProps }) {
  return <ViewPort>
      <Component {...pageProps} />
  </ViewPort>
}

export default MyApp
