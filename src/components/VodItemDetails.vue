<template>
  <div class="container">
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="details.cardImages[0].url" class="card-img" :alt="details.headline">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h1 class="card-title">{{ details.headline }} ({{ details.year }})</h1>
            <p class="card-text">{{ details.synopsis }}</p>
            <p class="card-text"><b>Casting: </b>
              <span v-for="(val, key) in details.cast" :key="key">{{ val.name }}<span v-if="key != Object.keys(details.cast).length - 1">, </span></span>
            </p>
            <p class="card-text"><b>Directors: </b>
              <span v-for="(val, key) in details.directors" :key="key">{{ val.name }}<span v-if="key != Object.keys(details.directors).length - 1">, </span></span>
            </p>
            <p class="card-text"><b>Duration: </b>
              {{ details.duration / 60 + ' minutes'}}
            </p>
            <p class="card-text"><b>Genres: </b>
              <span v-for="(val, key) in details.genres" :key="key">{{ val }} </span>
            </p>
            <p class="card-text"><small class="text-muted">Last updated on {{ details.lastUpdated }}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'VodItemDetails',
  computed: {
    ...mapState(['items']),
    details () {
      return this.items.filter(i => i.id.indexOf(this.$route.params.id) > -1)[0]
    }
  }
}
</script>

<style scoped>

</style>
