import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'et', 'ru']

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    request.nextUrl.pathname = `/en${pathname}`
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next, public files)
        '/((?!_next/static|_next/image|images|favicon.ico).*)',
    ],
}
