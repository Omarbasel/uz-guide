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
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))'
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
				// Advanced color palette
				earth: {
					50: '#faf8f5',
					100: '#f4f0e8',
					200: '#e8ddc8',
					300: '#d9c7a3',
					400: '#c8ad7c',
					500: '#b8955f',
					600: '#a68147',
					700: '#8a6a3a',
					800: '#715633',
					900: '#5d472c'
				},
				sage: {
					50: '#f6f7f6',
					100: '#e3e7e3',
					200: '#c7d0c7',
					300: '#9fb09f',
					400: '#7a8e7a',
					500: '#5f735f',
					600: '#4a5a4a',
					700: '#3d483d',
					800: '#333b33',
					900: '#2c322c'
				},
				ocean: {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e'
				},
				terracotta: {
					50: '#fef7f0',
					100: '#feede0',
					200: '#fcd9c0',
					300: '#f9bd95',
					400: '#f59e72',
					500: '#e07a47',
					600: '#d1632f',
					700: '#ae4e26',
					800: '#8b4024',
					900: '#713621'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-overlay': 'var(--gradient-overlay)',
			},
			boxShadow: {
				'card': 'var(--shadow-card)',
				'premium': 'var(--shadow-premium)',
				'glow': 'var(--shadow-glow)',
			},
			transitionProperty: {
				'base': 'var(--transition-base)',
				'smooth': 'var(--transition-smooth)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 8s ease-in-out infinite',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'parallax': 'parallax 20s linear infinite',
				'kinetic-text': 'kinetic-text 4s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate'
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
					'0%': { transform: 'translateY(0px) translateX(0px) scale(1)' },
					'12.5%': { transform: 'translateY(-8px) translateX(4px) scale(1.01)' },
					'25%': { transform: 'translateY(-15px) translateX(8px) scale(1.02)' },
					'37.5%': { transform: 'translateY(-22px) translateX(4px) scale(1.01)' },
					'50%': { transform: 'translateY(-30px) translateX(0px) scale(1)' },
					'62.5%': { transform: 'translateY(-22px) translateX(-4px) scale(0.99)' },
					'75%': { transform: 'translateY(-15px) translateX(-8px) scale(0.98)' },
					'87.5%': { transform: 'translateY(-8px) translateX(-4px) scale(0.99)' },
					'100%': { transform: 'translateY(0px) translateX(0px) scale(1)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'parallax': {
					'0%': { transform: 'translateY(0px)' },
					'100%': { transform: 'translateY(-100px)' }
				},
				'kinetic-text': {
					'0%': { transform: 'scale(1) rotate(0deg) translateY(0px) translateX(0px)', opacity: '1' },
					'16%': { transform: 'scale(1.03) rotate(1deg) translateY(-8px) translateX(4px)', opacity: '0.95' },
					'33%': { transform: 'scale(0.97) rotate(-1deg) translateY(8px) translateX(-4px)', opacity: '0.9' },
					'50%': { transform: 'scale(1.02) rotate(0.5deg) translateY(-6px) translateX(2px)', opacity: '0.95' },
					'66%': { transform: 'scale(0.98) rotate(-0.5deg) translateY(6px) translateX(-2px)', opacity: '0.9' },
					'83%': { transform: 'scale(1.01) rotate(0.3deg) translateY(-4px) translateX(1px)', opacity: '0.95' },
					'100%': { transform: 'scale(1) rotate(0deg) translateY(0px) translateX(0px)', opacity: '1' }
				},
				'pulse-glow': {
					'0%': { boxShadow: '0 0 20px rgba(224, 122, 71, 0.4)' },
					'100%': { boxShadow: '0 0 40px rgba(224, 122, 71, 0.8)' }
				}
			},
			fontFamily: {
				'serif': ['Playfair Display', 'serif'],
				'sans': ['Inter', 'system-ui', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
