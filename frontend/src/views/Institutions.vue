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
    ...mapActions(['fetchInstitutions', 'addLikes'])
  }
}
</script>
