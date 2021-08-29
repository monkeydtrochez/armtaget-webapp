<script>
    import {createEventDispatcher} from "svelte";
    import Modal from "../UI/Modal.svelte";
    import Button from "../UI/Button.svelte";

    let dispatch = createEventDispatcher();

    export let leftBtnText;
    export let rightBtnText;
    
    function closeModal() {
        dispatch('cancel');
    }

    function submit() {
        console.log("Submit form - not yet implemented...");
        dispatch('cancel');
    }
</script>

<Modal on:cancel>
    <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Förnamn
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" >
                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Efternamn
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" >
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Mejladress
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" >
            </div>
        </div>
    </form>
    <div slot="footer" class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <Button btnText={rightBtnText} on:click={submit}/>
        <Button btnText={leftBtnText} on:click={closeModal}/>
    </div>
</Modal>