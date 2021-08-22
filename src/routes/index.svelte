<script>
	import Navigation from "../components/UI/Navigation.svelte";
	import Footer from "../components/UI/Footer.svelte";
	import HeroBanner from "../components/HeroBanner.svelte";
	import About from "../components/About.svelte";
	
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

<section id="products"></section>
<section id="clients"></section>
<section id="contact"></section>

<section id="footer">
	<Footer on:navigate={navigateTo}/>
</section>