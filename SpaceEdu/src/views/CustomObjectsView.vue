<script>
import { mapActions, mapState } from 'pinia';
import SolarSystemList from '../components/SolarSystemList.vue';
import { useCounterStore } from '../stores/counter';

export default {
    name: "CustomObjectsView",
    components: { SolarSystemList },
    computed:{
        ...mapState(useCounterStore,['customObjects'])
    },
    methods:{
        ...mapActions(useCounterStore,['getCustomObject'])
    },
    created(){
        this.getCustomObject()
    }
}
</script>

<template>

    <div>

    <SolarSystemList :objects="customObjects"/>
    </div>
</template>