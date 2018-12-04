<template>
  <div class="institutions">
    <h1>List of institutions</h1>
    <div v-if="institutions.length">
      <div class="institutions-list">
        <div class="institution" v-for="(institution, id) in institutions" :key="id">
          <InstitutionCard :data="institution" key="institution._id" />
        </div>
      </div>
    </div>
    <!-- <div class='create-book'>
    <div class="form-element">
      <label>
        Author: <input v-model="institution.name">
      </label>
    </div>
    <div class="form-element">
      <label>
        Title: <input v-model="institution.location">
      </label>
    </div>
    <button @click="createBook">
      Add new book
    </button>
  </div> -->
  <div>
    <button @click="add">Add Institution</button>
  </div>
</div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import InstitutionCard from '@/components/InstitutionCard.vue'

export default {
  name: 'institutions',
  created() {
    this.fetchInstitutions();
  },
  components: {
    InstitutionCard
  },
  computed: {
    ...mapState({
      institutions: state => state.institutions.data,
      likes: state => state.institutions.likes
    }),
  },
  methods: {
    ...mapActions(['fetchInstitutions', 'addLikes', 'addInstitution']),
    add () {
      this.addInstitution(this.institution)
    }
  }
}
</script>
<style>
.institutions-list {
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
}
</style>