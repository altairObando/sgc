import { PlusOutlined } from '@ant-design/icons';
import { Input, Tag } from 'antd';
import React from 'react'

const TagSelect = (props) => {
    const [ childs, setChilds ] = React.useState([]);
    const [inputVisible, setInputVisible] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
    const inputRef = React.useRef(null);

    const handleClose = (removedTag) => {
        const newTags = childs.filter((tag) => tag !== removedTag);
        setChilds(newTags);
        if(typeof props.handleCustomChange === 'function'){
            props.handleCustomChange(newTags);
        }
    };
    const showInput = () => {
        setInputVisible(true);
        
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        if (inputValue && childs.indexOf(inputValue) === -1) {
            setChilds([...childs, inputValue]);
        }

        setInputVisible(false);
        setInputValue('');
        if(typeof props.handleCustomChange === 'function'){
            props.handleCustomChange([...childs, inputValue]);
        }
    };

    React.useEffect(() => {
        if (inputVisible) {
          inputRef.current?.focus();
        }
    }, [inputVisible]);
    
    React.useEffect(()=> {
        setChilds(props.customValue);
    },[props.customValue])

    const mapChilds = (tag) => {
        const tagElement = <Tag closable onClose={(e) => { e.preventDefault(); handleClose(tag)}}>{ tag } </Tag>;
        return <span key={ tag } style={{ display: 'inline-block' }}>{ tagElement }</span>;
    }

    const tags = childs.map(mapChilds);

  return <>
    <div style={{ marginBottom: 5 }}>
        { tags }
    </div>
    { inputVisible && (<Input ref={ inputRef } type='text' size='small' style={{ width: 78 }} onChange={ handleInputChange } onBlur={ handleInputConfirm }  onPressEnter={ handleInputConfirm }/>)}
    {!inputVisible && (<Tag onClick={ showInput } style={{ background: '#fff', borderStyle: 'dashed'}}> <PlusOutlined/> New Tag </Tag>)}
  </>
}

export default TagSelect