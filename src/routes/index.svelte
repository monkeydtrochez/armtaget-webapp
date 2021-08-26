<script>
	import Navigation from "../components/UI/Navigation.svelte";
	import Footer from "../components/UI/Footer.svelte";
	import HeroBanner from "../components/HeroBanner.svelte";
	import About from "../components/About.svelte";
	import Products from "../components/Products.svelte";
	import Clients from "../components/Clients.svelte";
	import Border from "../components/UI/Border.svelte";
	import Contact from "../components/Contact.svelte";
	import Modal from "../components/UI/Modal.svelte";
	
	let showModal = null;

	function navigateTo(event) {
		console.log(event.detail)
	}

	function openModal() {
		showModal = true;
	}

	function closeModal() {
		showModal = null;
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

<section id="clients">
<Clients />
</section>

<section id="contact">
<Contact on:click={openModal}/>
</section>

<section id="footer">
	<Footer on:navigate={navigateTo}/>
</section>

{#if showModal === true}
	<Modal on:cancel={closeModal}>TEST</Modal>
{/if}