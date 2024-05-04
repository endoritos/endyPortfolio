import Image from "next/image";

export default function Custom404() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Image src="/zoro.png" alt="Zoro" width={500} height={300} />
            <h1>404 - Page Not Found</h1>
        </div>
    );
}