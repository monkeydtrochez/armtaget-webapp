<script>
    import campaignVideo from "../../static/assets/video/campaign-video.mp4";
    import campaignVideoMobile from "../../static/assets/video/campaign-video.webm";
</script>

<div class="w-full flex justify-center mb-3">
    <div class="sm:w-4/12/12 md:w-6/12 lg:w-6/12 text-gray-900 mt-6 leading-normal">
        
        <video class="w-full rounded-3xl mb-4" controls autoplay="autoplay" loop="true" muted>
            <source src="{campaignVideo}" type="video/mp4" />
            <source src="{campaignVideoMobile}" type="video/webm" />
            <track kind="captions">
            </video>
            
            <h1 class="mb-4 uppercase font-bold tracking-wide">Om oss</h1>
            <p class="mx-2">Konceptet Armtaget har legat och grott i idéstadiet en längre tid - nu under Covid-19 pandemin blev ideén äntligen till verklighet.
                Vi alla vet att kunder tar i handtag för att plocka sina varor med eller utan handskar, till att sedan råka klia sig i ansiktet eller ta på sin telefon. Vi gör det ofta omedvetet och sprider på så sätt vidare både bakterier och virus.
                <br/>
                Armtaget är ett steg i rätt riktning för en bättre hygienstandard i butiker. Syftet är helt enkelt att det ska vara smidigt för kunder att förstå och använda. Tillsammans med butikschefer och handlare samarbetar vi mot ett friskare samhälle som alla vinner på - öppet, ärligt och hälsosamt!
            </p>
            </div>
        </div>
        
        <style lang="css" scoped>
            h1 {
                @apply text-center;
            }
        </style>