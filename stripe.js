<script src="https://js.stripe.com/v3/"></script>
<button id="checkout-button">Checkout</button>
<script>
  const stripe = Stripe('YOUR_PUBLISHABLE_KEY');

  document.getElementById('checkout-button').addEventListener('click', () => {
    fetch('/create-checkout-session', {
      method: 'POST',
    })
    .then(response => response.json())
    .then(session => {
      return stripe.redirectToCheckout({ sessionId: session.id });
    })
    .then(result => {
      if (result.error) {
        alert(result.error.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
</script>
