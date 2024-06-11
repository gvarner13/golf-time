import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { SVGProps } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MaterialSymbolsFlagCircleOutline(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M8 18h1.5v-5H12l1 2h5V9h-3l-1-2H8zm5.925-4.5l-1-2H9.5v-3h3.575l1 2H16.5v3zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
      ></path>
    </svg>
  );
}

export function Navbar({ isLoggedIn = false }: { isLoggedIn: boolean }) {
  return (
    <header className="sticky z-50 top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 w-full justify-between">
        <div className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <a
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <MaterialSymbolsFlagCircleOutline className="h-6 w-6" />
            <span className="sr-only">French National</span>
          </a>
          <p>French National</p>
        </div>
        <div className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground text-nowrap"
          >
            The Course
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground text-nowrap"
          >
            Membership
          </a>
          <a
            href="#"
            className="text-foreground transition-colors hover:text-foreground text-nowrap"
          >
            Pro Shop
          </a>
        </div>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Dashboard
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Orders
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Products
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Customers
            </a>
            <a href="#" className="hover:text-foreground">
              Settings
            </a>
          </nav>
        </SheetContent>
      </Sheet>
      {/* <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search tee times..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}
      <div>
        <Button>Book Now</Button>
      </div>
    </header>
  );
}
