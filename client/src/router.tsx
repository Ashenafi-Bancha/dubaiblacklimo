import { legalDocuments } from '@app/shared/content/legal';
import { services } from '@app/shared/content/services';
import { lazy } from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router';
import { RootLayout } from '@/components/layout/RootLayout';
import Home from '@/pages/Home';
import Placeholder from '@/pages/Placeholder';

// Everything except the home page is loaded on demand to keep the first visit fast.
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const Faq = lazy(() => import('@/pages/Faq'));
const Fleet = lazy(() => import('@/pages/Fleet'));
const Legal = lazy(() => import('@/pages/Legal'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const ServiceDetail = lazy(() => import('@/pages/ServiceDetail'));
const Services = lazy(() => import('@/pages/Services'));
const StyleGuide = lazy(() => import('@/pages/StyleGuide'));

/**
 * The site's pages. Paths are relative because the same set is mounted twice:
 * at "/" for English and at "/ar" for Arabic.
 *
 * Service and legal pages are generated from their content, so adding a
 * service in shared/src/content/services.ts also adds its page.
 */
function pageRoutes(): RouteObject[] {
  return [
    { index: true, element: <Home /> },
    { path: 'fleet', element: <Fleet /> },
    { path: 'services', element: <Services /> },
    ...services.map(({ slug }) => ({ path: `services/${slug}`, element: <ServiceDetail slug={slug} /> })),
    { path: 'about', element: <About /> },
    { path: 'contact', element: <Contact /> },
    { path: 'faq', element: <Faq /> },
    ...legalDocuments.map(({ slug }) => ({ path: slug, element: <Legal slug={slug} /> })),

    // Not built yet.
    { path: 'book', element: <Placeholder titleKey="nav.book" /> },
    { path: 'corporate', element: <Placeholder titleKey="nav.corporate" /> },
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
