import React from 'react';
import LoginForm from '../../components/forms/LoginForm';
import { ThemeToggle } from '@/components/theme-toggle'; // Import your ThemeToggle component

import { Metadata } from "next"
import Image from 'next/image';


export const metadata: Metadata = {
  title: {
    default: "Login",
    template: `%s - steel`,
  },
  description: "Welcome back to our website, login to get more infos",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}


const LoginPage = () => {
  const showThemeSwitcher = true;
  return (


    <div className="flex h-screen items-center justify-center">
      <div className="relative flex w-full">
        {/* Left part: Form */}
        <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
          <LoginForm />
        </div>
        {/* Right part: Image */}
        <div className="relative hidden w-1/2 lg:block" style={{ height: '100vh' }}>
          <Image
            src="/inspiring-login.jpg"
            alt="Inspiring Login photo, stay calm and ready for the updates"
            width={1000}
            height={1000}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: 'center center' }}
            role="presentation"
          />
          {/* Conditionally render ThemeToggle based on showThemeSwitcher prop */}
          {showThemeSwitcher && (
            <div className="fixed bottom-4 left-4 z-10">
              {/* Render your ThemeToggle component */}
                <ThemeToggle />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
