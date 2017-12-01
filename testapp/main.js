
$(function() {
    alert("Josh's site loaded successfully" );
    window.location.href = "https://apple.com";

    // Falls bei dem Apple irgendwas schief geht trotzdem auf jeden Fall das Ziel anspringen
    setTimeout(function() {
                window.location.href = "https://google.com";
            }, 5000);
});
