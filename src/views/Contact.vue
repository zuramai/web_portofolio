<template>
    <div id="wrapper">
        <div class="title">
            <h3>Contact Me</h3>
        </div>
        <div class="content">
            <div class='my-8'>
                <div class="block md:flex mb-8">
                    <div class="md:w-1/4 w-full">
                        <div class="per-skills mb-4">
                            <font-awesome-icon :icon="['fab', 'whatsapp']" />
                            <span class='ml-2'>Whatsapp</span>
                        </div>
                    </div>
                    <div class="md:w-3/4 w-full">
                        <a href="#" class="contact_link" target="_blank">0813xxxxxxxx</a>
                    </div>
                </div>
                <div class="block md:flex mb-8">
                    <div class="md:w-1/4 w-full">
                        <div class="per-skills mb-4">
                            <font-awesome-icon :icon="['fas', 'envelope']" />
                            <span class='ml-2'>Email</span>
                        </div>
                    </div>
                    <div class="md:w-3/4 w-full">
                        <a href="#" class="contact_link" target="_blank">ahmadsaugigis@gmail.com</a>
                    </div>
                </div>
                <div class="block md:flex mb-8">
                    <div class="md:w-1/4 w-full">
                        <div class="per-skills mb-4">
                            <font-awesome-icon :icon="['fab', 'facebook']" />
                            <span class='ml-2'>Facebook</span>
                        </div>
                    </div>
                    <div class="md:w-3/4 w-full">
                        <a href="https://www.facebook.com/ahmadsaugi.gis" class="contact_link" target="_blank">https://www.facebook.com/ahmadsaugi.gis</a>
                    </div>
                </div>
                <div class="block md:flex mb-8">
                    <div class="md:w-1/4 w-full">
                        <div class="per-skills mb-4">
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                            <span class='ml-2'>Instagram</span>
                        </div>
                    </div>
                    <div class="md:w-3/4 w-full">
                        <a href="https://www.instagram.com/asawgi/" class="contact_link" target="_blank">https://www.instagram.com/asawgi/</a>
                    </div>
                </div>
                <div class="block md:flex mb-8">
                    <div class="md:w-1/4 w-full">
                        <div class="per-skills mb-4">
                            <font-awesome-icon :icon="['fab', 'linkedin']" />
                            <span class='ml-2'>LinkedIn</span>
                        </div>
                    </div>
                    <div class="md:w-3/4 w-full">
                        <a href="https://www.linkedin.com/in/ahmad-saugi-a54a73192/" class="contact_link" target="_blank">https://www.linkedin.com/in/ahmad-saugi-a54a73192/</a>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>
<script>
    
</script>
<style >
    .meter { 
        height: 20px;  /* Can be anything */
        position: relative;
        background: #555;
        -moz-border-radius: 25px;
        -webkit-border-radius: 25px;
        border-radius: 25px;
        padding: 10px;
        box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
    }
    .meter > span {
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        border-bottom-left-radius: 25px;
        border-top-left-radius: 25px;
    }
    .green {
        background: #76b852;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #8DC26F, #76b852);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #8DC26F, #76b852); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .blue {
        background: #3498db;  /* fallback for old browsers */
    
    }
    .purple {
        background: #8E2DE2;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .red{
        background-color: #e74c3c;
    }
    .ldbar {
        width: 100%;
    }
    .per-skills i{
        font-size: 20px;
    }

    .per-skills span {
        line-height: 20px;
    }

    .contact_link {
        color: #3498db;
    }

    .contact_link:hover {
        color: #4A00E0;
    }
</style>