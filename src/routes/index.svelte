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
	import { initializeClients } from "../services/clientService";
	import { initializeProducts } from "../services/productService";
	import { fetchStringValues } from "../services/stringValueService";
	import { stringValues } from "../stores/strings-store";
	import { onMount } from 'svelte';
	import { initializeApp } from 'firebase/app';
	import { getDatabase } from "firebase/database";
	
	// TODO move configs to beteer place some environment or config secrets
	const firebaseConfig = {
		apiKey: "AIzaSyDiZsYKi_Fy2rYyCS72EgDmc-x8fWHyRIk",
		authDomain: "verdiproducts-by-monkey.firebaseapp.com",
		databaseURL: "https://verdiproducts-by-monkey-default-rtdb.europe-west1.firebasedatabase.app",
		projectId: "verdiproducts-by-monkey",
		storageBucket: "verdiproducts-by-monkey.appspot.com",
		messagingSenderId: "899554036662",
		appId: "1:899554036662:web:9c2206c0a14e6b8e1a0f17",
		measurementId: "G-0G2JC6PHRH"
	};
	
	console.log("Initialize app")
	const app = initializeApp(firebaseConfig);
	
	onMount(async () => {
		console.log("Initializing data")
		try {

			const database = getDatabase(app);
			await initializeProducts(database);
			await initializeClients(database);
			await fetchStringValues(database).then((result) => {
				$stringValues = result;
				console.log($stringValues);
			}).catch((error) => {
				console.log(error);
			})
			
		} catch	(error) {
			console.log("Error occured: ", error);
		};
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

<section id="hero">
	<HeroBanner />
</section>

<section id="about-us">
	<About />
</section>

<Border />

<section id="products">
	<Products productAreaTexts={$stringValues.productAreaTexts} />
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