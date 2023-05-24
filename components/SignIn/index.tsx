import { useUsers } from "../../providers/users";
import { Form, Input, Button } from "antd";
import { ILogin } from "../../providers/users/context";
import styles from './SignIn.module.css';

const SignIn: React.FC = () => {
  const { login } = useUsers();

  const onFinish = async (values: ILogin) => {
    console.log("Received values:", values);
    if (login) {
      login(values);
    } else {
      console.log("Failed to logIn");
      alert("Failed to Login");
    }
  };

  return (
    <Form onFinish={onFinish} className={styles.signInBox}>
  <div className={styles.InputsContainer}>
    <Form.Item name="userNameOrEmailAddress" rules={[{ required: true, message: "Please enter your email address or username" }]}>
      <Input placeholder="Email address or username" />
    </Form.Item>
    <Form.Item name="Password" rules={[{ required: true, message: "Please enter your password" }]}>
      <Input.Password placeholder="Password" />
    </Form.Item>
  </div>
  <div className={styles.Buttons}>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Sign In
      </Button>
      <Button type="primary">Register</Button>
    </Form.Item>
  </div>
</Form>

  );
};

export default SignIn;
