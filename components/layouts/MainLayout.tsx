import Head from 'next/head';
import Link from 'next/link';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

interface props {
    children: JSX.Element | JSX.Element[];
}

export const MainLayout = ({ children }: props) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home - Gabriel</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={styles.main}>{children}</main>
        </div>
    );
};
