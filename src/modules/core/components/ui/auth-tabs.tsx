import { Tab, Tabs } from '@nextui-org/react';
import React from 'react';
import LoginForm from './login-form';
import SignupForm from './signup-form';

export default function AuthTabs() {
  return (
    <Tabs
      aria-label="Options"
      color="success"
      defaultSelectedKey={'login'}
      classNames={{
        tab: 'font-medium',
        tabList: 'bg-default',
        cursor: 'bg-[#baff29]',
      }}
      fullWidth
    >
      <Tab key="login" title="Iniciar sesión" className="flex flex-col gap-5">
        <LoginForm />
      </Tab>
      <Tab key="register" title="Registrarse">
        <SignupForm />
      </Tab>
    </Tabs>
  );
}
