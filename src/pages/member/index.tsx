import Head from 'next/head';
import LayOut from "@/components/LayOut";
import TableContainer from '@/components/TableContainer';

// import Warn from '@/container/Member/Warn';
const memberHeaders = [
    'IMG',
    'FullName',
    'Permission Type',
    'Position',
    'Social',
    'Manager',
];

const MemberPage: React.FC = () => {
    return (
        <LayOut>
            <Head>
                <title>MEMBER | dxx=</title>
                <meta
                    name="description"
                    content="I2AROBOT 2"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='member-page'>
                <TableContainer headers={memberHeaders} page="member"/>
            </div>
        </LayOut>
    );
}

export default MemberPage;
