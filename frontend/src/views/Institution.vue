<template>
<div>
    {{institution.name}}
    Test
</div>
</template>
<script>
    import { mapActions, mapState } from 'vuex';

    export default {
        name: 'institution',
        created() {
            this.fetchInstitution(this.$route.params.id)
        },
        computed: {
            ...mapState({
                institution: state => state.institutions.institution
            }),
        },
        methods: {
            ...mapActions(['fetchInstitution'])
        }
    }
</script>