import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        frappe: {
          rosewater: '#F2D5CF',
          flamingo: '#EFBEBE',
          pink: '#F4B8E4',
          mauve: '#CA9EE6',
          red: '#E78284',
          maroon: '#EA999C',
          peach: '#EF9F76',
          yellow: '#E5C890',
          green: '#A6D189',
          teal: '#81C8BE',
          sky: '#99D1DB',
          sapphire: '#85C1DC',
          blue: '#8CAAEE',
          lavender: '#BABBF1',
          text: '#C6D0F5',
          subtext1: '#B5BFE2',
          subtext0: '#A5ADCE',
          overlay2: '#949CBB',
          overlay1: '#838BA7',
          overlay0: '#737994',
          surface2: '#626880',
          surface1: '#51576D',
          surface0: '#414559',
          base: '#303446',
          mantle: '#292C3C',
          crust: '#232634'
        },
        latte: {
          rosewater: '#dc8a78',
          flamingo: '#dd7878',
          pink: '#ea76cb',
          mauve: '#8839ef',
          red: '#d20f39',
          maroon: '#e64553',
          peach: '#fe640b',
          yellow: '#df8e1d',
          green: '#40a02b',
          teal: '#179299',
          sky: '#04a5e5',
          sapphire: '#209fb5',
          blue: '#1e66f5',
          lavender: '#7287fd',
          text: '#4c4f69',
          subtext1: '#5c5f77',
          subtext0: '#6c6f85',
          overlay2: '#7c7f93',
          overlay1: '#8c8fa1',
          overlay0: '#9ca0b0',
          surface2: '#acb0be',
          surface1: '#bcc0cc',
          surface0: '#ccd0da',
          base: '#eff1f5',
          mantle: '#e6e9ef',
          crust: '#dce0e8'
        }
      }
    }
  },
  plugins: []
}

export default config
