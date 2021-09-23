<script>
    export let clientLogo;
    export let altText;
    export let clientName;
    export let clientReview;
</script>

<div class="w-full sm:w-1/2 md:w-1/3 flex flex-col 
items-center justify-center h-48 md:h-64
border-gray-300 border-r border-b hover:shadow-md hover:border-0 bg-white transition-normal hover:show-child">
<div class="w-12 h-12 rounded-full">
    <img src="{clientLogo}" alt="{altText}">
</div>
<h3 class="mt-4 mb-1 font-bold">{clientName}</h3>
<p class="mt-4 text-center text-gray-700 leading-normal px-6 hidden hover:block">
    {clientReview}
</p>
</div>