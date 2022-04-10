function changePage(pageName) {
    const page = pageName + ".html"
    if (pageName == "index") {
        window.location.href = "index.html"
    } else if (pageName = "galeria") {
        window.location.href = "galeria.html"
    } else if (pageName = "danetechniczne") {
        window.location.href = "danetechniczne.html"
    } else if (pageName = "kalkulator") {
        window.location.href = "kalkulator.html"
    } else if (pageName = "zamow") {
        window.location.href = "zamow.html"
    } else if (pageName = "kontakt") {
        window.location.href = "kontakt.html"
    } else {
        alert('Coś się pokićkało... Odśwież stronę, a następnie spróbuj ponownie. Jeśli to nie pomoże, otwórz PR')
    }
}