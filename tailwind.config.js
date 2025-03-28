const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		backgroundImage: {
    			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
    		},
    		animation: {
    			'loop-scroll': 'loop-scroll 45s linear infinite',
    			rippling: 'rippling var(--duration) ease-out',
    			meteor: 'meteor 5s linear infinite',
    			gradient: 'gradient 8s linear infinite'
    		},
    		keyframes: {
    			'loop-scroll': {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(-100%)'
    				}
    			},
    			'shine-pulse': {
    				'0%': {
    					'background-position': '0% 0%'
    				},
    				'50%': {
    					'background-position': '100% 100%'
    				},
    				to: {
    					'background-position': '0% 0%'
    				}
    			},
    			rippling: {
    				'0%': {
    					opacity: '1'
    				},
    				'100%': {
    					transform: 'scale(2)',
    					opacity: '0'
    				}
    			},
    			meteor: {
    				'0%': {
    					transform: 'rotate(var(--angle)) translateX(0)',
    					opacity: '1'
    				},
    				'70%': {
    					opacity: '1'
    				},
    				'100%': {
    					transform: 'rotate(var(--angle)) translateX(-500px)',
    					opacity: '0'
    				}
    			},
    			gradient: {
    				to: {
    					backgroundPosition: 'var(--bg-size, 300%) 0'
    				}
    			}
    		}
    	},
    	screens: {
    		sm: '640px',
    		md: '768px',
    		lg: '1024px',
    		xl: '1280px',
    		'1xl': '1440px',
    		'2xl': '1536px',
    		'3xl': '1600px'
    	}
    },
	plugins: [],
};
