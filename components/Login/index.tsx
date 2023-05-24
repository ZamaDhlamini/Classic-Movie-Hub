import { useEffect, useState } from "react";
import { useUsers } from "../../providers/users";
import { Form, Input, Button } from "antd";
import { IUser } from "../../providers/users/context";
import styles from './Login.module.css';

const LoginSignPage: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { createUser } = useUsers();

  const onFinish = async (values: IUser) => {
    console.log("Received values:", values);
    if (createUser) {
      createUser(values);
    } else {
      console.log("Failed to create person");
      alert("Failed to create person");
    }
  };

  return (
    <Form onFinish={onFinish} className={styles.loginBox}>
      <div className={styles.Inputs}>

      <Form.Item label="EmailAddress" name="EmailAddress" rules={[{ required: true, message: "Please enter your email" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="Password" rules={[{ required: true, message: "Please enter your password" }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item label="UserName" name="UserName" rules={[{ required: true, message: "Please enter your username" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="SurName" name="SurName" rules={[{ required: true, message: "Please enter your surname" }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="PhoneNumber"
        rules={[{ required: true, message: "Please enter your phone number" }]}
        >
        <Input />
      </Form.Item>
      <Form.Item label="Name" name="Name" rules={[{ required: true, message: "Please enter your name" }]}>
        <Input />
      </Form.Item>
        </div>
      <Form.Item>
        <div className={styles.button}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default LoginSignPage;
