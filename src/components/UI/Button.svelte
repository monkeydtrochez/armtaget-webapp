<script>
    import {createEventDispatcher} from "svelte";

    let dispatch = createEventDispatcher();

    export let btnText;


</script>

<button class=" bg-black hover:bg-gray-900 text-white hover:text-white py-3 px-6 uppercase text-xs tracking-wide border border-white"
on:click={() => dispatch('click')}>
    {btnText}
</button>