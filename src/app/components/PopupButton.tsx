import { headers } from "next/headers";
import Link from "next/link";

const PopupButton: React.FC = () => {
  const headersList = headers();
  const pathname = headersList.get("x-pathname");

  const url = new URL(
    pathname ? pathname : "/",
    process.env.NEXT_PUBLIC_DOMAIN_NAME || "http://localhost:3001"
  );
  url.searchParams.set("modal", "true");

  return (
    <div className="flex items-center justify-center h-screen">
      <Link
        href={url.toString()}
        scroll={false}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Open Popup
      </Link>
    </div>
  );
};

export default PopupButton;
