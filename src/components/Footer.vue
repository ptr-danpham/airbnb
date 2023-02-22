<template>
    <footer class="sticky-bottom bg-white border-top d-flex align-content-center">
        <b-container>
            <b-row class="py-2">
                <b-col sm="12" md="6">
                    <ul class="d-flex flex-wrap list-unstyled mb-0">
                        <li>
                            © 2023 Airbnb, Inc.
                        </li>
                        <li>
                            <b-link class="text-dark mx-2">Terms</b-link>
                        </li>
                        <li>
                            <b-link class="text-dark mx-2">Sitemap</b-link>
                        </li>
                        <li>
                            <b-link class="text-dark mx-2">Privacy</b-link>
                        </li>
                        <li>
                            <b-link class="text-dark mx-2">Your Privacy Choices</b-link>
                        </li>
                        <li>
                            <b-link class="text-dark mx-2">Destinations</b-link>
                        </li>
                    </ul>
                </b-col>
                <b-col sm="12" md="6">
                    <ul class="d-flex flex-wrap list-unstyled justify-content-end mb-0">
                        <li>
                            <b-link class="text-dark mx-2"><b-icon icon="globe"/><span class="mx-2">English (US)</span></b-link>
                        </li>
                        <li>
                            <b-link class="text-dark mx-2">$</b-link>
                        </li>
                        <li>
                            <b-link class="text-dark mx-2">Support & resources</b-link>
                        </li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
};

</script>