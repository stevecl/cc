<script>
  import "./app.css";
  import "smelte/src/tailwind.css";
  import Router from "svelte-spa-router";
  import { routes } from "./routes.js";
</script>

<main>
  <Router {routes} />
</main>

<style>
</style>
