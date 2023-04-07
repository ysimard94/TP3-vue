<template>
    <div>
        <h1>Add a product</h1>
        <!-- Va montrer un message d'erreur ou de succès si les conditions sont ou ne sont pas respectées -->
        <p class="error" v-if="this.error === true">Please fill all the fields</p>
        <p class="success" v-if="this.success === true">The product has been added</p>
        <form @submit.prevent="newProduct">
            <label>Product name</label>
            <input type="text" v-model="product.name" placeholder="Enter product name">
            <label>Description</label>
            <input type="text" v-model="product.description" placeholder="Enter the product description">
            <label>Price</label>
            <input type="text" v-model="product.price" placeholder="Enter product price">
            <!-- Merci Marcos pour m'avoir appris l'existence de v-show LOL-->
            <small style="color: red;" v-show="error_number">Please only enter numbers</small>
            <label>Category</label>
            <select v-model="product.category">
                <option disabled value="">Please select a category</option>
                <!-- Va cycler à travers le tableau des catégories -->
                <option v-for="category in categories" :value="category.name" :key="category.name">{{ category.name }}</option>
            </select>
            <button type="submit">Add Product</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ProductForm',
    props: {
        addTo: Function,
        categories: Array
    },
    data () {
        return {
            product: {
                name: '',
                description: '',
                price: '',
                category: '',
                image: ''
            },
            error: false,
            success: false,
            error_number: false
        }
    },
    methods: {
        newProduct () {
            // Vérifie si les champs sont remplis et si le prix est un nombre, sinon affiche un message d'erreur
            if (this.product.name === '' || this.product.description === '' || this.product.price === '' || this.product.category === '') {
                this.error = true
                return
            }
            if (isNaN(this.product.price)) {
                this.error_number = true
                return
            }
            this.product.image = this.categories.find(category => category.name === this.product.category)?.path
            // Réinitialise les erreurs et affiche un message de succès
            this.error = false
            this.error_number = false
            this.success = true
            // Envoie le produit à la méthode d'ajout de produit du parent
            this.$emit('addTo', this.product)
            // Réinitialise les champs du produit
            this.product = {}
            // Fait disparaitre le message de succès après 5 secondes
            setTimeout(() => {
                this.success = false
            }, 5000)
        }
    }
}
</script>

<style>
form {
    position: relative;
    display: flex;
    flex-direction: column;
}

form input {
    padding: 10px;
    border: 1px solid rgba(128, 128, 128, 0.459);
    border-radius: 5px;
}

form button {
    background-color: #A19B92;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    transition: background-color 200ms ease-in-out;
}

form button:hover {
    background-color: #b6b0a7;
}

form>* {
    margin-top: 16px;
}
</style>
