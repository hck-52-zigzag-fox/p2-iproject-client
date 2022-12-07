<script>
import ObjectCardVue from './ObjectCard.vue';


export default {
    name: "SolarSystemList",
    components: {
        ObjectCardVue
    },
    props: [ "objects"]
}
</script>

<template>
    <div class="container mx-auto mt-4">
        <div class="row">
            <ObjectCardVue v-for="object in objects" :key="object.id" :object="object" />
        </div><!-- /.row -->
    </div>

</template>