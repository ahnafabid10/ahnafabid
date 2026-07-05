'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Menu } from 'lucide-react';

function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

const NAV_LINKS = [
  { name: 'About',    href: '#about'    },
  { name: 'Skills',   href: '#skills'   },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact',  href: '#contact'  },
];

export function Navbar() {
  const [isScrolled,  setIsScrolled]  = useState(false);
  const [isMenuOpen,  setIsMenuOpen]  = useState(false);

  const pathname  = usePathname();
  const menuRef   = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // ── Scroll + outside-click ───────────────────────────────────────────────

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll(); // Check scroll position immediately on mount

    const onClickOutside = (e: MouseEvent) => {
      if (!isMenuOpen) return;
      const target = e.target as Node;
      if (
        menuRef.current?.contains(target) === false &&
        triggerRef.current?.contains(target) === false
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [isMenuOpen]);

  // In the tools section there will be no navbar
  if (pathname?.startsWith('/tools')) {
    return null;
  }

  // ── Shared link classes ──────────────────────────────────────────────────

  const linkClass = (href: string) =>
    cn(
      'font-medium transition-colors duration-200',
      pathname === href ? 'text-white' : 'text-white/50 hover:text-white',
    );

  return (
    <nav
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        isScrolled && 'top-4',
      )}
    >
      {/* ── Bar ──────────────────────────────────────────────────────────── */}
      <div
        className={cn(
          'mx-auto transition-all duration-300',
          isScrolled
            ? 'max-w-5xl rounded-full bg-white/10 px-6 py-2 backdrop-blur-md shadow-sm'
            : 'max-w-7xl px-6 py-4',
        )}
      >
        <div className={cn('flex items-center justify-between', isScrolled ? 'h-12' : 'h-16')}>

          {/* Brand */}
          <Link href="/" className="text-lg font-bold tracking-tight text-white">
            Abid Nirob
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className={linkClass(link.href)}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#07090a] transition hover:bg-white/85"
          >
            Contact
          </a>

          {/* Mobile menu button */}
          <button
            ref={triggerRef}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
            className="lg:hidden text-white"
          >
            <Menu className="size-6" />
          </button>

        </div>
      </div>

      {/* ── Mobile backdrop ───────────────────────────────────────────────── */}
      {isMenuOpen && (
        <div
          aria-hidden="true"
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        />
      )}

      {/* ── Mobile drawer ─────────────────────────────────────────────────── */}
      <div
        ref={menuRef}
        className={cn(
          'fixed right-0 top-0 z-50 flex h-dvh w-72 flex-col bg-[#07090a] p-6 shadow-xl transition-transform duration-300',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
          className="mb-8 self-end text-white/50 hover:text-white transition-colors"
        >
          <X className="size-5" />
        </button>

        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-white/60 hover:bg-white/5 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className="mt-auto rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#07090a] hover:bg-white/85 transition"
        >
          Hire me
        </a>
      </div>
    </nav>
  );
}
