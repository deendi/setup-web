import '../global.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pagesProps } : AppProps) {
    return (
        <>
        <Component {...pagesProps}/>

        <div id="subcribeButton">Subcribe!</div>
        
    </>
    );
}