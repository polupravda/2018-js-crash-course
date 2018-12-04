<template>
    <div class="wrapper">
        <div class="name">{{ data.name }}</div>
        <div class="location">{{ data.location }}</div>
        <hr>
        <div class="subjects"><span v-for="(subject, id) in data.subjects" :key="id">{{ subject.name }}</span></div>
        <!-- <div>
            <button class="add-applicant" @click="apply">Apply</button>
        </div> -->
    </div>
</template>
<script>
export default {
    name: 'InstitutionCard',
    props: ['data'],
    // methods: {
    //     apply() {
    //         this.addApplicant(this.data._id, '5bed5a3d9ac7897ceb66f89b');
    //         console.log('applied')
    //     }
    // }
}
</script>
<style lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    width: 200px;
    flex-wrap: wrap;
    color: #333;
    font-family: 'Montserrat', sans-serif;
    border-radius: 3px;
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 7px 18px 0 rgba(0,0,0,.1);
    margin: 10px; 

    :first-child {
        margin: 0; 
    }

    .name {
        font-weight: 700;
    }

    .subjects {
        margin: 10px 0;
        font-size: 12px;
        display: flex;
        flex-direction: column;
    }

    .subjects > span::before {
        content: '// ';
    }

    hr {
        color: #ccc;
    }
}

</style>