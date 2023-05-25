import { useUsers } from "../../providers/users";
import { Form, Input, Button } from "antd";
import { ILogin } from "../../providers/users/context";
import styles from './SignIn.module.css';
import Link from "next/link";

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
        <><div className={styles.signInHeading}>
          <h1>Log In</h1>
      </div><Form onFinish={onFinish} className={styles.signInBox}>
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
                      <Link href='/Login'>
                      <Button type="primary">Register</Button>
                      </Link>
                  </Form.Item>
              </div>
          </Form></>

  );
};

export default SignIn;
