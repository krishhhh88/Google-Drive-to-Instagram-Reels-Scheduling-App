import React, { useState } from 'react';
// No 'axios' import needed!

// --- INLINE SVG PLACEHOLDERS ---
// The build environment couldn't find the icon files,
// so I am replacing them with inline SVGs to fix the error.

// Placeholder for IconGoogleDrive
const IconGoogleDrive: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
        <path fill="#4285F4" d="M34.1,4H13.9C6.8,4,4,6.8,4,13.9v20.2C4,41.2,6.8,44,13.9,44h20.2C41.2,44,44,41.2,44,34.1V13.9C44,6.8,41.2,4,34.1,4z"/>
        <path fill="#FFFFFF" d="M31.6,17.7H16.4c-1.9,0-3.5,1.6-3.5,3.5v15.6c0,1.9,1.6,3.5,3.5,3.5h15.2c1.9,0,3.5-1.6,3.5-3.5V21.2C35.1,19.3,33.5,17.7,31.6,17.7z"/>
        <path fill="#F4B400" d="M31.6,19.6h-15c-0.9,0-1.6,0.7-1.6,1.6v13.6c0,0.9,0.7,1.6,1.6,1.6h15c0.9,0,1.6-0.7,1.6-1.6V21.2C33.2,20.3,32.4,19.6,31.6,19.6z"/>
        <path fill="#0F9D58" d="M20,24.3h8c0.6,0,1,0.4,1,1v4c0,0.6-0.4,1-1,1h-8c-0.6,0-1-0.4-1-1v-4C19,24.7,19.4,24.3,20,24.3z"/>
        <path fill="#3E82F1" d="M19,32.3h10c0.6,0,1,0.4,1,1v2c0,0.6-0.4,1-1,1H19c-0.6,0-1-0.4-1-1v-2C18,32.7,18.4,32.3,19,32.3z"/>
    </svg>
);

// Placeholder for IconInstagram
const IconInstagram: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
        <radialGradient id="InstaGrad" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fd5"/>
            <stop offset=".328" stopColor="#ff543f"/>
            <stop offset=".348" stopColor="#fc5245"/>
            <stop offset=".504" stopColor="#e64771"/>
            <stop offset=".643" stopColor="#d53e91"/>
            {/* --- FIX: Changed stopGColor to stopColor --- */}
            <stop offset=".761" stopColor="#cc39a4"/>
            <stop offset=".841" stopColor="#c837ab"/>
            <stop offset="1" stopColor="#8f39ce"/>
        </radialGradient>
        <path fill="url(#InstaGrad)" d="M35.3,0H12.7C5.7,0,0,5.7,0,12.7v22.6C0,42.3,5.7,48,12.7,48h22.6c7,0,12.7-5.7,12.7-12.7V12.7C48,5.7,42.3,0,35.3,0z M24,38.3c-7.9,0-14.3-6.4-14.3-14.3S16.1,9.7,24,9.7S38.3,16.1,38.3,24S31.9,38.3,24,38.3z M38.1,12.5c-2.3,0-4.1-1.8-4.1-4.1s1.8-4.1,4.1-4.1s4.1,1.8,4.1,4.1S40.4,12.5,38.1,12.5z"/>
        <circle fill="#fff" cx="24" cy="24" r="9"/>
    </svg>
);

// Placeholder for IconSpinner (using Tailwind's animate-spin)
const IconSpinner: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        {...props}
        className={`animate-spin ${props.className || ''}`} 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
    >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

// Placeholder for IconGoogle
const IconGoogle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C41.002,34.221,44,28.718,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
    </svg>
);

// --- END OF INLINE SVGS ---

interface LoginPageProps {
    onLogin: () => void;
}

// DEFINE YOUR BACKEND URL
const BACKEND_URL = "https://instadrive-backend-gimini.vercel.app";

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // ADD STATE FOR INPUTS AND ERRORS
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // For signup
    const [error, setError] = useState<string | null>(null); // To show errors

    // THIS IS THE NEW API CALL FUNCTION using 'fetch'
    const handleAuthAction = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null); // Clear old errors

        try {
            // Note: 'name' is collected but not sent to your current backend.
            // Your backend 'signup' route only expects 'email' and 'password'.
            // This is fine, but something to be aware of.
            const payload = { email, password };
            let url = '';

            if (isSignUp) {
                url = `${BACKEND_URL}/api/signup`;
            } else {
                url = `${BACKEND_URL}/api/signin`;
            }

            // --- 1. MAKE THE API CALL WITH 'fetch' ---
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Tell server we're sending JSON
                },
                body: JSON.stringify(payload), // Convert JS object to JSON string
            });

            // --- 2. MANUALLY PARSE THE JSON RESPONSE ---
            const data = await response.json();

            // --- 3. 'fetch' USES 'response.ok' TO CHECK FOR SUCCESS ---
            if (response.ok) {
                // Successful login or signup (status 200-299)
                onLogin();
            } else {
                // Get error message from backend (e.g., "Invalid password")
                setError(data.error || "An unknown error occurred.");
            }

        } catch (err: any) {
            // This catches network errors (e.g., no internet)
            setError("An error occurred. Please check your connection.");
        } finally {
            setIsLoading(false); // Stop loading spinner
        }
    };
    
    // Google Auth (unchanged, still a simulation)
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
                       {/* --- REPLACED WITH INLINE SVG --- */}
                       <IconGoogleDrive className="w-12 h-12" />
                       <span className="text-4xl font-bold text-gray-400 dark:text-gray-500">&rarr;</span>
                       {/* --- REPLACED WITH INLINE SVG --- */}
                       <IconInstagram className="w-12 h-12" />
                    </div>
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">InstaDrive Scheduler</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {isSignUp ? 'Create an account to start scheduling' : 'Welcome back! Please sign in.'}
                    </p>
                </div>
                
                {/* The 'onSubmit' now calls the new function */}
                <form className="space-y-6" onSubmit={handleAuthAction}>
                    {/* SHOW ERROR MESSAGE */}
                    {error && (
                        <div className="p-3 bg-red-100 text-red-700 rounded-lg text-center">
                            {error}
                        </div>
                    )}

                    {isSignUp && (
                         <div>
                            <label htmlFor="name" className="sr-only">Full Name</label>
                            {/* CONNECT INPUTS TO STATE */}
                            <input 
                                id="name" 
                                name="name" 
                                type="text" 
                                // 'required' is handled by the form submit check
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-purple focus:ring-brand-purple" 
                                placeholder="Full Name"
                                value={name}
                                // --- FIX: Changed e.T.value to e.target.value ---
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    )}
                    <div>
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input 
                            id="email-address" 
                            name="email" 
                            type="email" 
                            autoComplete="email" 
                            required 
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-purple focus:ring-brand-purple" 
                            placeholder="Email address" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input 
                            id="password" 
                            name="password" 
                            type="password" 
                            autoComplete="current-password" 
                            required 
                            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-brand-purple focus:ring-brand-purple" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
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
                                    {/* --- REPLACED WITH INLINE SVG --- */}
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
                        {/* --- REPLACED WITH INLINE SVG --- */}
                        <IconGoogle className="w-5 h-5 mr-2" />
                        Sign in with Google
                    </button>
                </div>
                
                <div className="text-sm text-center">
                    <button onClick={() => {
                        setIsSignUp(!isSignUp);
                        setError(null); // Clear errors when switching
                    }} className="font-medium text-brand-purple hover:text-brand-red">
                        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
