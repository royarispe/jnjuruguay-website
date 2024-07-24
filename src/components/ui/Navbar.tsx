'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import "./Navbar.css";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1024) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setShowMenu(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Determina el nombre de la página basado en la ruta
    const getPageTitle = () => {
        switch (pathname) {
            case "/info":
                return "Información";
            case "/documents":
                return "Documentos";
            case "/contact":
                return "Contacto y Ubicación";
            case "/registration":
                return "Inscripción";
            default:
                return "";
        }
    };

    return (
        <>
            <header className="header">
                <nav className="nav container">
                    <Link href="/" className="nav__logo">
                        <div className="logo-container">
                            <Image src="/images/logosf.png" alt="Logo de la Jornada" width={50} height={50} />
                        </div>
                    </Link>

                    <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link href="/" className="nav__link" onClick={closeMenuOnMobile}>
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link href="/info" className="nav__link" onClick={closeMenuOnMobile}>
                                    Información
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link href="/documents" className="nav__link" onClick={closeMenuOnMobile}>
                                    Documentos
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link href="/contact" className="nav__link" onClick={closeMenuOnMobile}>
                                    Contacto y Ubicación
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link href="/registration" className="nav__cta" onClick={closeMenuOnMobile}>
                                    ¡Inscribite!
                                </Link>
                            </li>
                        </ul>
                        <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                            <IoClose />
                        </div>
                    </div>

                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <IoMenu />
                    </div>
                </nav>
            </header>

            <div className="page-indicator">
                <p>{getPageTitle()}</p>
            </div>
        </>
    );
};

export default Navbar;
