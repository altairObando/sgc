import React from 'react';
import { Breadcrumb,PageHeader } from 'antd';
import GetPaths from './breadcumbRoutes';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Item } = Breadcrumb;

const CustomBread = ({ path }) => {
    return <Breadcrumb>
    {
        (path || []).map( i => {
            if(i.breadcrumbName == 'Home'){
                return <Item key={ i.path }>
                    <Link href='/'>
                        <a>
                            <HomeOutlined/>
                            <span>  Home</span>
                        </a>
                    </Link>
                </Item>
            }
            return <Item key={ i.path }>
                <Link href={`/${i.path}`}>
                    { i.breadcrumbName }
                </Link>
            </Item>
        })
    }
    </Breadcrumb>
}

const CustomPageHeader = ({ className, title, subTitle, children, extra=[] }) => {
    const [ routes, setRoutes ] = React.useState([]);
    React.useEffect(( ) => {
        let newRoute = GetPaths();
        setRoutes(newRoute);
    },[])

    return <PageHeader 
        className={ className || '' }
        style={{ backgroundColor: 'whitesmoke', borderRadius: '5px',border:' 1px solid rgb(222,226,230)' }}
        title={ title || '' }
        subTitle={ subTitle || '' }
        ghost={ false }
        avatar={{ icon: <UserOutlined />, size: 'large' }}
        breadcrumb={ <CustomBread path={routes} />} 
        extra={ extra }>
            { children }
        </PageHeader>
}

export default CustomPageHeader;