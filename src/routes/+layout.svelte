<script>
    import "../app.css";
    import { onMount } from 'svelte';
    import {themeChange} from "theme-change"
      onMount(async () => {
        themeChange(false)
})
</script>
<svelte:head>
    <title>Glitch Breakers | Home</title> 
</svelte:head>
<div class="sticky top-0">
   <div class="navbar bg-hero-pattern bg-secondary rounded-sm bg-transparent">
    <div class="navbar-start">
       <div class="dropdown">
        <label tabindex="0" class="btn btn-square">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow from-primary rounded-box w-52">
          <li><a href="/">Home</a></li>
        </ul>
      </div> 
    </div> 
    <div class="navbar-center">
      <!-- svelte-ignore a11y-missing-attribute -->
      <a href="/" class="btn normal-case text-xl p-2">Glitch Breakers</a>
    </div>
    <div class="navbar-end">
      <select data-choose-theme>
        <option value="night">Default</option>
        <option value="acid">Light</option>
        <option value="synthwave">Synthwave</option>
      </select>
    </div>
  </div>
</div>
  <slot />