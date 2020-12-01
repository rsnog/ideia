import Link from 'next/link';

function Sobre() {
    return <div>
        <h1>Sobre</h1>

        <Link href="/">
            <a>Acessar página inicial</a>
        </Link>
        <br></br>
        <Link href="/tempo">
            <a>Acessar página tempo</a>
        </Link>

    </div>
}

export default Sobre