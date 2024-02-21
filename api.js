  // Function to fetch data from the API and render it on the webpage
  function fetchAndRenderData() {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json()) // Parse the JSON response
      .then(posts => {
        // Get the ul element to display the posts
        const postsList = document.getElementById('postsList');
        
        // Clear any existing content in the ul element
        postsList.innerHTML = '';
        
        // Loop through the posts array and create li elements to display each post
        posts.forEach(post => {
          const li = document.createElement('li');
          li.textContent = post.title;
          postsList.appendChild(li);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  // Call the fetchAndRenderData function when the page loads
  document.addEventListener('DOMContentLoaded', fetchAndRenderData);