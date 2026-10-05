// Tailwind CDN configuration (must load AFTER cdn.tailwindcss.com)
tailwind.config = {
    theme: {
        extend: {
            colors: {
                navy: {
                    800: '#0F2C59',
                    900: '#0B1F3F',
                },
                medical: {
                    blue: '#1E64B4',
                    light: '#EBF3FA',
                    accent: '#2563EB',
                    gold: '#D97706',
                    goldlight: '#FEF3C7',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            }
        }
    }
};
