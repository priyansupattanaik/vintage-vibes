
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
				vintage: {
					background: '#F5F1E6',
					wood: '#8B4513',
					panel: '#D4B483',
					sepia: '#704214',
					cream: '#F8EFD4',
					gold: '#D4AF37',
					copper: '#B87333',
					olive: '#3C4616',
					burgundy: '#800020'
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
				'spin-record': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-5px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'spin-record': 'spin-record 8s linear infinite',
				'float': 'float 3s ease-in-out infinite'
			},
			fontFamily: {
				'retro': ['Playfair Display', 'serif'],
				'vintage': ['Courier New', 'monospace']
			},
			backgroundImage: {
				'wood-grain': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgo8ZGVmcz4KPHBhdHRlcm4gaWQ9InBhdHRlcm5fd29vZCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPgogIDxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjOEI0NTEzIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSIzMCIgeDI9IjMwMCIgeTI9IjMwIiBzdHJva2U9IiM3MDQyMTQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIvPgogIDxsaW5lIHgxPSIwIiB5MT0iNjAiIHgyPSIzMDAiIHkyPSI2MCIgc3Ryb2tlPSIjNzA0MjE0IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1vcGFjaXR5PSIwLjIiLz4KICA8bGluZSB4MT0iMCIgeTE9IjkwIiB4Mj0iMzAwIiB5Mj0iOTAiIHN0cm9rZT0iIzcwNDIxNCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC4yIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSIxMjAiIHgyPSIzMDAiIHkyPSIxMjAiIHN0cm9rZT0iIzcwNDIxNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2Utb3BhY2l0eT0iMC4yIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSIxNTAiIHgyPSIzMDAiIHkyPSIxNTAiIHN0cm9rZT0iIzcwNDIxNCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2Utb3BhY2l0eT0iMC4yIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSIxODAiIHgyPSIzMDAiIHkyPSIxODAiIHN0cm9rZT0iIzcwNDIxNCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC4yIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSIyMTAiIHgyPSIzMDAiIHkyPSIyMTAiIHN0cm9rZT0iIzcwNDIxNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2Utb3BhY2l0eT0iMC4yIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSIyNDAiIHgyPSIzMDAiIHkyPSIyNDAiIHN0cm9rZT0iIzcwNDIxNCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2Utb3BhY2l0eT0iMC4yIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSIyNzAiIHgyPSIzMDAiIHkyPSIyNzAiIHN0cm9rZT0iIzcwNDIxNCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC4yIi8+Cjwvc2F0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm5fd29vZCkiLz4KPC9zdmc+Cg==')",
				'noise': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSwgMC43NSIgcmVzdWx0PSJub2lzZSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPgogICAgPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDUgMCIvPgogIDwvZmlsdGVyPgogIDxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjUiLz4KPC9zdmc+')",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
