import { SearchCircleIcon } from "@heroicons/react/outline";

export default function Widgets() {
  return (
    <div className="xl:w-[600px] hidden lg:inline">
        <div className="xl:w-[90%]">
            <div className="flex items-center p-3 rounded-full relative">
                <SearchCircleIcon className="h-5"/>
                <input type="text" placeholder="Search Twitter" className="absolute inset-0 rounded-full "/>
            </div>
        </div>
    </div>
  )
}
