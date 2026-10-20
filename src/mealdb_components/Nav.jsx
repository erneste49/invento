
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";


const Nav =()=>{
    return(
        <div>
            <Navbar fluid rounded>
                <NavbarBrand href="https://flowbite-react.com">
                    <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl text-white font-semibold dark:text-sky-950 bg-white"> MealDb </span>
                </NavbarBrand>
                <div className="flex md:order-2">
                    <Button>Get started</Button>
                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    <NavbarLink href="#" active>
                    Home
                    </NavbarLink>
                    <NavbarLink href="#">About</NavbarLink>
                    <NavbarLink href="#">Services</NavbarLink>
                    <NavbarLink href="#">Pricing</NavbarLink>
                    <NavbarLink href="#">Contact</NavbarLink>
                </NavbarCollapse>
            </Navbar>

                </div>
    )
}
export default Nav 