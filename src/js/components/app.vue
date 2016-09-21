
<template>
  <div>

    <primary-nav></primary-nav>
    <searchbar></searchbar>
    <sidebar></sidebar>

    <div class="MainWrapper">
      <div class="MiniContainer center-block">
        <router-view></router-view>
      </div>
    </div>

    <my-footer></my-footer>

  </div>
</template>

<script>

  import '../../sass/main.sass';

  import Store from '../vuex/index.js';

  import PrimaryNav from './PrimaryNav/index.vue';
  import Searchbar from './Searchbar/index.vue';
  import Sidebar from './Sidebar/index.vue';
  import MyFooter from './MyFooter/index.vue';

  export default {
    store: Store,
    components: { PrimaryNav, Searchbar, Sidebar, MyFooter }
  };

</script>
