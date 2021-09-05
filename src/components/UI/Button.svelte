<script>
    import {createEventDispatcher} from "svelte";

    let dispatch = createEventDispatcher();

    export let btnText;
    export let disabled = false;
    export let btnType = "button";
</script>

<button disabled={disabled} type={btnType} class="disabled:bg-opacity-50  bg-black hover:bg-gray-900 text-white hover:text-white py-3 px-6 uppercase text-xs tracking-wide border border-white"
on:click={() => dispatch('click')}>
    {btnText}
</button>