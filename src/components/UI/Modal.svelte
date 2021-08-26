<script>
    import {createEventDispatcher} from "svelte";
    import {fly, fade} from "svelte/transition";
    import Button from "../UI/Button.svelte";
    
    let dispatch = createEventDispatcher();

    function closeModal() {
        dispatch('cancel');
    }
</script>

<div transition:fade class="modal-backdrop" 
    on:click={closeModal}>
    <div transition:fly class="modal">
        <div class="content">
            <slot />
        </div>
        <footer>
            <div class="closeBtn">
                <Button btnText="Stäng" on:click={closeModal} />
            </div>
        </footer>
    </div>
</div>