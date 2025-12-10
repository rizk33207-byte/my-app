import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("bio", "routes/bio.tsx"),
    route("projects", "routes/projects.tsx"),
    route("services", "routes/services.tsx"),
    route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
