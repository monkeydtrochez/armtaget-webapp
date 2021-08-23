<script>
	import {createEventDispatcher} from "svelte";
	import LogoImage from "../../../static/assets/verdi-logo-white.jpg"
	
	const dispatch = createEventDispatcher();

	function navigateTo(section) {
		dispatch('navigate', section);
	}
</script>

<nav class="font-sans bg-white text-center flex justify-between my-4 mx-auto container overflow-hidden">
	<a href="/" class="block text-left">
		<img src="{LogoImage}" class="h-10 sm:h-20 " alt="logo">
	</a>
	<ul class="text-sm text-gray-700 list-none p-0 flex items-center">
		<li><a href="/" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline" on:click={navigateTo("about-us")}>Om oss</a></li>
		<li><a href="/" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline" on:click={navigateTo("products")}>Produkter</a></li>
		<li class="pr-2"><a href="/" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline" on:click={navigateTo("clients")}>Kunder</a></li>
		<li class="pl-2 border-l"><a href="/" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline" on:click={navigateTo("contact")}>Kontakt</a></li>
	</ul>
</nav>