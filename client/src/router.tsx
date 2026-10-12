import { lazy } from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router';
import { RootLayout } from '@/components/layout/RootLayout';
import { SERVICE_SLUGS } from '@/lib/navigation';
import Home from '@/pages/Home';
import Placeholder from '@/pages/Placeholder';

// Everything except the home page is loaded on demand to keep the first visit fast.
const NotFound = lazy(() => import('@/pages/NotFound'));
const StyleGuide = lazy(() => import('@/pages/StyleGuide'));

/**
 * The site's pages. Paths are relative because the same set is mounted twice:
 * at "/" for English and at "/ar" for Arabic.
 */
function pageRoutes(): RouteObject[] {
  return [
    { index: true, element: <Home /> },
    { path: 'fleet', element: <Placeholder titleKey="nav.fleet" /> },
    { path: 'services', element: <Placeholder titleKey="nav.services" /> },
    ...SERVICE_SLUGS.map((slug) => ({
      path: `services/${slug}`,
      element: <Placeholder titleKey={`services.${slug}`} />,
    })),
    { path: 'book', element: <Placeholder titleKey="nav.book" /> },
    { path: 'corporate', element: <Placeholder titleKey="nav.corporate" /> },
    { path: 'about', element: <Placeholder titleKey="nav.about" /> },
    { path: 'contact', element: <Placeholder titleKey="nav.contact" /> },
    { path: 'faq', element: <Placeholder titleKey="nav.faq" /> },
    { path: 'terms', element: <Placeholder titleKey="nav.terms" /> },
    { path: 'privacy', element: <Placeholder titleKey="nav.privacy" /> },
    { path: 'cancellation', element: <Placeholder titleKey="nav.cancellation" /> },
    { path: 'account', element: <Placeholder titleKey="nav.account" /> },
    { path: 'styleguide', element: <StyleGuide /> },
    { path: '*', element: <NotFound /> },
  ];
}

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      { path: '/', children: pageRoutes() },
      { path: '/ar', children: pageRoutes() },
    ],
  },
];

export const router = createBrowserRouter(routes);
