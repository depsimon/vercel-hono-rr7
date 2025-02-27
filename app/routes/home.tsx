import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context } : Route.LoaderArgs) {
  return {
    context
  }
}

export default function Home({ loaderData } : Route.ComponentProps) {
  console.log({ loaderData })
  return <Welcome />;
}
