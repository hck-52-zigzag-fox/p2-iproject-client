<script>
import { mapActions, mapState } from 'pinia';
import TableRowProduct from '../components/TableRowProduct.vue';
import { useStore } from '../stores/counter';

export default {
    name: "OrderPage",
    components: { TableRowProduct },
    computed: {
        ...mapState(useStore, ["products", "orders"])
    },
    methods: {
        ...mapActions(useStore, ['getOrderById'])
    },
    created() {
        this.getOrderById()
    }
}
</script>

<template>
    <!-- {{ orders }} -->
    <section class="text-center">
        <div class="col-md-8 offset-md-2 mt-3">
            <h2>Table Cart</h2>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Size</th>
                        <th scope="col">Origin</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Delete</th>

                    </tr>
                </thead>
                <tbody>
                    <TableRowProduct v-for="(order, i) in orders" :key="order.id" :order="order" :i="i" />
                </tbody>
            </table>
        </div>
    </section>

</template>