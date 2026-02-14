import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="px-5">
      <div className="container flex justify-between mx-auto h-16 items-center">
        <Link href="/" className="flex gap-2 text-xl font-bold  items-center">
          <Briefcase /> Job tracker
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/sign-in">
            <Button variant={"ghost"}>Log in</Button>
          </Link>

          <Link href="sign-up">
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
