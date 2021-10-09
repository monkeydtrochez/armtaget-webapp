<script>
	import Navigation from "../components/UI/Navigation.svelte";
	import Footer from "../components/UI/Footer.svelte";
	import HeroBanner from "../components/HeroBanner.svelte";
	import About from "../components/About.svelte";
	import Products from "../components/Products.svelte";
	import Clients from "../components/Clients.svelte";
	import Border from "../components/UI/Border.svelte";
	import Contact from "../components/Contact.svelte";
	import ContactForm from "../components/Forms/ContactForm.svelte";
	import clients from "../stores/clients-store";
	import {onMount} from 'svelte';
	
	onMount(async () => {
		await fetch('https://verdiproducts-by-monkey-default-rtdb.europe-west1.firebasedatabase.app/clients.json')
		.then((result) => {
			if(!result.ok){
				throw new Error("Unable to fetch data from database");
			}
			return result.json();
		})
		.then(data => {
			clients.setClients(data);
		})
		.catch((err) => {
			console.log("Some error, ", err)
		});
	});

	let showContactForm = null;
	
	function navigateTo(event) {
		console.log(event.detail)
	}
	
	function openContactForm() {
		showContactForm = true;
	}
	
	function closeContactForm() {
		showContactForm = null;
	}
</script>

<style>
	:global(HTML) {
		scroll-behavior: smooth;
	}
</style>

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
	<Contact on:click={openContactForm}/>
</section>


<section id="footer">
	<Footer on:navigate={navigateTo}/>
</section>

{#if showContactForm === true}
<ContactForm rightBtnText="Skicka" leftBtnText="Avbryt" on:cancel={closeContactForm} />
{/if}