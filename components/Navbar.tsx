import { headerOptions } from "@/constants"
import { ScrollText } from "lucide-react"
import Link from "next/link"
const Navbar = () => {


  return (
    <header className="max-w-full mx-auto flex bg-zinc-900 mb-6">
      <nav className="
       grid grid-cols-5 mx-auto justify-between w-full py-4 flex-wrap">
        <div className="col-span-2 px-14 " >
          <ScrollText /> 
        </div>
        {
        headerOptions.map(
          (option, key) => (
          <Link href='/' key={key} className="mx-auto">
            {option.title}
          </Link>))
        }
      </nav>
    </header>
  )
}

export default Navbar