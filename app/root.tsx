import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import globalStyles from "./styles/global.css";
import getStartedStyles from "./styles/get-started.css";
import navigationStyles from "./styles/navigation.css";
import applyNowStyles from "./styles/apply-now.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStyles },
    { rel: "stylesheet", href: getStartedStyles },
    { rel: "stylesheet", href: applyNowStyles },
    { rel: "stylesheet", href: navigationStyles },
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500&display=swap",
    },
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap",
    },
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=Kanit:wght@300;400&display=swap",
    },
  ];
}


export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Black Phone",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
