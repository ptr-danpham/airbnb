<template>
    <div class="detail pt-5">
        <b-container>
            <h1 class="h3">{{ detailRoom.name }}</h1>
            <b-row class="justify-content-between">
                <b-col cols="auto">
                    <span><b-icon icon="star-fill" />4.91</span>
                    <span class="mx-2">{{ detailRoom.reviews.length }} reviews</span>
                    <span class="mx-2">{{ detailRoom.addr }}</span>
                </b-col>
                <b-col cols="auto">
                    <b-button variant="light" class="mx-2"><b-icon icon="share" /><span class="mx-1">Share</span></b-button>
                    <b-button variant="light" class="mx-2"><b-icon icon="heart" /><span class="mx-1">Save</span></b-button>
                </b-col>
            </b-row>
            <div class="images d-flex rounded mb-5 position-relative">
                <div class="d-flex w-100 image-list rounded overflow-hidden">
                    <div class="img-wrap flex-grow-1">
                        <b-img class="h-100" fluid :src="detailRoom.imgUrls?.[0]?.imgUrl"></b-img>
                    </div>
                    <div class="d-none d-md-flex flex-grow-1 sub-image">
                        <div class="flex-wrap w-50">
                            <div class="img-wrap w-100 h-50 ">
                                <b-img class="h-100" fluid :src="detailRoom.imgUrls?.[1]?.imgUrl"></b-img>
                            </div>
                            <div class="img-wrap w-100 h-50 ">
                                <b-img class="h-100" fluid :src="detailRoom.imgUrls?.[2]?.imgUrl"></b-img>
                            </div>
                        </div>
                        <div class="flex-wrap w-50">
                            <div class="img-wrap w-100 h-50 ">
                                <b-img class="h-100" fluid :src="detailRoom.imgUrls?.[3]?.imgUrl"></b-img>
                            </div>
                            <div class="img-wrap w-100 h-50 ">
                                <b-img class="h-100" fluid :src="detailRoom.imgUrls?.[4]?.imgUrl"></b-img>
                            </div>
                        </div>
                    </div>
                </div>
                <b-button v-b-modal.show-all-photos-modal class="show-all-photos" variant="light">
                    <b-icon icon="grid3x3-gap-fill"></b-icon>
                    Show all photos
                </b-button>
            </div>
            <b-modal id="show-all-photos-modal" title="All photos" size="lg">
                <VueSlickCarousel v-bind="settings">
                    <div v-for="imgUrls in detailRoom.imgUrls" :key="'slide-' + imgUrls.id">
                        <b-img class="w-100" fluid :src="imgUrls.imgUrl"></b-img>
                    </div>
                </VueSlickCarousel>
            </b-modal>
        </b-container>


        <div class="information">
            <b-container>
                <b-row>
                    <b-col sm="12" md="8">
                        <b-row class="border-bottom mb-4">
                            <b-col cols="12" class="d-flex align-items-center justify-content-between info-owner">
                                <div>
                                    <p class="owner">{{ detailRoom.merit }}</p>
                                    <p>{{ detailRoom.bedInfo }}</p>
                                </div>
                                <b-avatar size="3rem" :src="detailRoom.owner_avatar"></b-avatar>
                            </b-col>
                        </b-row>

                        <b-row class="benefit">
                            <b-col cols="12" class="d-flex">
                                <b-icon icon="chat-left-quote-fill"></b-icon>
                                <p class="ms-2">Dedicated workspace</p>
                            </b-col>
                        </b-row>
                        <b-row class="benefit">
                            <b-col cols="12" class="d-flex">
                                <b-icon icon="markdown-fill"></b-icon>
                                <p class="ms-2">Dedicated workspace</p>
                            </b-col>
                        </b-row>
                        <b-row class="benefit border-bottom pb-4">
                            <b-col cols="12" class="d-flex">
                                <b-icon icon="mailbox"></b-icon>
                                <p class="ms-2">Dedicated workspace</p>
                            </b-col>
                        </b-row>

                        <b-row class="border-bottom mt-4 pb-4">
                            <p>{{ detailRoom.addrInfo }} </p>
                            <b-link href="#" class="link-more text-dark">Learn more</b-link>
                        </b-row>

                        <b-row class="border-bottom mt-4 pb-4">
                            <p>{{ detailRoom.description }}</p>
                            <b-link href="#" class="link-more text-dark">See more</b-link>
                        </b-row>

                        <div class="border-bottom mt-4 pb-4">
                            <h4>What this place offers</h4>
                            <b-row>
                                <b-col cols="6" v-for="n in 2" :key="n">
                                    <p v-for="i in 6" :key="i">
                                        <b-icon class="mx-2" icon="mailbox"></b-icon>Private patio or balcony
                                    </p>
                                </b-col>
                            </b-row>
                            <b-button variant="outline-dark">Show all 37 amenities</b-button>
                        </div>

                        <div class="border-bottom mt-4 pb-4">
                            <b-row>
                                <h4>Features suitable for people with special needs</h4>
                                <p>This information is provided by the Host and reviewed by Airbnb.</p>
                                <b-img class="w-25" rounded="5" src="https://picsum.photos/200/200?random=7" alt=""></b-img>
                                <p class="mt-4">{{ detailRoom.description }}</p>
                            </b-row>
                            <b-button variant="outline-dark">Show all amenities information</b-button>
                        </div>

                        <b-row class="mt-4 pb-4">
                            <h4>5 night at {{ detailRoom.name }}</h4>
                            <date-range-picker ref="picker" opens="inline" v-model="dateRange" :alwaysShowCalendars="true"
                                :minDate="'2023-01-01'" :maxDate="'2025-01-01'" :show-week-numbers="false"
                                :linked-calendars="true" :single-date-picker="false" :show-dropdowns="false"
                                :auto-apply="true" :ranges="false">
                                <template style="min-width: 100%;">
                                </template>
                            </date-range-picker>
                        </b-row>
                    </b-col>
                    <b-col sm="12" md="4">
                        <b-card class="book-room">
                            <b-container>
                                <b-row>
                                    <p class="d-flex justify-content-between">
                                        <span>
                                            <strong>${{ detailRoom.price }}</strong> night
                                            <strong>
                                                <b-icon icon="star-fill"></b-icon>4,88
                                            </strong>
                                        </span>
                                        <span class="float-right">{{ detailRoom.reviews.length }} vote</span>
                                    </p>
                                </b-row>

                                <b-row class="border rounded">
                                    <div class="border-bottom d-flex">
                                        <div class="border-right w-50 pt-3 check-in">
                                            <p><strong>CHECK-IN</strong></p>
                                            <p>14/5/2023</p>
                                        </div>
                                        <div class="border-left w-50 pt-3 px-3">
                                            <p><strong>CHECKOUT</strong></p>
                                            <p>19/5/2023</p>
                                        </div>
                                    </div>
                                    <div class="pt-3">
                                        <p><strong>GUESTS</strong></p>
                                        <p>1 guest</p>
                                    </div>
                                </b-row>
                                <b-button class="my-4 w-100" variant="danger">Reserve</b-button>
                                <p class="text-center">You won't be charged yet</p>
                                <p class="d-flex justify-content-between text-decoration-underline">
                                    <span>${{ detailRoom.price }} x5 nights</span>
                                    <span>${{ detailRoom.price * 5 }}</span>
                                </p>
                                <p class="d-flex justify-content-between border-bottom pb-3 text-decoration-underline">
                                    <span>Service fee</span>
                                    <span>$120</span>
                                </p>
                                <p>
                                    <strong class="d-flex justify-content-between">
                                        <span>Total</span>
                                        <span>${{ (detailRoom.price * 5) + 120 }}</span>
                                    </strong>
                                </p>
                            </b-container>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <div class="review">
            <b-container>
                <b-row class="mt-4">
                    <h4>
                        <strong class="d-flex align-items-center">
                            <b-icon icon="star-fill"></b-icon>4,88
                            <span> · {{ detailRoom.reviews.length }} vote</span>
                        </strong>
                    </h4>
                    <b-row class="mb-4 mt-2">
                        <b-col cols="12" sm="12" md="6" lg="6" v-for="n in 2" :key="n">
                            <p class="d-flex justify-content-between" v-for="i in 3" :key="i">
                                <span>Degree of cleanliness</span>
                                <span class="d-flex align-items-center">
                                    <div class="progress-bar"></div> 4,9
                                </span>
                            </p>
                        </b-col>
                    </b-row>

                    <b-row class="border-bottom pb-4">
                        <b-row class="mb-1">
                            <b-col v-for="comment in detailRoom.comments" :key="'comment' + comment.id" cols="12" sm="12"
                                md="6" lg="6" class="mb-5">
                                <div class="d-flex align-items-center mb-3">
                                    <b-avatar size="3rem" :src="comment.imgUrl"></b-avatar>
                                    <div class="mx-2">
                                        <p class="mb-0">{{ comment.name }}</p>
                                        <p class="mb-0">{{ comment.date }}</p>
                                    </div>
                                </div>
                                <p class="mb-2">{{ comment.content }}</p>
                                <b-link href="#" class="link-more text-dark">See more</b-link>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-button variant="outline-dark" class="mt-1 w-25">Showing all {{ detailRoom.comments.length
                                }} reviews</b-button>

                            </b-col>
                        </b-row>
                    </b-row>

                    <b-row class="border-bottom mt-4 pb-4">
                        <h4>Where you will go</h4>
                        <p>{{ detailRoom.addr }}</p>
                        <p>{{ detailRoom.description }}</p>
                        <b-link href="#" class="link-more text-dark">See more</b-link>
                    </b-row>

                    <b-row class="mt-4 pb-4">
                        <h4 class="mb-3">Location</h4>
                        <b-embed type="iframe" aspect="16by9"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5934.363121632131!2d107.60644653947926!3d16.463260403917822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a111843798b3%3A0xf201be35a88dc367!2sThe%20Manor%20Crown%20Hu%E1%BA%BF!5e0!3m2!1svi!2s!4v1676001469699!5m2!1svi!2s"
                            height="450" style="border:0; width: 100%;" allowfullscreen loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </b-embed>
                        <p class="mt-3"><strong>{{ detailRoom.addr }}</strong></p>
                        <p>{{ detailRoom.description }}</p>
                        <b-link href="#" class="link-more text-dark">See more</b-link>
                    </b-row>
                </b-row>
            </b-container>
        </div>


        <div class="border-top mt-4 py-5  bg-gray">
            <b-container>
                <h4 class="mb-3">Explore other options in and around {{ detailRoom.addr }} </h4>
                <b-row>
                    <b-col cols="6" sm="6" md="4" lg="3">
                        <p class="py-1">Langkawi</p>
                    </b-col>
                    <b-col cols="6" sm="6" md="4" lg="3">
                        <p class="py-1">Iligan City</p>
                    </b-col>
                    <b-col cols="6" sm="6" md="4" lg="3">
                        <p class="py-1">Langkawi</p>
                    </b-col>
                    <b-col cols="6" sm="6" md="4" lg="3">
                        <p class="py-1">Mactan</p>
                    </b-col>
                    <b-col cols="6" sm="6" md="4" lg="3">
                        <p class="py-1">Don Salvador Benedicto</p>
                    </b-col>
                    <b-col cols="6" sm="6" md="4" lg="3">
                        <p class="py-1">Cebu City</p>
                    </b-col>
                    <b-col cols="6" sm="6" md="4" lg="3">
                        <p class="py-1">Langkawi</p>
                    </b-col>
                    <b-col cols="6" sm="6" md="4" lg="3">
                        <p class="py-1">Boracay</p>
                    </b-col>
                    <b-col cols="6" sm="6" md="4" lg="3">
                        <p class="py-1">Don Salvador Benedicto</p>
                    </b-col>
                    <b-col cols="6" sm="6" md="4" lg="3">
                        <p class="py-1">Cagayan de Oro</p>
                    </b-col>
                </b-row>
                <p class="pt-3">Airbnb > {{ detailRoom.addr }}</p>
            </b-container>
        </div>

    </div>
</template>


<script>
import '../assets/scss/view/room.scss';
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css';
import DateRangePicker from 'vue2-daterange-picker'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import axiosApi from '@/axios/api';

export default {
    // eslint-disable-next-line
    name: 'RoomPage',
    data() {
        return {
            dateRange: {
                startDate: null,
                endDate: null
            },
            detailRoom: {
                name: "",
                rating: 0,
                reviews: [],
                count_rating: 0,
                addr: "",
                merit: "",
                bedInfo: "",
                owner_avatar: "https://picsum.photos/200/200?random=6",
                description: "",
                imgUrls: [],
                comments: []
            },
            settings: {
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "swipeToSlide": true,
                "infinite": false
            },
            loading: true
        }
    },
    components: {
        DateRangePicker,
        VueSlickCarousel
    },
    mounted() {
        this.loadDetail()
    },
    methods: {
        loadDetail: async function () {
            this.loading = true
            const { data } = await axiosApi.getDetailRoom(this.$route.params.id);
            this.detailRoom = { ...data.data };
            console.log(data);
            this.loading = false
        }
    }
}
</script>