
<template>

  <div class="PostList">
    <loading-state v-if="items.length === 0" v-for="i in [1,2,3]"></loading-state>

    <div v-if="items.length > 0" v-for="item in items | filterBy searchQuery | orderBy 'id' -1" class="PostList-item {{ item.status }}">
      <div class="PostList-item_thumbnail">
        <a v-link="{ path: '/post/' + item.id }">
          <img :src="item.cover" alt="">
        </a>
        <div class="PostList-item_label">
          <a class="PostList-item_label_item" @click.prevent="filterPost(item.category)">{{ item.category }}</a>
          <a class="PostList-item_label_item PostList-item_label_item_sisa {{ item.status }}" @click.prevent="">{{ item.status === 'danger' ? 'BESOK!' : item.sisaHari + ' Hari Lagi' }}</a>
        </div>
      </div>
      <div class="PostList-item_body">
        <h2 class="PostList-item_title"><a v-link="{ path: '/post/' + item.id }">{{ item.title }}</a></h2>
      </div>
    </div>
  </div>

</template>

<script>

  import UIActions from '../../vuex/actions/ui.js'

  import LoadingState from './loading-state.vue';

  export default {
    props: ['items'],

    components: { LoadingState },

    vuex: {
      getters: {
        searchQuery: ({ ui }) => ui.searchQuery
      },
      actions: { UIActions }
    },

    methods: {
      filterPost(category) {
        this.UIActions('UPDATE_SEARCH_QUERY', category)
      }
    },

    created () {
      this.UIActions('ON_NETRAL_PAGE')
    }
  };

</script>
