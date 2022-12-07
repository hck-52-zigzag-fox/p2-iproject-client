<script>
export default {
    name: "TableRowProduct",
    props: ["order", "i"]
}
</script>


<template>
    <tr>
        <th scope="col">{{ i + 1 }}</th>
        <td scope="col"><img :src="order.Product.imageUrl" alt="" width="150"></td>
        <td scope="col">{{ order.Product.name }}</td>
        <td scope="col">{{ order.Product.price }}</td>
        <td scope="col">{{ order.status }}</td>
        <td scope="col">Xendit</td>
        <td scope="col"><i class="bi bi-trash text-danger"></i></td>
    </tr>
</template>