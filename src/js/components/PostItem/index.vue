
<template>
  <div>
    <loading-state v-if="loading"></loading-state>
    <div class="PostItem" v-if="!loading">
      <div class="PostItem-cover"><img :src="post.cover" alt=""></div>
      <div class="PostItem-inner">
        <h1 class="PostItem-title">{{ post.title }}</h1>
        <div class="PostItem-meta">
          <div class="PostItem-meta_item PostItem-date">
            <b>Date:</b>
            <span>{{ post.date }}</span>
          </div>
          <div class="PostItem-meta_item PostItem-deadline">
            <b>Deadline:</b>
            <span>{{ post.deadline }}</span>
          </div>
          <div class="PostItem-meta_item PostItem-deadline">
            <b>Oleh:</b>
            <span>{{ post.dosen }}</span>
          </div>
        </div>
        <div class="PostItem-body" v-html="marked(post.content)"></div>
      </div>
    </div>
  </div>

</template>

<script>

  import UIActions from '../../vuex/actions/ui.js';
  import postActions from '../../vuex/actions/post.js';

  import marked from 'marked';

  import LoadingState from '../PostList/loading-state.vue';

  export default {
    components: { LoadingState },

    vuex: {
      getters: {
        posts: ({ post }) => post.list
      },

      actions: { UIActions, postActions }
    },

    data() {
      return{
        post: {},
        marked: marked,
        loading: false
      }
    },

    created() {
      let me = this

      let find = () => {
        return this.posts.find((post) => post.id == this.$route.params.id)
      }

      let found = find()
      if (found) {
        this.post = found
      }
      else {
        this.loading = true
        this.postActions('FETCH_LIST', {
          cb() {
            me.post = find()
            me.loading = false
          }
        })
      }

      this.UIActions('ON_POST_ITEM')
    }

  };

</script>
