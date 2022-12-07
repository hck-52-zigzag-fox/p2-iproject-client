<script>
import { mapActions } from 'pinia';
import { RouterLink } from 'vue-router';
import { useStore } from '../stores/counter';

export default {
    name: "TableRowProduct",
    props: ["order", "i"],
    methods: {
        ...mapActions(useStore, ["deleteOrder"])
    },
    components: { RouterLink }
}
</script>


<template>
    <tr>
        <th scope="col">{{ i + 1 }}</th>
        <td scope="col" class="align-middle"><img :src="order.Product.imageUrl" alt="" width="150"></td>
        <td scope="col" class="align-middle">{{ order.Product.name }}</td>
        <td scope="col" class="align-middle">Rp {{ order.Product.price }}</td>
        <td scope="col" class="align-middle">{{ order.status }}</td>
        <td scope="col" class="align-middle">Xendit</td>
        <td scope="col" class="align-middle">
            <h3>
                <RouterLink to="/orders" @click.prevent="deleteOrder(order.id)" class="bi bi-trash text-danger">
                </RouterLink>
            </h3>
        </td>
    </tr>
</template>