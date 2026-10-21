import './globals.css';import type{Metadata}from'next';
export const metadata:Metadata={title:{default:'ISO Digital — Websites that work.',template:'%s | ISO Digital'},description:'International web design and development studio.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
