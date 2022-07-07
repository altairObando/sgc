import { Select } from 'antd';
import React from 'react'

const TagSelect = (props) => {
    const [ childs, setChilds ] = React.useState([]);
    const handleChange = (value) => {
        setChilds([...childs, value ]);
        
        if(typeof props.handleCustomChange === 'function'){
            props.handleCustomChange(value);
        }
    }
    React.useEffect( () => {
        setChilds(props.defaultValue)
        console.log(props.defaultValue)
    }, [ props.defaultValue ])
  return <Select mode='tags' style={{ width: '100%' }} tokenSeparators={[',']} onChange={ handleChange } showArrow={false} notFoundContent={null}>
      { childs }
  </Select>
}

export default TagSelect