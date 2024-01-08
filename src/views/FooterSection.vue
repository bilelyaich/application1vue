<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="contact-info">
          <h3 class="add"><strong>Contact:</strong></h3>
          <p>Email: bilelyaich@developer.com</p>
          <p>Téléphone: +216 21761750</p>
          <p>Address: Rte Mahdia Klm 8</p>
        </div>
        <div class="about-info">
          <h3 class="id"><strong>About Us:</strong></h3>
          <p>Welcome to our online commerce platform. We strive to provide an exceptional shopping experience...</p>
          <p>With a commitment to quality and customer satisfaction, we offer a wide range of products to
        meet your needs. Explore our collection and discover the latest trends in fashion, electronics,
        home decor, and more.</p>
        <p>Meet the passionate individuals behind our online commerce platform. Our team is dedicated to ensuring
        that you have a seamless and enjoyable shopping journey. We're here to assist you every step
        of the way.</p>
          <!-- Ajoutez d'autres contenus au besoin -->
        </div>
        <div class="copyright-info">
          <p>&copy; 2024 Your Business. All rights reserved.</p>
          <router-link to="/privacy-policy">Privacy Policy</router-link>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterSection',
  }
  </script>
  
  <style scoped>
  /* Ajoutez ici les styles spécifiques à votre footer */
  .footer {
    background-color: #2b222f;
    color: #ecf0f1;
    padding: 20px;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
  }
  
  .contact-info, .about-info, .copyright-info {
    flex: 1;
    text-align: left;
  }
  
  .router-link {
    color: #3498db;
  }
  
  .add {
    color: #ecf0f1;
    font-size: 35px;
  }
  .id{
    color: #ecf0f1;
    font-size: 35px;
  }
  </style>