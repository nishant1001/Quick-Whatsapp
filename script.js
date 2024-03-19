document.getElementById('phoneNumber').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('okButton').click();
    }
});

function searchWhatsApp() {
    var phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber.trim() === '') {
        alert('Please enter a phone number.');
        return;
    }
    // Construct the WhatsApp link
    var whatsappLink = 'https://wa.me/91' + phoneNumber;
    // Open the link in a new tab
    window.open(whatsappLink);
}
