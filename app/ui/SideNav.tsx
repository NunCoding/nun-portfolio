import Link from "next/link";
import { HomeIcon, FileTextIcon, UsersIcon, LogOutIcon, GlobeIcon } from "lucide-react";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col justify-between bg-gray-50 border-r">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 bg-blue-600 text-white p-4">
          <GlobeIcon className="h-6 w-6" />
          <span className="text-lg font-bold">Acme</span>
        </div>

        {/* Nav Items */}
        <nav className="mt-4 space-y-1">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
          >
            <HomeIcon className="h-5 w-5" />
            Home
          </Link>

          <Link
            href="/dashboard/invoices"
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
          >
            <FileTextIcon className="h-5 w-5" />
            Invoices
          </Link>

          <Link
            href="/dashboard/customers"
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
          >
            <UsersIcon className="h-5 w-5" />
            Customers
          </Link>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-4">
        <button className="flex w-full items-center gap-2 px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md">
          <LogOutIcon className="h-5 w-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
