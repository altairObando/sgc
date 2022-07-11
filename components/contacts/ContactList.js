import React from 'react'
import { Space, Table, Tag } from 'antd';
import Link from 'next/link'


/**
 * 
 * @param {String} _ Text
 * @param {Object} record Contact Record
 */
const renderName = (_, record) => 
    `${record.FirstName} ${record.MiddleName} ${record.Surname1}`;

const renderDate = (text) => {
    let fecha = new Date(text);
    return fecha.toLocaleDateString();
}

const renderTags = (_, { Tags }) => {
    return <>
    {
        (Tags || []).map(tag => <Tag color='orange' key={ tag }> {tag} </Tag>)
    }
    </>
}

const renderActions = (text, record) => {
    const uri = `/Contacts/${ record._id }`;
    return <Space>
        <Link href={uri} >
            <a> See Details</a>
        </Link>
    </Space>
}

const Columns = [
    { title: 'Id',          dataIndex: 'DNI',           key: 'id' },
    { title: 'Name',        dataIndex: 'FirstName',     key: 'firstName',   render: renderName },
    { title: 'Birthday',    dataIndex: 'Birthday',      key: 'birthday',    render: renderDate },
    { title: 'Nationality', dataIndex: 'Nationality',   key: 'nationality' },
    { title: 'Tags',        dataIndex: 'Tags',          key: 'Tags', render: renderTags },
    { title: 'Actions',     key: '_id',                 render: renderActions  },
]


const ContactList = (props) => {
    const { data } = props
    return <Table dataSource={data} columns={ Columns } rowKey="_id" />
}

export default ContactList