import React from 'react';

// Import Custom Components
import AuthForm from '@/components/AuthForm';
import SocialAuthButtons from '@/components/SocialAuthButtons';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import shadcn/ui Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold tracking-tight">
              Welcome Back!
            </CardTitle>
            <CardDescription>
              Sign in to continue to your SwiftLogin dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <AuthForm />
            <SocialAuthButtons />
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;