"use client"

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  products: [
    { name: 'RO Water Purifiers', href: '/water-purifiers' },
    { name: 'UV Purifiers', href: '/water-purifiers' },
    { name: 'Water Softeners', href: '/water-purifiers' },
    { name: 'Spare Parts', href: '/spare-parts' },
  ],
  services: [
    { name: 'Installation', href: '/services' },
    { name: 'AMC Plans', href: '/services' },
    { name: 'Repair & Maintenance', href: '/services' },
    { name: 'Water Testing', href: '/services' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Water Solutions', href: '/water-solutions' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/about' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=f8dgu0r' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-off-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-aqua">
                <span className="text-xl font-bold text-white">SV</span>
              </div>
              <span className="text-xl font-bold">SV Water Solutions</span>
            </div>
            <p className="mb-6 text-sm text-gray-400 max-w-sm">
              Leading provider of water purification solutions. Delivering pure, safe drinking water to homes and businesses across the region.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-aqua mt-0.5" />
                  <span className="text-sm text-gray-400">
                    Jangaom, telangana
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-aqua" />
                  <a href="tel:+918297612490" className="text-sm text-gray-400 hover:text-aqua transition-colors">
                    +91 8297612490
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-aqua" />
                  <a href="mailto:Sathish9110732830@gmail.com" className="text-sm text-gray-400 hover:text-aqua transition-colors">
                    Sathish9110732830@gmail.com
                  </a>
                </div>

            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-aqua"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-aqua"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-aqua"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} SV Water Solutions. All rights reserved.
            </p>
<div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex items-center justify-center h-12 w-12 rounded-full bg-white/10 text-gray-400 transition-all duration-300 hover:text-white hover:bg-aqua hover:scale-110"
                      aria-label={social.name}
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  )
                })}
              </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
