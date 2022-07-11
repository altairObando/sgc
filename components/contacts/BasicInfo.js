import React from 'react'
import { Form, Input ,Row, Col, DatePicker, Radio, Select } from 'antd'
import moment from 'moment'
import { Context } from '../../components/contacts/contactContext'
import CountriesSelect from '../util/countriesSelect'
import TagSelect from '../util/tagSelect'
const { Item: FormInput } = Form
const dateFormat = 'DD/MM/YYYY';
const { Option } = Select;
const civilStatuses = [{id: 1, name: 'Single'}, { id: 2, name:'Married' }, { id:3, name:'Div0rced'} ]


const BasicInfo = () => {
    const [ context, setContext ]  = React.useContext(Context)
    const [ form ] = Form.useForm();
    // Store references
    React.useEffect(()=>{
        setContext({...context, 'formBasicInfo': form })
        window.formBasicInfo = form;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    React.useEffect( () => {
        form.setFieldsValue( context.initialValues )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context.initialValues])

    const handleCustomChange = (name, value) =>{
        let newValue = { [name] : value }
        form.setFieldsValue(newValue)
    }

    const civilOptions = civilStatuses.map((d) => <Option key={d.id}>{d.name}</Option>);

  return <Form 
        form={ form } 
        name='BasicInfo' 
        layout='vertical' 
        initialValues={{ 
            Birthday: moment('2015/01/01', dateFormat),
            Gender: 'F'
            }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xs={20} sm={16} md={12} lg={8} xl={8}>
            <FormInput label='National Id' name='DNI' rules={[{ required: true}]}>
                <Input />
            </FormInput>
            <FormInput label='First Name' name='FirstName' rules={[{ required: true}]}>
                <Input />
            </FormInput>
            <FormInput label='Middle Name' name='MiddleName'>
                <Input />
            </FormInput>
            <FormInput label='Surname' name='Surname1'>
                <Input />
            </FormInput>
            <FormInput label='Second Surname' name='Surname2'>
                <Input />
            </FormInput>
          </Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={8}>
            <FormInput label='Date of birth' name='Birthday' >
                <DatePicker 
                    allowClear 
                    format={dateFormat}
                    name='Birthday' 
                    style={{ width: '100%'}} 
                    />
            </FormInput>
            <FormInput label='Gender' name='Gender'>
                <Radio.Group buttonStyle='solid' onChange={ ({ target:{ value }}) => handleCustomChange('Gender', value)}>
                    <Radio.Button value='F'>Female</Radio.Button>
                    <Radio.Button value='M'>Male</Radio.Button>
                </Radio.Group>
            </FormInput>
            <FormInput label='Civil Status' name='CivilStatus'>
                <Select>
                    {civilOptions}
                </Select>
            </FormInput>
            <FormInput label='Nationality' name='Nationality'>
                <CountriesSelect placeholder= 'Select a Country' handleCustomChange={ (value) => handleCustomChange('Nationality', value ) } defaultValue={ context?.initialValues?.Nationality ?? '' } />
            </FormInput>
            <FormInput label='Tags' name='Tags' >
                <TagSelect handleCustomChange={ (value) => handleCustomChange('Tags', value) } defaultValue={ context?.initialValues?.Tags ?? [] }/>
            </FormInput>
          </Col>
      </Row>
  </Form>
}

export default BasicInfo