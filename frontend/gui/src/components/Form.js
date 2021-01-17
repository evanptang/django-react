import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const CustomForm = (props) => {
  const [form] = Form.useForm();

  const formLayout = 'horizontal';

  const formItemLayout = {
        labelCol: {
        span: 4,
        },
        wrapperCol: {
        span: 14,
        },
    };
  const buttonItemLayout = {
        wrapperCol: {
        span: 14,
        offset: 4,
        },
    };



  const handleFormSubmit = (event, requestType, articleID) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;
    // eslint-disable-next-line
    switch(requestType) {
        case 'post':
            return axios.post('http://127.0.0.1:8000/api/',
            {title: title, content: content})
            .then(res => console.log(res))
            .catch(err => console.error(err))
        case 'put':
            return axios.put(`http://127.0.0.1:8000/api/${articleID}/`,
            {title: title, content: content})
            .then(res => console.log(res))
            .catch(err => console.error(err))

    }
  };

  
  return (
    <>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        onSubmitCapture={(event) => handleFormSubmit(
            event,
            props.requestType,
            props.articleID
        )} 
      >
        <Form.Item label="Title">
          <Input name="title" placeholder="Put a title here" />
        </Form.Item>
        <Form.Item label="Content">
          <Input name="content" placeholder="Enter some content ..." />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
            <Button type="primary" htmlType="submit">{props.btnText}</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CustomForm;