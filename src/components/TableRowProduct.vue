<script>
import { mapActions } from 'pinia';
import { RouterLink } from 'vue-router';
import { useStore } from '../stores/counter';

export default {
    name: "TableRowProduct",
    props: ["order", "i"],
    methods: {
        ...mapActions(useStore, ["deleteOrder", "midtrans"])
    },
    components: { RouterLink }
}
</script>


<template>
    <tr>
        <th scope="col" class="align-middle">{{ i + 1 }}</th>
        <td scope="col" class="align-middle"><img :src="order.Product.imageUrl" alt="" width="150"></td>
        <td scope="col" class="align-middle">{{ order.Product.name }}</td>
        <td scope="col" class="align-middle"> {{ order.origin }}</td>
        <td scope="col" class="align-middle"> {{ order.destination }}</td>
        <td scope="col" class="align-middle">Rp {{ order.price }}</td>
        <td scope="col" class="align-middle">{{ order.status }}</td>
        <td scope="col" class="align-middle">
            <h3>
                <a href="" @click.prevent="midtrans">

                    <i class="bi bi-currency-dollar text-success"></i>
                </a>
            </h3>
        </td>
        <td scope="col" class="align-middle">
            <h3>
                <RouterLink to="/orders" @click.prevent="deleteOrder(order.id)" class="bi bi-trash text-danger">
                </RouterLink>
            </h3>
        </td>
    </tr>
</template>