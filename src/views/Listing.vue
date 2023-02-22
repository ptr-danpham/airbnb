<template>
    <div class="listing">
        <b-container>
            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                <b-row>
                    <b-col sm="6" md="4" lg="3" v-for="(card, index) in cardsData" :key="index">
                        <ListingItem :card="card" />
                    </b-col>
                </b-row>
            </div>
            <div v-show="loading">
                <div class="text-center">
                    <b-spinner type="grow" label=""></b-spinner>
                    <b-spinner variant="primary" type="grow" label=""></b-spinner>
                    <b-spinner variant="success" type="grow" label=""></b-spinner>
                </div>
            </div>
        </b-container>
    </div>
</template>


<script>
import ListingItem from '@/components/ListingItem.vue';
import axiosApi from '@/axios/api';

export default {
    // eslint-disable-next-line
    name: 'Listing',
    // eslint-disable-next-line
    components: { ListingItem },
    data() {
        return {
            cardsData: [],
            hasNextPage: true,
            pageNum: 1,
            pageSize: 6,
            loading: false,
            settings: {
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "swipeToSlide": false,
                "infinite": true,
                "dots": true
            }
        }
    },
    mounted() {
        this.loadMore()
    },
    methods: {
        loadMore: async function () {
            if (this.hasNextPage) {
                this.loading = true;
                const { data } = await axiosApi.getList(this.pageNum, this.pageSize);
                const result = data?.data;
                if (result) {
                    this.pageNum++
                    this.cardsData = [...this.cardsData, ...result.list]
                    this.hasNextPage = result.hasNextPage
                }
                this.loading = false;
            }
        }
    }
}
</script>