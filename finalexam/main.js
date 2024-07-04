document.addEventListener('DOMContentLoaded', function() {
    // Loop through posts and modals
    for (let i = 1; i <= 9; i++) {
        let postId = `post${i}`;
        let modalId = `editModal${i}`;

        let post = document.getElementById(postId);
        let modal = document.getElementById(modalId);
        let closeBtn = modal.querySelector('.close');
        let editForm = document.getElementById(`editForm${i}`);

        // Open modal and populate form with post data on post click
        post.addEventListener('click', function() {
            var title = this.querySelector('h2').textContent;
            var content = this.querySelector('h3').textContent;
            document.getElementById(`postTitle${i}`).value = title;
            document.getElementById(`postContent${i}`).value = content;
            modal.style.display = 'block';
        });

        // Close modal on close button click
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        // Close modal on outside click
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });

        // Handle form submission and update post content
        editForm.addEventListener('submit', function(event) {
            event.preventDefault();
            var updatedTitle = editForm.elements.postTitle.value;
            var updatedContent = editForm.elements.postContent.value;
            updatePostContent(postId, updatedTitle, updatedContent);
            modal.style.display = 'none'; // Close modal after submitting
        });
    }

    // Add Product modal functionality
    let addBtn = document.querySelector('.add-button');
    let addModal = document.getElementById('addModal');
    let addCloseBtn = addModal.querySelector('.close');
    let addForm = document.getElementById('addForm');

    // Open add modal on button click
    addBtn.addEventListener('click', function() {
        addModal.style.display = 'block';
    });

    // Close add modal on close button click
    addCloseBtn.addEventListener('click', function() {
        addModal.style.display = 'none';
    });

    // Close add modal on outside click
    window.addEventListener('click', function(event) {
        if (event.target == addModal) {
            addModal.style.display = 'none';
        }
    });

    // Handle add form submission
    addForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var productName = addForm.elements.productName.value;
        var productPrice = addForm.elements.productPrice.value;
        var productImage = addForm.elements.productImage.value;
        var productId = addForm.elements.productId.value;
        addNewProduct(productName, productPrice, productImage, productId);
        addModal.style.display = 'none'; // Close modal after submitting
        addForm.reset(); // Reset form fields
    });

    // Function to add new product to the list
    function addNewProduct(name, price, image, id) {
        // Create new post element
        let newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.id = `post${id}`;

        // Create image element
        let img = document.createElement('img');
        img.src = image;
        newPost.appendChild(img);

        // Create h2 element for product name
        let title = document.createElement('h2');
        title.textContent = name;
        newPost.appendChild(title);

        // Create h3 element for product price
        let priceTag = document.createElement('h3');
        priceTag.textContent = `P${price}`;
        newPost.appendChild(priceTag);

        // Create h3 element for product ID
        let productIdTag = document.createElement('h3');
        productIdTag.textContent = `ID: ${id}`;
        newPost.appendChild(productIdTag);

        // Append new post to post container
        let postContainer = document.querySelector('.post-container');
        postContainer.appendChild(newPost);

        // Attach event listeners and update modal for new post
        attachPostEvents(newPost, id);
    }

    // Function to attach events to newly added posts
    function attachPostEvents(post, id) {
        // Create edit modal for the new post
        let newModal = createEditModal(id);

        // Open edit modal and populate form with post data on post click
        post.addEventListener('click', function() {
            var title = post.querySelector('h2').textContent;
            var content = post.querySelector('h3').textContent;
            document.getElementById(`postTitle${id}`).value = title;
            document.getElementById(`postContent${id}`).value = content;
            newModal.style.display = 'block';
        });
    }

    // Function to create edit modal for a specific post
    function createEditModal(id) {
        let modalId = `editModal${id}`;
        let modal = document.getElementById(modalId);
        let closeBtn = modal.querySelector('.close');
        let editForm = document.getElementById(`editForm${id}`);

        // Close modal on close button click
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        // Close modal on outside click
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });

        // Handle form submission and update post content
        editForm.addEventListener('submit', function(event) {
            event.preventDefault();
            var updatedTitle = editForm.elements.postTitle.value;
            var updatedContent = editForm.elements.postContent.value;
            updatePostContent(`post${id}`, updatedTitle, updatedContent);
            modal.style.display = 'none'; // Close modal after submitting
        });

        return modal;
    }

    // Function to update post content after form submission
    function updatePostContent(postId, updatedTitle, updatedContent) {
        var post = document.getElementById(postId);
        post.querySelector('h2').textContent = updatedTitle;
        post.querySelector('h3').textContent = updatedContent;
    }
});


function showEditOptions() {
    // Show the edit modal
    var editModal = document.getElementById('editModal');
    editModal.style.display = 'block';

    // Fetch data and populate the form (simulated for demo)
    var customerName = document.getElementById('customerName');
    var customerEmail = document.getElementById('customerEmail');
    var customerPhone = document.getElementById('customerPhone');
    var customerAddress = document.getElementById('customerAddress');
    var deliveryStatus = document.getElementById('deliveryStatus');

    // Example data (replace with actual data retrieval)
    customerName.value = 'John Doe';
    customerEmail.value = 'john.doe@example.com';
    customerPhone.value = '123-456-7890';
    customerAddress.value = '123 Main St, Anytown, USA';
    deliveryStatus.value = 'pending'; // Default to pending, should fetch actual status
}