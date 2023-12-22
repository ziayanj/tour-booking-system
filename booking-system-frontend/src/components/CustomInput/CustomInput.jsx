import { Form, Input } from 'antd';

import './CustomInput.scss';

const CustomInput = ({ label, name, type, errMessage, addonBefore }) => {
  return (
    <div>
      <Form.Item
        label={label}
        name={name}
        rules={[{ required: true, message: errMessage || `Please input your ${name}`}]}
      >
        <Input size='large' type={type} addonBefore={addonBefore} />
      </Form.Item>
    </div>
  );
};

export default CustomInput;
