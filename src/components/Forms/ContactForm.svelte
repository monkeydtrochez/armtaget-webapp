<script>
    import {createEventDispatcher} from "svelte";
    import {notEmpty, isValidEmail} from "../../helpers/formValidation";
    import Modal from "../UI/Modal.svelte";
    import Button from "../UI/Button.svelte";
    import Input from "../UI/Input.svelte";
    
    let dispatch = createEventDispatcher();
    
    export let leftBtnText;
    export let rightBtnText;
    
    let firstName = "";
    let lastName = "";
    let emailAddress = "";
    
    $: isFirstNameValid = !notEmpty(firstName);
    $: isLastNameValid = !notEmpty(lastName);
    $: isEmailValid = !notEmpty(emailAddress) && isValidEmail(emailAddress);
    $: isFormValid = isFirstNameValid && isLastNameValid && isEmailValid;
    
    function closeModal() {
        dispatch('cancel');
    }
    
    function submitForm() {
        console.log("Submission is sent to netlify");
        dispatch('cancel');
    }
</script>

<Modal on:cancel>
    <form class="w-full max-w-lg" name="interest-submissions" data-netlify="true" method="POST" on:submit|preventDefault={submitForm} >
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <Input 
                id="firstname" 
                label="Förnamn" 
                value={firstName}
                isValid={isFirstNameValid} 
                errorMessage="Du måste ange förnamn" 
                isMandatoryField={true}
                on:input={event => (firstName = event.target.value)} /> 
            </div>
            <div class="w-full md:w-1/2 px-3">
                <Input 
                id="lastname" 
                label="Efternamn" 
                value={lastName}
                isValid={isLastNameValid} 
                errorMessage="Du måste ange efternamn" 
                isMandatoryField={true}
                on:input={event => (lastName = event.target.value)} />
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <Input 
                id="email" 
                label="Mejladress" 
                value={emailAddress}
                isValid={isEmailValid} 
                errorMessage="Du måste ange en giltig mejladress" 
                isMandatoryField={true}
                on:input={event => (emailAddress = event.target.value)} />
            </div>
        </div>
    </form>
    <div slot="footer" class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <Button btnType="submit" btnText={rightBtnText} disabled={!isFormValid} on:click={submitForm}/>
        <Button btnText={leftBtnText} on:click={closeModal}/>
    </div>
</Modal>