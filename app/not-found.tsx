import Link from "next/link";
import Button from "./components/Button";
import Image from "next/image";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-12">
      <Image src="@/public/images/404.png" 
      alt="image" 
      width={1000}
      height={1000}
      className="w-full object-cover"
      />
      <Button text="Back To Home" />
    </div>
  );
}
