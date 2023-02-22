<template>
    <b-card class="mb-5">
        <div class="images position-relative">
            <VueSlickCarousel v-bind="settings">
                <div v-for="(img, index) in card.imgUrls" :key="'slide-' + index" class="category text-secondary">
                    <img :src="img.imgUrl" alt="img" width="100%" height="305" class="thumbnail">
                </div>
            </VueSlickCarousel>
            <b-icon icon="heart" class="like-icon" type="button" />
        </div>
        <div class="info">
            <h6 class="text-truncate">
                <router-link :to="'/room/' + card.id" class="text-dark text-decoration-none">{{ card.name }}</router-link>
            </h6>
            <b-card-text class="text-truncate text-secondary mb-1 font-size-15">{{ card.addr }}</b-card-text>
            <b-card-text class="text-truncate text-secondary mb-1 font-size-15">{{ card.cancelDate }}</b-card-text>
            <b-card-text class="text-truncate text-secondary mb-1 font-size-15"><b class="text-dark">$ {{ card.price }}</b>
                night</b-card-text>
        </div>

    </b-card>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import './../assets/scss/components/list-item.scss'

export default {
    name: 'ListingItem',
    props: ['card'],
    components: { VueSlickCarousel },
    data() {
        return {
            settings: {
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "swipeToSlide": false,
                "infinite": false,
                "dots": true
            }
        }
    }

}

</script>