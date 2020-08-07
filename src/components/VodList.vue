<template>
  <div class="container">
    <div class="row">
      <div v-for="item in items" :key="item.id" class="col-sm-2 mt-4">
        <div class="card">
          <img v-lazy="item.keyArtImages[0].url"
               class="card-img-top"
               :alt="item.headline"
          >
          <div class="card-body">
            <h6 class="card-title">
              <router-link :to="`/item/` + item.id">{{ item.headline }}</router-link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'VodList',
  data: function () {
    return {}
  },
  created () {
    this.getItems()
  },
  computed: {
    ...mapState(['items'])
  },
  methods: {
    getItems () {
      this.$store.cache.dispatch('getItems')
    }
  }
}
</script>

<style scoped>
  .card {
    cursor: pointer;
  }

  .card-body {
    padding: 5px;
  }

  .card-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
