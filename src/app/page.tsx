import Link from 'next/link';
import PopupWrapper from './components/PopupWrapper'

const Home: React.FC = () => {
  return (
    <>
    <div className="flex gap-5 m-2">
    <Link href='/' className="border border-black p-2 bg-red-100">Home</Link>
    <Link href='/animation' className="border border-black p-2">Animation</Link>
    </div>

    {/* Popup */}
    <div className="flex items-center justify-center h-screen">
      <PopupWrapper />
    </div>
    </>
  );
};

export default Home;
