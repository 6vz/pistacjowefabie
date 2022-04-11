function changePage(pageName) {
    const pages = [
        'index',
        'galeria',
        'danetechniczne',
        'kalkulator',
        'zamow',
        'kontakt',
    ];
    if (pages.includes(pageName)) {
        window.location.assign(pageName + '.html');
    } else {
        alert(
            'Coś się pokićkało... Odśwież stronę, a następnie spróbuj ponownie. Jeśli to nie pomoże, otwórz PR',
        );
    }
}