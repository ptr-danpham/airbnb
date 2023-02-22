<template>
    <nav class="sticky-top top-header bg-white">
        <div class="top-nav-wrap border-bottom">
            <b-container>
                <div class="top-nav d-flex justify-content-between align-items-center ">
                    <router-link class="logo d-none d-md-block" :to="'/'">
                        <img src="./../assets/images/logo.png" alt="logo" class="logo-img">
                    </router-link>
                    <div class="center-nav d-flex flex-grow-1 flex-md-grow-0 justify-content-center align-items-center">
                        <button type="button" class="btn border-0 text-dark">Anywhere</button>
                        <span class="vertical-line"></span>
                        <button type="button" class="btn border-0 text-dark">Any week</button>
                        <span class="vertical-line"></span>
                        <button type="button" class="btn border-0 text-secondary d-flex align-items-center ">Add guests
                            <span class="icon"><b-icon icon="search"></b-icon></span>
                        </button>

                    </div>
                    <div class="right-nav align-items-center d-none d-md-flex">
                        <b-link href="#" class="text-decoration-none text-dark">Airbnb your home</b-link>
                        <button class="btn border-0"><b-icon-globe /></button>
                        <b-dropdown id="" text="Dropdown Button" class="m-md-2" variant="light">
                            <template #button-content>
                                <b-icon icon="list" class="mx-2"></b-icon>
                                <b-icon icon="person-circle"></b-icon>
                            </template>
                            <b-dropdown-item>Sign in</b-dropdown-item>
                            <b-dropdown-item>Second Action</b-dropdown-item>
                            <b-dropdown-item>Third Action</b-dropdown-item>

                        </b-dropdown>
                    </div>
                </div>
            </b-container>
        </div>
        <div class="bottom-nav-wrap border-bottom mb-2">
            <b-container>
                <div class="list-category py-3">
                    <b-row>
                        <b-col sm="12" md="10" lg="11">
                            <div class="px-4">
                                <VueSlickCarousel v-bind="settings">
                                    <div v-for="(slide, index) in slides" :key="'slide-' + index"
                                        class="category text-secondary">
                                        <b-icon :icon="slide.icon"></b-icon>
                                        <p class="label">{{ slide.label }}</p>
                                    </div>
                                </VueSlickCarousel>
                            </div>
                        </b-col>
                        <b-col sm="12" md="2" lg="1" class="d-none d-md-block">
                            <b-button variant="outline-dark" class="d-flex"><b-icon icon="filter" />Filters</b-button>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </div>

    </nav>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import './../assets/scss/components/header.scss'
export default {
    name: 'HeaderComponent',
    components: { VueSlickCarousel },
    data() {
        return {
            slides: [
                {
                    label: "Amazing views",
                    icon: "shop"
                },
                {
                    label: "Tiny homes",
                    icon: "shop-window"
                },
                {
                    label: "Design",
                    icon: "signpost2"
                },
                {
                    label: "Caves",
                    icon: "sim"
                },
                {
                    label: "Cabins",
                    icon: "table"
                },
                {
                    label: "Private rooms",
                    icon: "umbrella-fill"
                },
                {
                    label: "Creative spaces",
                    icon: "window-dock"
                },
                {
                    label: "Countryside",
                    icon: "window-sidebar"
                },
                {
                    label: "Beaches",
                    icon: "volume-up-fill"
                },
                {
                    label: "OMG!",
                    icon: "youtube"
                },
                {
                    label: "Trending",
                    icon: "ui-checks-grid"
                },
                {
                    label: "A-frames",
                    icon: "ui-radios-grid"
                },
                {
                    label: "Vineyards",
                    icon: "tsunami"
                },
                {
                    label: "Historical homes",
                    icon: "truck"
                },
                {
                    label: "Amazing pools",
                    icon: "tornado"
                },
                {
                    label: "Iconic cities",
                    icon: "toggles"
                },
                {
                    label: "Off-the-grid",
                    icon: "thermometer-sun"
                },
                {
                    label: "Amazing views",
                    icon: "shop"
                },
                {
                    label: "Tiny homes",
                    icon: "shop-window"
                },
                {
                    label: "Design",
                    icon: "signpost2"
                },
                {
                    label: "Caves",
                    icon: "sim"
                },
                {
                    label: "Cabins",
                    icon: "table"
                },
                {
                    label: "Private rooms",
                    icon: "umbrella-fill"
                },
                {
                    label: "Creative spaces",
                    icon: "window-dock"
                },
                {
                    label: "Countryside",
                    icon: "window-sidebar"
                },
                {
                    label: "Beaches",
                    icon: "volume-up-fill"
                },
                {
                    label: "OMG!",
                    icon: "youtube"
                },
                {
                    label: "Trending",
                    icon: "ui-checks-grid"
                },
                {
                    label: "A-frames",
                    icon: "ui-radios-grid"
                },
                {
                    label: "Vineyards",
                    icon: "tsunami"
                },
                {
                    label: "Historical homes",
                    icon: "truck"
                },
                {
                    label: "Amazing pools",
                    icon: "tornado"
                },
                {
                    label: "Iconic cities",
                    icon: "toggles"
                },
                {
                    label: "Off-the-grid",
                    icon: "thermometer-sun"
                }
            ],
            settings: {
                "speed": 500,
                "slidesToShow": 12,
                "slidesToScroll": 3,
                "swipeToSlide": true,
                "infinite": false,
                "responsive": [
                    {
                        "breakpoint": 992,
                        "settings": {
                            "slidesToShow": 8,
                            "slidesToScroll": 3,
                            "infinite": true,
                        }
                    },
                    {
                        "breakpoint": 768,
                        "settings": {
                            "slidesToShow": 7,
                            "slidesToScroll": 3,
                            'arrows': false
                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 5,
                            "slidesToScroll": 3,
                            'arrows': false
                        }
                    },
                    {
                        "breakpoint": 400,
                        "settings": {
                            "slidesToShow": 4,
                            "slidesToScroll": 3,
                            'arrows': false
                        }
                    }
                ]
            }
        }
    },
}
</script>