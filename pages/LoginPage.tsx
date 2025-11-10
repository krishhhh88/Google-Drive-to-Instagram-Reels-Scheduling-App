import React, { useState } from 'react';
import IconGoogleDrive from '../components/icons/IconGoogleDrive';
import IconInstagram from '../components/icons/IconInstagram';
import IconSpinner from '../components/icons/IconSpinner';
import IconGoogle from '../components/icons/IconGoogle';

interface LoginPageProps {
    onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleAuthAction = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            onLogin();
            // No need to set isLoading to false as the component will unmount
        }, 1500);
    };
    
    const handleGoogleAuth = () => {
        setIsLoading(true);
        setTimeout(() => {
            onLogin();
        }, 1500);
    }

    const primaryButtonText = isSignUp ? 'Sign Up' : 'Sign In';
    const loadingButtonText = isSignUp ? 'Signing Up...' : 'Signing In...';

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-brand-purple via-brand-red to-brand-yellow p-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-8 animate-fade-in">
                <div className="text-center">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                       <IconGoogleDrive className="w-12 h-12" />
                       <span className="text-4xl font-bold text-gray-400 dark:text-gray-500">&rarr;</span>
                       <IconInstagram className="w-12 h-12" />
                    </div>
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">InstaDrive Scheduler</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {isSignUp ? 'Create an account to start scheduling' : 'Welcome back! Please sign in.'}
                    </p>
                </div>
                
                <form className="space-y-6" onSubmit={handleAuthAction}>
                    {isSignUp && (
                         <div>
                            <label htmlFor="name" className="sr-only">Full Name</label>
                            <input id="name" name="name" type="text" required className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-purple focus:ring-brand-purple" placeholder="Full Name" />
                        </div>
                    )}
                    <div>
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input id="email-address" name="email" type="email" autoComplete="email" required className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-purple focus:ring-brand-purple" placeholder="Email address" />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input id="password" name="password" type="password" autoComplete="current-password" required className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-purple focus:ring-brand-purple" placeholder="Password" />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-brand-purple focus:ring-brand-purple border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-brand-purple hover:text-brand-red">Forgot your password?</a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" disabled={isLoading} className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-brand-red to-brand-yellow hover:from-brand-red hover:to-brand-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed">
                            {isLoading ? (
                                <>
                                    <IconSpinner className="w-5 h-5 mr-2" />
                                    {loadingButtonText}
                                </>
                            ) : (
                                primaryButtonText
                            )}
                        </button>
                    </div>
                </form>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">Or continue with</span>
                    </div>
                </div>

                <div>
                     <button onClick={handleGoogleAuth} disabled={isLoading} className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple disabled:opacity-75 disabled:cursor-not-allowed">
                        <IconGoogle className="w-5 h-5 mr-2" />
                        Sign in with Google
                    </button>
                </div>
                
                <div className="text-sm text-center">
                    <button onClick={() => setIsSignUp(!isSignUp)} className="font-medium text-brand-purple hover:text-brand-red">
                        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;