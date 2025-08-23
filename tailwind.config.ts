import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				neo: {
					dark: '#0a0a0a',
					light: '#1a1a1a',
					red: '#ff0844',
					purple: '#8b5cf6',
					'purple-light': '#a78bfa',
					'red-light': '#ff4d6d'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'float-gentle': {
					'0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
					'25%': { transform: 'translate(3px, -5px) rotate(0.5deg)' },
					'50%': { transform: 'translate(-2px, -8px) rotate(-0.5deg)' },
					'75%': { transform: 'translate(-4px, -3px) rotate(0.3deg)' },
					'100%': { transform: 'translate(0px, 0px) rotate(0deg)' }
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(255, 8, 68, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)' 
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(255, 8, 68, 0.6), 0 0 80px rgba(139, 92, 246, 0.4)' 
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(255, 8, 68, 0.5)' 
					},
					'50%': { 
						boxShadow: '0 0 20px rgba(255, 8, 68, 0.8), 0 0 30px rgba(139, 92, 246, 0.6)' 
					}
				},
				'slide-up': {
					'0%': { transform: 'translateY(100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'rotate-glow': {
					'0%': { 
						transform: 'rotate(0deg)',
						boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)'
					},
					'100%': { 
						transform: 'rotate(360deg)',
						boxShadow: '0 0 20px rgba(255, 8, 68, 0.4)'
					}
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '-200% center' },
					'100%': { backgroundPosition: '200% center' }
				},
				'button-3d': {
					'0%': { 
						transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
						boxShadow: '0 0 20px rgba(255, 8, 68, 0.3)'
					},
					'15%': { 
						transform: 'perspective(1000px) rotateX(10deg) rotateY(90deg) scale(1.1)',
						boxShadow: '0 0 30px rgba(255, 8, 68, 0.5)'
					},
					'30%': { 
						transform: 'perspective(1000px) rotateX(20deg) rotateY(180deg) scale(1.2)',
						boxShadow: '0 0 40px rgba(255, 8, 68, 0.7), 0 0 60px rgba(139, 92, 246, 0.5)'
					},
					'50%': { 
						transform: 'perspective(1000px) rotateX(30deg) rotateY(270deg) scale(1.4)',
						boxShadow: '0 0 50px rgba(255, 8, 68, 0.8), 0 0 80px rgba(139, 92, 246, 0.6)'
					},
					'70%': { 
						transform: 'perspective(1000px) rotateX(20deg) rotateY(320deg) scale(1.2)',
						boxShadow: '0 0 40px rgba(255, 8, 68, 0.6)'
					},
					'85%': { 
						transform: 'perspective(1000px) rotateX(10deg) rotateY(350deg) scale(1.1)',
						boxShadow: '0 0 30px rgba(255, 8, 68, 0.4)'
					},
					'100%': { 
						transform: 'perspective(1000px) rotateX(0deg) rotateY(360deg) scale(1)',
						boxShadow: '0 0 20px rgba(255, 8, 68, 0.3)'
					}
				},
				'confetti': {
					'0%': { 
						transform: 'translate(-50%, -50%) scale(0) rotate(0deg)',
						opacity: '1'
					},
					'30%': { 
						transform: 'translate(calc(-50% + var(--random-x, 0px)), calc(-50% + var(--random-y, 0px))) scale(1) rotate(120deg)',
						opacity: '0.9'
					},
					'70%': { 
						transform: 'translate(calc(-50% + var(--random-x-mid, 0px)), calc(-50% + var(--random-y-mid, 0px))) scale(0.8) rotate(240deg)',
						opacity: '0.6'
					},
					'100%': { 
						transform: 'translate(calc(-50% + var(--random-x-end, 0px)), calc(-50% + var(--random-y-end, 0px))) scale(0) rotate(360deg)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-gentle': 'float-gentle 8s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'slide-up': 'slide-up 0.8s ease-out',
				'slide-in-left': 'slide-in-left 0.8s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'rotate-glow': 'rotate-glow 8s linear infinite',
				'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
				'button-3d': 'button-3d 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'confetti': 'confetti 3s ease-out forwards'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
			},
			backdropBlur: {
				xs: '2px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
