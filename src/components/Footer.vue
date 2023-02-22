<template>
    <footer class="bg-gray " :class="{ 'sticky-bottom': $route.name == 'listing', 'border-top': $route.name == 'listing' }">
        <div class="border-top pt-5" v-if="$route.name != 'listing'">
            <b-container>
                <b-row>
                    <b-col cols="12" sm="6" lg="3" class="border-bottom py-2">
                        <p class="text-dark"><strong>Support</strong></p>
                        <p>Help Centre</p>
                        <p>AirCover</p>
                        <p>Supporting people with disabilities</p>
                        <p>Cancellation options</p>
                        <p>Our COVID-19 Response</p>
                        <p>Report a neighborhood concern</p>
                    </b-col>
                    <b-col cols="12" sm="6" lg="3" class="border-bottom py-2">
                        <p class="text-dark"><strong>Community</strong></p>
                        <p>Airbnb.org: disaster relief housing</p>
                        <p>Combating discrimination</p>
                    </b-col>
                    <b-col cols="12" sm="6" lg="3" class="border-bottom py-2">
                        <p class="text-dark"><strong>Hosting</strong></p>
                        <p>Airbnb your home</p>
                        <p>AirCover for Hosts</p>
                        <p>Explore hosting resources</p>
                        <p>Visit our community forum</p>
                        <p>How to host responsibly</p>
                    </b-col>
                    <b-col cols="12" sm="6" lg="3" class="border-bottom py-2">
                        <p class="text-dark"><strong>Airbnb</strong></p>
                        <p>Newsroom</p>
                        <p>Learn about new features</p>
                        <p>Letter from our founders</p>
                        <p>Careers</p>
                        <p>Investors</p>
                        <p>Gift cards</p>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="footer-bottom d-flex align-content-center">
            <b-container>
                <b-row class="py-2">
                    <b-col sm="12" md="6">
                        <ul class="d-flex flex-wrap list-unstyled mb-0 justify-content-center justify-content-md-start">
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
                        <ul class="d-flex flex-wrap list-unstyled justify-content-center justify-content-md-end mb-0">
                            <li>
                                <b-link class="text-dark mx-2"><b-icon icon="globe" /><span class="mx-2">English
                                        (US)</span></b-link>
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
        </div>

    </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
};

</script>