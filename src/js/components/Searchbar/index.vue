
<template>
  <div class="Searchbar u-shadow {{ searchbarOpen ? 'Searchbar--open' : '' }}">
    <div class="MiniContainer MiniContainer--for_searchbar center-block">
      <input type="text" placeholder="Filter The Posts..." class="Searchbar-input" @input="updateSearchQuery">
    </div>
  </div>
</template>

<script>

  import UIActions from '../../vuex/actions/ui.js';

  export default {
    vuex: {
      getters: {
        searchbarOpen: ({ ui }) => ui.searchbarOpen
      },

      actions: { UIActions }
    },

    methods: {
      updateSearchQuery(e) {
        this.UIActions('UPDATE_SEARCH_QUERY', e.target.value)
      }
    }
  };

</script>
