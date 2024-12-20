"use client";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideBarItemsProps {
    icon : LucideIcon,
    label : string,
    slug : string,
    route : string
}

const SideBarItems: React.FC<SideBarItemsProps> = ({ icon: Icon, label, route }) => {
    const pathname = usePathname()
    console.log('Pathname',pathname)
    console.log('Route',route)
    const isActive = pathname.replace(/\/$/, '') === route.replace(/\/$/, '');

    return (
        <Link href={route} className={`flex items-center space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-neutral-900 dark:rounded-lg dark:px-3 dark:transition dark:delay-50 dark:py-2 cursor-pointer ` }>
          
            <div className="w-8 flex justify-center">
                <Icon className={`  ${isActive && 'dark:text-purple-600 '}`} />
            </div>
       
            <div className={`flex-1 text-left ${isActive && ''}`}>
                {label}
            </div>
        </Link>
    );
};

export default SideBarItems