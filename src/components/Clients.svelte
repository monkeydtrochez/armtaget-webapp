<script>
    import ClientStory from "./ClientStory.svelte";
    import IcaKvantumLogo from "../../static/assets/clientAssets/web_ica_kvantum_logotyp.png";
    import MaxiIcaLogo from "../../static/assets/clientAssets/ica_maxi.png";
    import IcaNäraLogo from "../../static/assets/clientAssets/ica-nara.png";
    import IcaCityLogo from "../../static/assets/clientAssets/ica-city.png";
</script>

<div class="text-center">
    <h1 class="py-4 font-bold uppercase tracking-wide">Kundernas upplevelser</h1>
    <p class="leading-normal mb-4 max-w-sm m-auto">Se vad några utav våra nöjda kunder har att säga!</p>
</div>
<div class="flex flex-col sm:flex-row flex-wrap my-8">
    <ClientStory
    clientName="ICA Kvantum Landvetter"
    clientLogo={IcaKvantumLogo}
    altText="ica-kvantum"
    clientReview="Vi har tagit nästa steg i arbetet mot en tryggare och säkrare butik. Vi har investerat i armtag på alla våra glasdörrar! Nu kan du välja att öppna utan att behöva använda händerna. Dessa är också till stor hjälp för våra kunder som har reumatism eller liknande."
    />
    <ClientStory 
    clientName="Maxi ICA Stormarknad Torslanda" 
    clientLogo={MaxiIcaLogo}
    altText="ica-maxi"
    clientReview="Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."
    /> 
    <ClientStory 
    clientName="ICA City Borås" 
    clientLogo={IcaCityLogo}
    altText="ica-city"
    clientReview="Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."
    /> 
    <ClientStory 
    clientName="ICA Nära Rävekärr" 
    clientLogo={IcaNäraLogo}
    altText="ica-nara"
    clientReview="Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."
    /> 
</div>