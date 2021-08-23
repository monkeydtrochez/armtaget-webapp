<script>
	import Navigation from "../components/UI/Navigation.svelte";
	import Footer from "../components/UI/Footer.svelte";
	import HeroBanner from "../components/HeroBanner.svelte";
	import About from "../components/About.svelte";
	import Products from "../components/Products.svelte";
	import Border from "../components/UI/Border.svelte";
	
	function navigateTo(event) {
		console.log(event.detail)
	}
</script>

<svelte:head>
<title>Verdi Products</title>
</svelte:head>

<section id="navigation">
	<Navigation on:navigate={navigateTo}/>
</section>

<section id="hero" class="h-screen">
	<HeroBanner />
</section>

<section id="about-us">
	<About />
</section>

<Border />

<section id="products">
	<Products />
</section>

<Border />

<section id="clients"></section>
<section id="contact"></section>

<section id="footer">
	<Footer on:navigate={navigateTo}/>
</section>