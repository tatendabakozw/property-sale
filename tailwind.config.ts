import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          light: '#ff8e9d',
          superlight: '#ffbec7',
          dark: '#b34151',
          superdark: '#66252e',
          original: '#ff5d73'
        },
        secondary: {
          light: '#aacfe4',
          superlight: '#cfe4ef',
          dark: '#5e8397',
          superdark: '#364b56',
          original: '#020617'
        }
      },
    },
    
  },
  plugins: [],
}
export default config
