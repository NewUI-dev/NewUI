"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { Github, Menu, X, Search, MessageCircle } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Components", href: "/components" },
  { name: "Blocks", href: "/blocks" },
  { name: "Templates", href: "/templates" },
  { name: "Showcase", href: "/showcase" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">N</span>
            </div>
            <span className="font-bold text-xl">NewUI</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Search */}
          <div className="hidden sm:flex relative">
            {searchOpen ? (
              <div className="flex items-center">
                <Input
                  placeholder="Search components..."
                  className="w-64 h-9"
                  autoFocus
                  onBlur={() => setSearchOpen(false)}
                />
              </div>
            ) : (
              <Button variant="ghost" size="sm" onClick={() => setSearchOpen(true)} className="text-muted-foreground">
                <Search className="h-4 w-4 mr-2" />
                <span className="hidden lg:inline">Search...</span>
                <kbd className="hidden lg:inline-flex ml-2 pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
            )}
          </div>

          {/* Mobile search */}
          <Button variant="ghost" size="icon" className="sm:hidden">
            <Search className="h-4 w-4" />
          </Button>

          {/* Social Links */}
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://discord.gg/newui" target="_blank">
              <MessageCircle className="h-4 w-4" />
              <span className="sr-only">Discord</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="https://x.com/newui_dev" target="_blank">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="sr-only">X (Twitter)</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/newui-dev/NewUI" target="_blank">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>

          <ThemeToggle />

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="pb-4 border-b">
              <Input placeholder="Search components..." className="w-full" />
            </div>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block text-sm font-medium transition-colors hover:text-primary py-2",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t">
              <Link
                href="/docs"
                className="block text-sm font-medium text-muted-foreground hover:text-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
