import Layout from '@/Layout/Main.Layout';
import { Contact, Intro, Projects } from '@/components';
import { About } from '@/components';
import data from '@/data';
import { PostType } from '@/types';
import { GetStaticProps } from 'next';
import { FC } from 'react';



const Home: FC = () => {
    return (
        <Layout>
            <Intro />
            <About />
            <Projects />
            <Contact />
        </Layout>
    );
};

export default Home;
