import Link from "next/link";
import PopupButton from "./components/PopupButton";
import PopupContent from "./components/PopupContent";
import { Suspense } from "react";
import Loading from "./components/Loading";

export type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const Home: React.FC<Props> = (props) => {
  const { searchParams } = props;
  const showModal = searchParams?.modal === "true";

  return (
    <>
      <div className="flex gap-5 m-2">
        <Link href="/" className="border border-black p-2 bg-red-100">
          Home
        </Link>
        <Link href="/animation" className="border border-black p-2">
          Animation
        </Link>
      </div>

      <PopupButton />
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative p-8 bg-white rounded shadow-lg">
            <Link
              href="/"
              className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white rounded"
            >
              Close
            </Link>
            <Suspense fallback={<Loading />}>
              <PopupContent />
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
