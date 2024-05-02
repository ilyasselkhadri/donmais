document.addEventListener('DOMContentLoaded', function() {
    const donationForm = document.getElementById('donation-form');
    const thankYouMessage = document.getElementById('thank-you-message');
  
    function showThankYouMessage() {
      donationForm.reset();
      thankYouMessage.style.display = 'block';
      setTimeout(function() {
        thankYouMessage.style.display = 'none';
      }, 3000); // Masque le message après 3 secondes
    }
  
    donationForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(donationForm);
      const amount = formData.get('amount');
      const paymentMethod = formData.get('payment-method');
      const donationFrequency = formData.get('donation-frequency');
  
      // Envoie les données à un serveur ou un service de paiement (non implémenté dans cet exemple)
      // Ici, nous affichons simplement un message de remerciement
      showThankYouMessage();
      
      // Rediriger vers la page de paiement (remplacez l'URL par votre propre URL)
      window.location.href = "https://ilyasselkhadri.github.io/paiement/";
    });
  });