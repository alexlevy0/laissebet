import React from "react"
import {
        Navbar,
        NavbarBrand,
        NavbarContent,
        NavbarItem,
        Link,
        Button,
        NavbarMenu,
        NavbarMenuItem,
        NavbarMenuToggle,
} from "@nextui-org/react"

export function HeaderNav() {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false)

        const menuItems = [
                "Profile",
                "Dashboard",
                "Activity",
                "Analytics",
                "System",
                "Deployments",
                "My Settings",
                "Team Settings",
                "Help & Feedback",
                "Log Out",
        ]

        return (
                <Navbar position="sticky" onMenuOpenChange={setIsMenuOpen}>
                        <NavbarContent>
                                <NavbarMenuToggle
                                        aria-label={
                                                isMenuOpen
                                                        ? "Close menu"
                                                        : "Open menu"
                                        }
                                        className="sm:hidden"
                                />
                                <NavbarBrand>
                                        {/* <AcmeLogo /> */}
                                        <p className="font-bold text-inherit">
                                                MeloCaps
                                        </p>
                                </NavbarBrand>
                        </NavbarContent>

                        <NavbarContent
                                className="hidden sm:flex gap-4"
                                justify="center"
                        >
                                {/* <NavbarItem>
                                        <Link color="foreground" href="#">
                                                Play
                                        </Link>
                                </NavbarItem>
                                <NavbarItem isActive>
                                        <Link href="#" aria-current="page">
                                                Win
                                        </Link>
                                </NavbarItem>
                                <NavbarItem>
                                        <Link color="foreground" href="#">
                                                Collect
                                        </Link>
                                </NavbarItem> */}
                        </NavbarContent>
                        <NavbarContent justify="end">
                                {/* <NavbarItem className="hidden lg:flex">
                                        <Link href="#">Si</Link>
                                </NavbarItem> */}
                                <NavbarItem>
                                        <Button
                                                as={Link}
                                                color="primary"
                                                href="#"
                                                variant="flat"
                                        >
                                                Sign In
                                        </Button>
                                </NavbarItem>
                        </NavbarContent>
                        <NavbarMenu>
                                {menuItems.map((item, index) => (
                                        <NavbarMenuItem
                                                key={`${item}-${index}`}
                                        >
                                                <Link
                                                        color={
                                                                index === 2
                                                                        ? "primary"
                                                                        : index ===
                                                                          menuItems.length -
                                                                                  1
                                                                        ? "danger"
                                                                        : "foreground"
                                                        }
                                                        className="w-full"
                                                        href="#"
                                                        size="lg"
                                                >
                                                        {item}
                                                </Link>
                                        </NavbarMenuItem>
                                ))}
                        </NavbarMenu>
                </Navbar>
        )
}
