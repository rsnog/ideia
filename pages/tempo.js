import Link from 'next/link';

function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return <div>
        <h1>Tempo</h1>

        <div>{dynamicDateString} (Dinâmico)</div>
        
        <div>{props.staticDateString} (Estático - com Delay)</div>
     

        <Link href="/">
            <a>Acessar página inicial</a>
        </Link>
        <br></br>
        <Link href="/sobre">
            <a>Acessar página sobre</a>
        </Link>

    </div>
}

export async function getStaticProps() {
    await delay(5000);
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();
    return {
        props: {
            staticDateString
        }
    }
}
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
export default Tempo