<script>
	import LogoImage from "../../../static/assets/verdi-nav-logo.jpg"
</script>

<div class="h-25 bg-white">
	<nav class="bg-white shadow-lg">
		<div class="max-w-6xl mx-auto px-4">
			
			<div class="flex justify-between">
				<div class="pl-4">
					<!-- Website Logo -->
					<a href="/" class="flex items-center py-2">
						<img src="{LogoImage}" alt="Logo" class="h-12 sm:h-18">
					</a>
				</div>
				<!-- Primary Navbar items -->
				<div class="hidden md:flex items-center space-x-1 pr-4">
					<a href="#about-us" class="py-4 px-2 text-gray-500 border-b-4 hover:border-green-500 font-semibold ">Om oss</a>
					<a href="#products" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Produkter</a>
					<a href="#clients" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Kunder</a>
					<a href="#contact" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Kontakta oss</a>
				</div>
				
				<!-- Mobile menu button -->
				<div class="md:hidden flex items-center">
					<button class="outline-none mobile-menu-button">
						<svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
						x-show="!showMenu"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
						>
						<path d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</div>
		</div>		
	</div>
	<!-- mobile menu -->
	<div class="hidden mobile-menu">
		<ul class="">
			<li class="#about-us"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Om oss</a></li>
			<li><a href="#products" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Produkter</a></li>
			<li><a href="#clients" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Kunder</a></li>
			<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Kontakta oss</a></li>
		</ul>
	</div>
	<script>
		const btn = document.querySelector("button.mobile-menu-button");
		const menu = document.querySelector(".mobile-menu");
		
		btn.addEventListener("click", () => {
			menu.classList.toggle("hidden");
		});
	</script>
</nav>
</div>

<!-- <div class="h-25 bg-white">
	<nav class="font-sans w-10/12 text-center flex justify-between my-4 mx-auto overflow-hidden">
		<a href="/" class="block text-left">
			<img src="{LogoImage}" class="h-10 sm:h-20 " alt="logo">
		</a>
		<ul class="text-sm text-gray-700 list-none p-0 flex items-center">
			<li><a href="#about-us" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline" >Om oss</a></li>
			<li><a href="#products" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline" >Produkter</a></li>
			<li class="pr-2"><a href="#clients" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline" >Kunder</a></li>
			<li class="pl-2 border-l"><a href="#contact" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline" >Kontakt</a></li>
		</ul>
	</nav>
</div> -->


