import Link from "next/link";
import { usePathname } from "next/navigation";

const MyLink = ({ href, children }) => {
  const pathname = usePathname();
  // console.log(href,  "pathname");

//   const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition ${
        pathname === href ? "border-b text-purple-600 font-bold" : "text-white"
      } hover:text-purple-600`}
    >
      {children}
    </Link>
  );
};

export default MyLink;